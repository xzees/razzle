import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import { Box, TextField } from "@material-ui/core";
import FontManager from 'modules/hotel/Manager/FontManager';

interface ContainerProps{
  windowinnerheight: Number;
}

interface ButtonProps{
  buttontype: string;
  //onClick?: any;
}

export const FooterButton = styled.button<ButtonProps>`
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
`;

export const FooterButtonContainer = styled.div`
  display:flex;
  align-items: stretch;
  flex-direction: row;
  height:55px;
  flex-wrap: wrap;
  position: absolute;
  bottom: 30px;
  padding: 0 15px;
  width: 100%;
`;

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
  max-width: 10rem;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  padding: 3px 17px !important;
  cursor: pointer;
  font-family: "DBHeaventRoundedMedv32";
`;
export const Input__Box = styled<any>(Box)`
  width: 100%;
  background: ${(props: any) => props.backgroundcolor ?? ColorManager.default.white};
  height: 100%;
  border-radius: 5px;
  font-size: ${FontManager.default.TEXT_MEDIUM_22} !important;
  color: #555;
  display: flex;
  flex-direction: row;
  justify-content: initial;
  -webkit-box-align: center;
  align-items: center;
  cursor: initial;
  padding-left: 1rem!important;
  padding-right: 1rem!important;
  padding: 9px;
  white-space: pre;
`;

export const Input__Box__Labels = styled<any>(Box)`
    display: flex;
    font-size: ${FontManager.default.TEXT_TINY_18};
    color: ${(props: any) => props.labelcolor ?? ColorManager.default.secondaryColor};
    flex-direction: column;
    font-family: ${FontManager.default.secondaryFont};
    -webkit-box-pack: initial;
    justify-content: initial;
    -webkit-box-align: initial;
    align-items: initial;
    cursor: initial;
    transition: all 0.35s ease 0s;
    cursor: pointer !important;
`
export const Input__Box__Label__Bottom = styled<any>(Box)`
display: flex;
flex-direction: column;
-webkit-box-pack: initial;
justify-content: initial;
-webkit-box-align: initial;

align-items: initial;
cursor: initial;
transition: all 0.35s ease 0s;
line-height: 1;
color: ${(props: any) => props.textcolor ?? ColorManager.default.fourthColor};
cursor: pointer !important;
`

export const Style = {

  childOldContainer: { 
    paddingLeft: 25,
    marginTop: '2px',
    paddingRight: 25,
    paddingBottom: 10,
    paddingTop: 10, 
    position: 'relative', 
    width: '100%',
    borderBottom: '1px solid ' + ColorManager.default.greyColor,
    backgroundColor: ColorManager.default.greyColor,
    color: ColorManager.default.fourthColor,
  },
  childOldContainerDesktop: { 
    paddingLeft: 27,
    paddingRight: 26,
    paddingBottom: 10,
    paddingTop: 10, 
    position: 'relative', 
    width: '100%',
    borderBottom: '1px solid ' + ColorManager.default.greyColor,
    backgroundColor: ColorManager.default.greyColor,
    color: ColorManager.default.fourthColor,
  },
  adultContainer: { 
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 14,
    paddingTop: 14, 
    position: 'relative', 
    width: '100%',
    borderBottom: '1px solid ' + ColorManager.default.greyColor
  },
  BoxDefault: {
    style: {
        display: 'flex',
        alignItems: 'center',
    },
    m: 0
  },
  BoxDefaultRight: {
      style: {
          display: 'flex',
          alignItems: 'center',
          float: 'right'
      },
      m: 0
  },
  BoxThree: {
      style: {
          marginLeft: 10,
      },
      m: 0
  },
  BoxThreeRight: {
      style: {
          marginRight: 10,
          textAlign: 'right'
      },
      m: 0
  },
  BoxCheckIn: {
      style: {
          lineHeight: '0.9',
          fontSize: FontManager.default.TEXT_TINY_18,
          color: ColorManager.default.thirdColor,
      },
      m: 0
  },
  BoxDay: {
      style: {
          lineHeight: '0.9',
          fontSize: FontManager.default.TEXT_TINY_18,
          color: ColorManager.default.fourthColor,
      },
      m: 0
  },
  BoxMY: {
      style: {
          lineHeight: '0.9',
          fontSize: FontManager.default.TEXT_TINY_18,
          whiteSpace: 'pre',
          color: ColorManager.default.fourthColor,
      },
      m: 0
  },
  CallMadeIcon: {
      style: {
          transform: 'rotate(45deg)',
          color: ColorManager.default.primaryColor
      }
  },
  Text: {
    style: {
        width: 50,
    }
  },
  BoxRoom: {
    style: {
        lineHeight: '0.9',
        fontSize: '1.5rem',
        color: ColorManager.default.thirdColor,
    },
    m: 0
  },
  BoxTextIcon: {
    style: {
        width: 50,
        textAlign: 'right',
        cursor: 'pointer'
    }
  },
  IconPlus: {
    style: {
        fontSize: '37px',
        color: ColorManager.default.primaryColor,
        background: 'none'
    },
  },
  IconMinusEnable: {
    style: {
        fontSize: '37px',
        color: ColorManager.default.primaryColor,
        background: 'none'
    },
  },
  IconMinus: {
    style: {
        fontSize: '37px',
        color: ColorManager.default.fourthColor,
        background: 'none'
    },
  },
  TextRoom: {
    style: {
      width: 50,
      fontSize: '3.2rem',
      color: ColorManager.default.thirdColor,
    }
  },
  BoxTextRoom: {
    style: {
      textAlign: 'center'
    },
    m: 0
  }
} as any;

export const Theme = {
  container: {
    width: '100%',
    height: '100%'
  }
};
