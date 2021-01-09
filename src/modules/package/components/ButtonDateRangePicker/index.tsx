import React, { FunctionComponent } from 'react';
import {
  formatMYForAutocomplete,
  getDate,
  getDayTh,
} from 'common/Manager/Helper';
import {
  ButtonOpenDateRangePickerWrapper,
  FromDatePickerWrapper,
  ToDatePickerWrapper,
  ValueWrapper,
  Label,
} from './Style';

type Props = {
  isOpacity?: boolean;
  startDate: Date | null;
  endDate: Date | null;
  onClick?: (event: React.MouseEvent<any>) => void;
};

const ButtonDateRangePicker: FunctionComponent<Props> = (props: Props) => {
  const { isOpacity, startDate, endDate, onClick } = props;

  return (
    <ButtonOpenDateRangePickerWrapper isOpacity={isOpacity} onClick={onClick}>
      <FromDatePickerWrapper>
        <Label>จาก</Label>
        <ValueWrapper isOpacity={isOpacity}>
          {startDate
            ? `${getDayTh(startDate.getDay())}. ${getDate(
                startDate
              )} ${formatMYForAutocomplete(startDate)}`
            : 'เลือกวันที่เริ่มต้นกิจกรรม'}
        </ValueWrapper>
      </FromDatePickerWrapper>
      <ToDatePickerWrapper>
        <Label>ถึง</Label>
        <ValueWrapper isOpacity={isOpacity}>
          {endDate
            ? `${getDayTh(endDate.getDay())}. ${getDate(
                endDate
              )} ${formatMYForAutocomplete(endDate)}`
            : 'เลือกวันที่สิ้นสุดกิจกรรม'}
        </ValueWrapper>
      </ToDatePickerWrapper>
    </ButtonOpenDateRangePickerWrapper>
  );
};

export default ButtonDateRangePicker;
