import styled, { css } from 'styled-components';
import { TextField, withStyles } from "@material-ui/core";
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import { Box } from '@material-ui/core';
import { AnyNaptrRecord } from 'dns';

interface PropsUl {
  arrowLeft: boolean
  arrowRight: boolean
}

interface PropsBox {
  // focus: boolean
}

interface PropsArrowContainer{
  containerdirection: String
}

const Style = {
  
  ulDivOutSide: styled.div`
    font-size: 21px !important;
    color:${ColorManager.default.primaryColor};
    position: relative;
    border-radius: 5px;
  `,
  ulDivInSide: styled.div`
    overflow: hidden;
    padding: 0px;
    border-radius: 5px;
    text-align:left !important;
  `,
  startTextField: styled.div`
    font-size: 21px !important;
    color:${ColorManager.default.primaryColor};
    display: flex;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
  `,
  ul: styled.ul<PropsUl>`
    margin: 0;
    background:white;
    padding: 0;
    z-index: 1;
    position: absolute;
    list-style: none;
    background-color: white
    overflow: hidden;
    margin-top:11px;
    box-shadow: 0 3px 12px 1px rgba(0,0,0,0.26);
    border-radius: 5px;
    ::before {
      border-bottom-color: ${ColorManager.default.greyColor} !important;
      border-width: 5px!important;
      margin-top: -9px;
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      ${(props: any) => props.arrowLeft && css`left:3%;`}
      ${(props: any) => props.arrowRight && css`left:3%;`}
      top: -1px;
      border: solid transparent;
    }
  `,
  ulMobile: styled.ul<PropsUl>`
    margin: 0;
    background:white;
    padding: 0;
    width: 100%;
    z-index: 1;
    position: absolute;
    list-style: none;
    background-color: white
    overflow: hidden;
    border-radius: 5px;
  `,
  Box: styled<any>(Box)`
    width: 100%;
    background: ${(props: any) => props.backgroundcolor ?? ColorManager.default.white};
    height: ${(props: any) => props.height ?? '100%'};
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
  `,
  BoxLabels: styled(Box)`
    display: flex;
    font-size: ${FontManager.default.TEXT_TINY_18};
    color: ${ColorManager.default.secondaryColor};
    flex-direction: column;
    -webkit-box-pack: initial;
    justify-content: initial;
    font-family: ${FontManager.default.secondaryFont};
    -webkit-box-align: initial;
    align-items: initial;
    cursor: initial;
    transition: all 0.35s ease 0s;
    cursor: pointer !important;
  `,
  BoxLabel: styled(Box)`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: initial;
    justify-content: initial;
    -webkit-box-align: initial;
    align-items: initial;
    cursor: initial;
    transition: all 0.35s ease 0s;
    cursor: pointer !important;
  `,
  BoxLabelBottom: styled<any>(Box)`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: initial;
    justify-content: initial;
    -webkit-box-align: initial;
    align-items: initial;
    cursor: initial;
    transition: all 0.35s ease 0s;
    line-height: 1;
    color: ${(props: any) => props.colordate ?? ColorManager.default.fourthColor};
    cursor: pointer !important;
  `,
  CountDateContainer: styled(Box)`
    display:flex;
    justify-content: center;
    align-items: center;
    color: ${ColorManager.default.black};
  `,
  CountDateBox: styled.span`
    border: 2px solid ${ColorManager.default.primaryColor};
    border-radius: 4px;
    font-size: 2.3rem;
    padding: 0 10px;
    line-height: 100%;
    margin: 0 10px;
  `,
  datePicketContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  arrowContainer: styled.div<PropsArrowContainer>`
    display: flex;
    flex-direction: ${(props: any) => props.containerdirection};
    justify-content: space-between;
    align-items: stretch;
    position: absolute;
    width: 100%;
  `,
  arrowIconContainer: styled(Box)`
    padding:12px;
    height: 48px;
    cursor: pointer;
    color:${ColorManager.default.fifthColor};
  `,
};

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
    .MuiInputBase-input {  
      height: 50px;
    }
    fieldset {
      border: none;
    }
    input {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 3.2rem;
      padding-top: 0;
      padding-bottom: 0;
      text-align: center;
    }
`;

export default Style;

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

export const BoxStyle = {
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
          fontSize: '1.2rem',
          color: ColorManager.default.thirdColor,
      },
      m: 0
  },
  BoxDay: {
      style: {
          lineHeight: '0.9',
          fontSize: '1.1rem',
          color: ColorManager.default.fourthColor,
      },
      m: 0
  },
  BoxMY: {
      style: {
          lineHeight: '0.9',
          fontSize: '1.1rem',
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
        textAlign: 'right'
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
      fontSize: '2.5rem',
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