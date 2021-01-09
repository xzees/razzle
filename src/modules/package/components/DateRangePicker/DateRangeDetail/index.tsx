import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { getDayTh, subMonthTh, getFullYearTH } from 'common/Manager/Helper';
import {
  DateRangeDetailWrapper,
  DateRangeSelectDetailWrapper,
  DateSelectDetailWrapper,
  DateSelectWrapper,
  DetailWrapper,
  Detail,
  DateSelect,
  CallMadeIcon,
} from './Style';

type Props = {
  isMobile: boolean;
  startDate: Date | null;
  endDate: Date | null;
  hoveredDate?: Date | null;
  getCountRangeDate?: (date: Date | null | undefined) => number;
  onClick?: (event: React.MouseEvent<any>) => void;
};

const DateRangeDetail: FunctionComponent<Props> = (props: Props) => {
  const {
    isMobile,
    startDate,
    endDate,
    hoveredDate,
    getCountRangeDate,
    onClick,
  } = props;

  return (
    <DateRangeDetailWrapper isMobile={isMobile}>
      <DateRangeSelectDetailWrapper onClick={onClick}>
        <DateSelectWrapper>
          {startDate ? _.padStart(startDate.getDate().toString(), 2, '0') : '-'}
        </DateSelectWrapper>
        <DateSelectDetailWrapper>
          <Detail>เริ่มต้น</Detail>
          {startDate && (
            <>
              <DateSelect>{`${getDayTh(startDate.getDay())}.`}</DateSelect>
              <DateSelect>
                {`${subMonthTh(startDate.getMonth())} ${getFullYearTH(
                  startDate.getFullYear()
                )}`}
              </DateSelect>
            </>
          )}
        </DateSelectDetailWrapper>
      </DateRangeSelectDetailWrapper>
      {isMobile ? (
        <CallMadeIcon />
      ) : (
        getCountRangeDate && (
          <DateRangeSelectDetailWrapper>
            <DetailWrapper mr="13px">รวม</DetailWrapper>
            <DateSelectWrapper hasBorder>
              {getCountRangeDate(hoveredDate)}
            </DateSelectWrapper>
            <DetailWrapper ml="13px">วัน</DetailWrapper>
          </DateRangeSelectDetailWrapper>
        )
      )}
      <DateRangeSelectDetailWrapper onClick={onClick} justify="flex-end">
        <DateSelectDetailWrapper textAlign="right">
          <Detail>สิ้นสุด</Detail>
          {endDate && (
            <>
              <DateSelect>{`${getDayTh(endDate.getDay())}.`}</DateSelect>
              <DateSelect>
                {`${subMonthTh(endDate.getMonth())} ${getFullYearTH(
                  endDate.getFullYear()
                )}`}
              </DateSelect>
            </>
          )}
        </DateSelectDetailWrapper>
        <DateSelectWrapper>
          {endDate ? _.padStart(endDate.getDate().toString(), 2, '0') : '-'}
        </DateSelectWrapper>
      </DateRangeSelectDetailWrapper>
    </DateRangeDetailWrapper>
  );
};

export default DateRangeDetail;
