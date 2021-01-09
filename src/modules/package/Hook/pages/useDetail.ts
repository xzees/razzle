import _ from 'lodash';
import { useEffect, useState } from 'react';
import qs from 'query-string';
import ActivityModel from 'modules/package/Models/GetModel/Detail/ActivityModel';
import DestinationModel from 'modules/package/Models/GetModel/Destination/DestinationModel';
import { Modality } from 'modules/package/Models/GetModel/Detail/ModalityModel';
import activityDetail from 'modules/package/data/activity.json';
import modalityDetail from 'modules/package/data/modality.json';
import PackageManager, {
  FilterDetailParams,
} from 'modules/package/Manager/PackageManager';
import DestinationStore from 'modules/package/store/Destination';

type Props = {
  activityCode: string;
  dateRange: DateRange;
  setDestination: (destination: DestinationModel | null) => void;
  setDateRange: (dateRange: DateRange) => void;
};

interface Output {
  activity?: ActivityModel;
  modalities: Modality[];
  modalityCart: ModalityCart | null;
  paxes: Pax[];
  dateSelect: Date | null;
  isLoading: boolean;
  isLoadingModality: boolean;
  isLoadingHeaderSearch: boolean;
  addToCart: (ModalityCartDetail: ModalityCartDetail) => void;
  handleChangeQuantity: (pax: Pax) => void;
  clearQuantities: () => void;
  handleChangeDate: (date: Date | null) => void;
  handleSelectedDate: () => void;
}

const useDetail = (props: Props): Output => {
  const { activityCode, dateRange, setDestination, setDateRange } = props;

  const [activity, setActivity] = useState<ActivityModel>();
  const [modalities, setModalities] = useState<Modality[]>([]);
  const [modalityCart, setModalityCart] = useState<ModalityCart | null>(null);
  const [paxes, setPaxes] = useState<Pax[]>([]);
  const [dateSelect, setDateSelect] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingModality, setIsLoadingModality] = useState<boolean>(false);
  const [isLoadingHeaderSearch, setIsLoadingHeaderSearch] = useState<boolean>(
    true
  );

  useEffect(() => {
    (async () => {
      const { code, name, countryName, type, startDate, endDate } = qs.parse(
        location.search
      );
      const dateFrom = new Date(startDate as string);
      const dateTo = new Date(endDate as string);
      const destination =
        type === 'activity'
          ? ({ code, name, countryName, type } as DestinationModel)
          : ({ name, type } as DestinationModel);
      setDestination(destination);
      setDateRange({ start: dateFrom, end: dateTo } as DateRange);
      setIsLoadingHeaderSearch(false);
      const activity = await PackageManager.default.filterActivityDetail({
        activityCode,
        dateFrom,
        dateTo,
      } as FilterDetailParams);
      const modality = await PackageManager.default.filterModalityDetail({
        activityCode,
        dateFrom,
        dateTo,
      } as FilterDetailParams);
      setActivity(activity);
      if (modality) setModalities(modality.modalities || []);
      setDateSelect(dateFrom);
      setIsLoading(false);
    })();
  }, []);

  const addToCart = (modalityCartDetail: ModalityCartDetail) => {
    setModalityCart({ detail: modalityCartDetail, paxes });
  };

  const handleChangeQuantity = (pax: Pax) => {
    const index = _.findIndex(paxes, { paxType: pax.paxType });
    if (index >= 0) _.remove(paxes, { paxType: pax.paxType });
    setPaxes([...paxes, pax]);
  };

  const clearQuantities = () => {
    setPaxes([]);
    setModalityCart(null);
  };

  const handleChangeDate = async (date: Date | null) => {
    setDateSelect(date);
  };

  const handleSelectedDate = async () => {
    if (dateSelect && dateRange.end) {
      setIsLoadingModality(true);
      const modality = await PackageManager.default.filterModalityDetail({
        activityCode,
        dateFrom: dateSelect,
        dateTo: dateRange.end,
      });
      if (modality) setModalities((modalityDetail.modalities as any) || []);
      setIsLoadingModality(false);
    }
  };

  return {
    activity,
    modalities,
    modalityCart,
    paxes,
    dateSelect,
    isLoading,
    isLoadingModality,
    isLoadingHeaderSearch,
    addToCart,
    handleChangeQuantity,
    clearQuantities,
    handleChangeDate,
    handleSelectedDate,
  };
};

export default useDetail;
