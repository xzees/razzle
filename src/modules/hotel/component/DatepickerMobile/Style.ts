import styled, { css } from 'styled-components';
import { TextField } from "@material-ui/core";
import ScreenManager from 'common/Manager/ScreenManager';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import { Grid, Box } from '@material-ui/core';

interface DayProps {
  opacityButton: string,
  colorButton: string,
  backgroundButton: string,
  isHoliday: boolean,
  isCurrentDate: boolean
}

interface RingProps {
  opacityRing: string
}

interface ButtonProps{
  buttontype: string;
  //onClick?: any;
}

interface HolidayProps{
  isDisplay: boolean;
}

interface ContainerProps{
  windowinnerheight: Number;
}

interface WeekdayProps{
  hasSpacing: boolean;
}

const Style = {
  
  Layout: styled.div`
    .firstOrLastSelect{
      color: red;
    }
  `,
  ulDivOutSide: styled.div`
    font-size: 21px !important;
    color:${ColorManager.default.primaryColor};
    position: relative;
    border-radius: 5px;
  `,
  NavButton: styled.button`
    background: transparent;
    padding: 8px;
    font-size: 12px;
    border: none;
  `,
  Day: styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
    margin: 0 0 16px;
  `,
  Holiday: styled.div<HolidayProps>`
    margin: 0 3px 16px;
    display: ${props => props.isDisplay ? 'flex' : 'none'};
    flex-direction: column;
    & > p, & > div {
      margin: 0 16px;
      font-size: ${FontManager.default.small};
      color:${ColorManager.default.fourthColor};
    }
    & > div {
      font-size: ${FontManager.default.small};
    }
    & .holiday-text-header{
      font-size: ${FontManager.default.small};
      line-height: 16px
    }
    & .holiday-text-date{
      color:${ColorManager.default.redColor};
      width: 95px;
      vertical-align: top;
      line-height: 16px
    }
    & .holiday-text-title{
      color:${ColorManager.default.black};
      line-height: 16px
    }
  `,
  WeekdayDiv: styled.div<WeekdayProps>`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
    margin:0;
    font-size: ${FontManager.default.text};
    margin-right: ${props => props.hasSpacing ? '5px' : 0};
    margin-bottom: ${props => props.hasSpacing ? 0 : '5px'};
  `,
  WeekdayLabels: styled.div`
      display: flex;
      justify-content: center;
      font-family: DBHeaventRoundedv32;
      background-color: ${ColorManager.default.greyColor};
      color: ${ColorManager.default.fourthColor};
      padding: 10px;
      height: 48px;
      font-size: ${FontManager.default.text};
  `,
  MonthLabel: styled.div`
      display:flex; 
      justify-content: center; 
      text-align: center; 
      margin: 0 0 5px;
      width: 100%;
      font-family: DBHeaventRoundedv32;
      align-items: center;
      font-size: 20px;
      background-color: ${ColorManager.default.greyColor};
      height: 48px;
      color: ${ColorManager.default.fourthColor};
      font-size: ${FontManager.default.text};
  `,  
  DayButton: styled.button<DayProps>`
    cursor: pointer;
    outline: 0;
    border: 0;
    margin: 0;
    padding: 0 4px;
    font-size: ${FontManager.default.text};
    font-family: DBHeaventRoundedv32;
    opacity: ${props => props.opacityButton || ""};
    color: ${props => props.isHoliday ? ColorManager.default.redColor : (props.isCurrentDate ? ColorManager.default.primaryColor : props.colorButton)};
    font-weight: ${props => props.isCurrentDate ? 'bold' : 'normal'};
    background: ${props => props.backgroundButton || ""};
  `,
  DayRing: styled.div<RingProps>`
    margin: 0 auto;
    padding: 0;
    background-color: rgba(255, 255, 255, ${props => props.opacityRing || "0"});
    border: 0.1em solid rgba(68, 0, 153, ${props => props.opacityRing || "0"});
    border-radius: 50%;
    height: 43px;
    width: 43px;
    line-height: 40px;
  `,
  CalendarScrollContainer: styled.div<ContainerProps>`
    position: relative;
    overflow-y: scroll;
    height: calc(${props =>props.windowinnerheight.toString()}px - 185px);
    scroll-behavior: smooth;
  `,
  FooterButtonContainer: styled.div`
    display:flex;
    align-items: stretch;
    flex-direction: row;
    height:55px;
    flex-wrap: wrap;
    position: absolute;
    bottom: 30px;
    padding: 0 15px;
    width: 100%;
  `,
  FooterButton: styled.button<ButtonProps>`
    display:flex;
    justify-content: center;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    border: 0px;
    font-size: ${FontManager.default.text};
    margin: 0 3px;
    border: 2px solid ${props => props.buttontype === 'reset' ? ColorManager.default.redColor : '#3f256b'};
    background-color: ${props => props.buttontype === 'reset' ? ColorManager.default.white : '#3f256b'};
    color: ${props => props.buttontype === 'reset' ? ColorManager.default.redColor : ColorManager.default.white};
    flex-grow: ${props => props.buttontype === 'reset' ? 45 : 55};
    border-radius: 4px;
  `,
  MonthContainer: styled.div`
  `,
  Box85SpaceHeight: styled.div`
    height:85px;
    width: 100%;
    display:block;
  `,
};

export default Style;