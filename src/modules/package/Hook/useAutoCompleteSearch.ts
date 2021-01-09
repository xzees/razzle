import _ from 'lodash';
import { useEffect, useState } from 'react';
import StorageManager from 'common/Manager/StorageManager';
import PackageManager from '../Manager/PackageManager';
import DestinationModel from '../Models/GetModel/Destination/DestinationModel';

type Props = {
  destination: DestinationModel | null;
  setDestination?: (destination: DestinationModel | null) => void;
  handleCloseModal?: () => void;
};

interface Option {
  tag: string;
  code?: string;
  name: string;
  type: string;
  countryName?: string;
}

interface Output {
  value: Option | null;
  inputValue: string;
  options: Option[];
  histories: Option[];
  loading: boolean;
  isSelectedValue: boolean;
  getOptionLabel: (option: Option) => string;
  getOptionSelected: (option: Option, value: Option) => boolean;
  onKeyUp: (event: React.KeyboardEvent<any>) => void;
  onChange: (event: React.ChangeEvent<any>, newValue: Option | null) => void;
}

const useAutoCompleteSearch = ({
  destination,
  setDestination,
  handleCloseModal,
}: Props): Output => {
  const [value, setValue] = useState<Option | null>(
    destination ? { ...destination, tag: destination.name } : null
  );
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [histories, setHistories] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSelectedValue, setIsSelectedValue] = useState<boolean>(false);

  useEffect(() => {
    setHistories(getHistories());
  }, []);

  const getOptionLabel = (option: Option) => {
    return option.tag;
  };

  const getOptionSelected = (option: Option, value: Option) => {
    if (option.type === 'activity') return option.code === value.code;
    return option.name === value.name;
  };

  const onKeyUp = async (event: React.KeyboardEvent<any>) => {
    const destination = (event.target as HTMLInputElement).value;
    setInputValue(destination);
    if (isSelectedValue) setIsSelectedValue(false);
    if (destination.length > 0) {
      setLoading(true);
      const items = await PackageManager.default.searchDestination(
        'th',
        destination
      );
      // const items = [
      //   {
      //     name: 'japan',
      //     type: 'country',
      //   },
      //   {
      //     name: 'New York CityPASS',
      //     code: 'E-U10-NYCITYPASS',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: 'SeaWorld All Day Dine',
      //     code: 'E-U10-SWDDAYDINE',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: 'Legoland Florida',
      //     code: 'E-U10-LEGOFLORID',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: 'Empire State Building Observatory',
      //     code: 'E-U10-EMPIREOBS',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: 'New York City Explorer Pass',
      //     code: 'E-U10-NYCEXPLORE',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: 'The Big Apple Heli Tour',
      //     code: 'E-U10-LIBIG',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: '9/11 Ground Zero Tour and 9/11 Museum Entry',
      //     code: 'E-U10-911MUSEUM',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: 'Blue Man Group',
      //     code: 'E-U10-BMGMCO',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: 'SeaWorld San Antonio',
      //     code: 'E-U10-SEASANTONI',
      //     countryName: 'United States',
      //     type: 'activity',
      //   },
      //   {
      //     name: '4x4 Desert Safari with BBQ Dinner at Abu Dhabi Camp',
      //     code: 'E-E10-AE-AUHDR1',
      //     countryName: 'United Arab Emirates',
      //     type: 'activity',
      //   },
      // ];
      const options = _.map(items, (item: any) => ({
        ...item,
        tag: destination,
      }));
      setOptions(options);
      setLoading(false);
    } else {
      if (value) setValue(null);
    }
  };

  const onChange = (event: React.ChangeEvent<any>, newValue: Option | null) => {
    if (newValue) {
      setValue({ ...newValue, tag: newValue.name });
      if (setDestination) setDestination(_.omit(newValue, ['tag']));
      saveHistories(newValue);
      setHistories(getHistories());
      setIsSelectedValue(true);
    } else {
      setValue(null);
      if (setDestination) setDestination(null);
    }
    if (handleCloseModal) handleCloseModal();
  };

  const getHistories = () => {
    const storageHistories = StorageManager.default.getItem(
      'search_destination_histories'
    );
    if (storageHistories) return JSON.parse(storageHistories);
    return [];
  };

  const saveHistories = (value: Option) => {
    try {
      const storageHistories = StorageManager.default.getItem(
        'search_destination_histories'
      );
      let histories: Option[];
      if (storageHistories) {
        histories = JSON.parse(storageHistories) as Option[];
        if (
          _.some(histories, (item: Option) =>
            _.isEqual(_.omit(item, ['tag']), _.omit(value, ['tag']))
          )
        )
          _.remove(histories, (item: Option) =>
            _.isEqual(_.omit(item, ['tag']), _.omit(value, ['tag']))
          );
        histories = [value, ...histories];
      } else {
        histories = [value];
      }
      const historiesJSONString = JSON.stringify(_.take(histories, 3));
      StorageManager.default.setItem(
        'search_destination_histories',
        historiesJSONString
      );
    } catch (error) {
      StorageManager.default.removeItem('search_destination_histories');
    }
  };

  return {
    value,
    inputValue,
    options,
    histories,
    loading,
    isSelectedValue,
    getOptionLabel,
    getOptionSelected,
    onKeyUp,
    onChange,
  };
};

export default useAutoCompleteSearch;
