import styled from 'styled-components';
import {
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import ColorManager from 'common/Manager/ColorManager';
import { TextField } from "@material-ui/core";

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

export const CalendarScrollContainer = styled.div<ContainerProps>`
  position: relative;
  overflow-y: scroll;
  height: calc(${props =>props.windowinnerheight.toString()}px - 50px);
  scroll-behavior: smooth;
`;

export const ViewButton = styled.a`
  border: 2px solid #694a8d;
  border-radius: 4px;
  color: #694a8d;
  display: table-cell;
  font-size: 1.3rem;
  height: 2.8125rem;
  max-width: 10rem;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  padding: 8px 24px;
  font-family: "DBHeaventRoundedMedv32";
`;
export const MLabel = styled.div`
  width:100%;
  position: relative;
  height: 45px;
  background: ${ColorManager.default.fourthColor};
  color: ${ColorManager.default.white};
  text-align:center; 
  display: grid;
  align-items: center;
  font-size: 1.3rem;
`;

export const TextFields = styled(TextField)`
    background:white;
    font-size: 21px !important;
    width:100%;
    border-radius: 5px !important;
    :focus {
      border-color: inherit !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      outline:none !important;
    }
    input {
      padding: 11px 25px 11px 11px;
    }
`;

export const InputFields = styled(TextField)`
    background:white;
    font-size: 21px !important;
    width:100%;
    border-radius: 5px !important;
    :focus {
      border-color: inherit !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      outline:none !important;
    }
    fieldset {
      border: none;
    }
    input {
      padding: 11px 25px 11px 25px;
      border: none;
    }
`;

export const InputFieldsMap = styled(TextField)`
    background:white;
    font-size: 21px !important;
    width:100%;
    border-radius: 5px !important;
    :focus {
      border-color: inherit !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      outline:none !important;
    }
    fieldset {
      border: none;
    }
    input {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 2.3rem;
      padding-top: 0;
      padding-bottom: 0;
      text-align: center;
    }
`;

export const UlDiv = styled.div`
    font-size: 21px !important;
    color: ${ColorManager.default.primaryColor};
    position: relative;
    width: 100%;
`;
 
export const MCssTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        background: ColorManager.default.greyColor,
        border: 'none',
        '&:hover fieldset': {
          border: 'none'
        },
        '&.Mui-focused fieldset': {
          border: 'none'
        },
      },
    },
  })(InputFields);
  
  export const MCssTextFieldMap = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        background: ColorManager.default.greyColor,
        border: 'none',
        '&:hover fieldset': {
          border: 'none'
        },
        '&.Mui-focused fieldset': {
          border: 'none'
        },
      },
    },
  })(InputFieldsMap);
  
  const CssTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          border: '1px solid black'
        },
        '&.Mui-focused fieldset': {
          border: '1px solid black'
        },
      },
    },
  })(TextFields);


export const Style = {
  
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
      margin: 0 3px 16px;
    `,
    Holiday: styled.div<HolidayProps>`
      margin: 0 3px 16px;
      display: ${props => props.isDisplay ? 'flex' : 'none'};
      flex-direction: column;
      & > p, & > div {
        margin: 0 16px;
        font-size: 1rem;
        color:${ColorManager.default.fourthColor};
      }
      & > div {
        font-size: 1.1rem;
      }
      & .holiday-text-date{
        color:${ColorManager.default.redColor};
      }
      & .holiday-text-title{
        color:${ColorManager.default.black};
      }
    `,
    WeekdayDiv: styled.div`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-content: center;
      margin:0 3px 2px;
      font-size: 1.4rem;
    `,
    WeekdayLabels: styled.div`
        display: flex;
        justify-content: center;
        font-family: DBHeaventRoundedv32;
        background-color: ${ColorManager.default.greyColor};
        color: ${ColorManager.default.fourthColor};
        padding: 7px;
        font-size: 1.4rem;
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
        height:40px;
        color: ${ColorManager.default.fourthColor};
        font-size: 1.4rem;
    `,  
    DayButton: styled.button<DayProps>`
      cursor: pointer;
      outline: 0;
      border: 0;
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
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
      height: 40px;
      width: 40px;
      line-height: 36px;
    `,
    CalendarScrollContainer: styled.div<ContainerProps>`
      position: relative;
      overflow-y: scroll;
      height: calc(${props =>props.windowinnerheight.toString()}px - 180px);
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
      font-size: 1.5rem;
      margin: 0 3px;
      border: 2px solid ${props => props.buttontype === 'reset' ? ColorManager.default.redColor : '#3f256b'};
      background-color: ${props => props.buttontype === 'reset' ? ColorManager.default.white : '#3f256b'};
      color: ${props => props.buttontype === 'reset' ? ColorManager.default.redColor : ColorManager.default.white};
      flex-grow: ${props => props.buttontype === 'reset' ? 45 : 55};
      border-radius: 4px;
    `,
    MonthContainer: styled.div`
    `,
  };
  
  