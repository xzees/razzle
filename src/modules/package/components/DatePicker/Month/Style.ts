import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface MonthLabelWrapperProps {
  height?: string | number;
  mb?: string | number;
}

interface MonthDateWrapperProps {
  paddingHorizontal?: string | number;
}

export const MonthLabelWrapper = styled.div<MonthLabelWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props: MonthLabelWrapperProps) => props.height || '51px'};
  color: ${ColorManager.default.fourthColor};
  background-color: ${ColorManager.default.greyColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  margin-bottom: ${(props: MonthLabelWrapperProps) => props.mb || '5px'};
`;

export const WeekDayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 51px;
  padding-left: 21px;
  padding-right: 21px;
  background-color: ${ColorManager.default.greyColor};
`;

export const DayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
`;

export const MonthDateWrapper = styled.div<MonthDateWrapperProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 2px;
  padding-left: ${(props: MonthDateWrapperProps) =>
    props.paddingHorizontal || '21px'};
  padding-right: ${(props: MonthDateWrapperProps) =>
    props.paddingHorizontal || '21px'};
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const HolidayWrapper = styled.div`
  margin: 0px 24px 24px;
`;

export const HolidayListWrapper = styled.div`
  display: grid;
  grid-template-columns: 51px 1fr;
  margin-top: 5px;
`;

export const HolidayTitle = styled.p`
  margin: 0px;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.meduimSmall};
  line-height: 1.13;
`;

export const HolidayDate = styled.span`
  color: ${ColorManager.default.redColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 1;
`;

export const HolidayName = styled.span`
  color: #010101;
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 1;
`;
