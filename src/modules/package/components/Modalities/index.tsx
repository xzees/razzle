import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { CalendarTodayOutlined } from '@material-ui/icons';
import {
  formatMYForAutocomplete,
  getDate,
  getDayTh,
} from 'common/Manager/Helper';
import useCollapse from 'modules/package/Hook/useCollapse';
import DatePicker from '../DatePicker';
import ModalScreen from '../ModalScreen';
import Item from './Item';
import SelectedItem from './SelectedItem';
import Loading from './Loading';
import { SelectDatePickerWrapper, ButtonDatePicker } from './Style';

type Props = {
  isMobile: boolean;
  modalities: any[];
  currency: string;
  dateSelect: Date | null;
  isLoading: boolean;
  handleChangeDate: (date: Date | null) => void;
  addToCart: (modalityCartDetail: ModalityCartDetail) => void;
  handleSelectedDate: () => void;
};

const Modalities: FunctionComponent<Props> = (props: Props) => {
  const {
    isMobile,
    modalities,
    currency,
    dateSelect,
    isLoading,
    handleChangeDate,
    addToCart,
    handleSelectedDate,
  } = props;

  const { expanded, handleChange } = useCollapse();

  const isLarge = useMediaQuery(
    `(max-width: ${useTheme().breakpoints.values.lg}px)`
  );

  if (isMobile) {
    return (
      <>
        <ModalScreen
          title="เลือกวัน"
          fullscreen
          buttonOpenModal={(props: any) => {
            return (
              <ButtonDatePicker onClick={props.onClick}>
                <CalendarTodayOutlined fontSize="small" />
                <span>
                  {dateSelect
                    ? `${getDayTh(dateSelect.getDay())}. ${getDate(
                        dateSelect
                      )} ${formatMYForAutocomplete(dateSelect)}`
                    : 'เลือกวันที่'}
                </span>
              </ButtonDatePicker>
            );
          }}
        >
          <DatePicker
            isMobile
            dateSelect={dateSelect}
            alignment="right"
            handleChangeDate={handleChangeDate}
            handleSelectedDate={handleSelectedDate}
          />
        </ModalScreen>
        {isLoading ? (
          <Loading isMobile />
        ) : (
          _.map(modalities, (item: any, index: number) => {
            return expanded === item?.code ? (
              <SelectedItem
                isMobile
                item={item}
                currency={currency}
                test={1}
                addToCart={addToCart}
                handleChange={handleChange}
              />
            ) : (
              <Item
                isMobile
                key={item?.code}
                item={item}
                currency={currency}
                expanded={expanded}
                test={index}
                handleChange={handleChange}
              />
            );
          })
        )}
      </>
    );
  }

  return (
    <>
      <SelectDatePickerWrapper>
        <DatePicker
          isMobile={false}
          dateSelect={dateSelect}
          alignment="right"
          handleChangeDate={handleChangeDate}
          handleSelectedDate={handleSelectedDate}
        />
      </SelectDatePickerWrapper>
      {isLoading ? (
        <Loading isMobile={false} />
      ) : (
        _.map(modalities, (item: any, index: number) => {
          return expanded === item?.code ? (
            <SelectedItem
              isMobile={false}
              item={item}
              currency={currency}
              test={1}
              addToCart={addToCart}
              handleChange={handleChange}
            />
          ) : (
            <Item
              isMobile={false}
              isLarge={isLarge}
              key={item?.code}
              item={item}
              currency={currency}
              expanded={expanded}
              test={index}
              handleChange={handleChange}
            />
          );
        })
      )}
    </>
  );
};

export default Modalities;
