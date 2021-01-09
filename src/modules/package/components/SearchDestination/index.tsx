import React, { FunctionComponent } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import RootStore from 'stores';
import AutoCompleteSearch from '../AutoCompleteSearch';
import DateRangePicker from '../DateRangePicker';
import ModalScreen from '../ModalScreen';
import { InputSearch } from '../InputSearch';
import ButtonDateRangePicker from '../ButtonDateRangePicker';
import { SearchButton } from './Style';

type Props = {
  stores?: RootStore;
  isMobile: boolean;
  isOpacity?: boolean;
  width?: string | number;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  autoCompleteSearchProps?: any;
  dateRangePickerProps?: any;
  searchButtonProps?: any;
};

const SearchDestination: FunctionComponent<Props> = (props: Props) => {
  const {
    stores,
    isMobile,
    isOpacity,
    width,
    spacing,
    autoCompleteSearchProps,
    dateRangePickerProps,
    searchButtonProps,
  } = props;

  const uiStore = stores!.PackageRootStore.DestinationStore;

  if (isMobile) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModalScreen
            title="ค้นหากิจกรรม"
            fullscreen
            buttonOpenModal={(props: any) => {
              return (
                <InputSearch
                  value={uiStore.destination?.name}
                  label="ค้นหาโดยจุดหมายปลายทาง"
                  placeholder="ค้นหากิจกรรม"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    readOnly: true,
                  }}
                  onClick={props.onClick}
                />
              );
            }}
          >
            <AutoCompleteSearch id="autocomplete-search" isMobile />
          </ModalScreen>
        </Grid>
        <Grid item xs={12}>
          <ModalScreen
            title="ปฏิทิน"
            fullscreen
            buttonOpenModal={(props: any) => {
              return (
                <ButtonDateRangePicker
                  startDate={uiStore.dateRange.start}
                  endDate={uiStore.dateRange.end}
                  onClick={props.onClick}
                />
              );
            }}
          >
            <DateRangePicker isMobile />
          </ModalScreen>
        </Grid>
        <Grid item xs={12}>
          <SearchButton onClick={uiStore.searchDestination}>ค้นหา</SearchButton>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={spacing || 2}>
      <Grid item xs={autoCompleteSearchProps?.xs || 12}>
        <AutoCompleteSearch
          isMobile={false}
          isOpacity={isOpacity}
          width={width}
        />
      </Grid>
      <Grid item xs={dateRangePickerProps?.xs || 9}>
        <DateRangePicker isOpacity={isOpacity} isMobile={false} />
      </Grid>
      <Grid item xs={searchButtonProps?.xs || 3}>
        <SearchButton onClick={uiStore.searchDestination}>
          ค้นหากิจกรรม
        </SearchButton>
      </Grid>
    </Grid>
  );
};

export default inject('stores')(observer(SearchDestination));
