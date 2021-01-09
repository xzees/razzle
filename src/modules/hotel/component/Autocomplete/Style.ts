
import styled, { css } from 'styled-components';
import { TextField, Box } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';

interface Iany {
  [key: string]: any;
  radius: boolean;
}

export const MLabel = styled.div<Iany>`
  width:100%;
  ${(props) => props.radius === true ? css`` : ''}
  position: relative;
  height: 45px;
  background: ${ColorManager.default.greyColor};
  color: ${ColorManager.default.fourthColor};
  text-align:center; 
  display: grid;
  align-items: center;
  font-size: ${FontManager.default.text};
`;

export const ViewButton = styled.a`
  border: 1px solid ${ColorManager.default.fourthColor};
  border-radius: 4px;
  color: ${ColorManager.default.fourthColor};
  display: table-cell;
  font-size: ${FontManager.default.TEXT_TINY_18};
  max-width: 10rem;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin: 7px 20px 7px 0px;
  padding: 3px 17px !important;
  cursor: pointer;
  font-family: ${FontManager.default.primaryFont};
  :hover {
    color: white;
    background-color: ${ColorManager.default.fifthColor};
    border: 1px solid ${ColorManager.default.fifthColor};
  }
`;

export const TextFields = styled(TextField)<any>`
    background:white;
    font-size: ${FontManager.default.TEXT_TINY_18};
    width:100%;
    padding-top: 9px !important;
    padding-bottom: 6px !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    border-radius: 5px !important;
    :focus {
      border-color: inherit !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      outline:none !important;
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
      // padding: 11px 25px 11px 25px;
      border: none;
    }
`;

export const UlDiv = styled.div`
    font-size: 21px !important;
    color: ${ColorManager.default.primaryColor};
    position: relative;
    width: 100%;
`;
  
export const UlDivOutSide = styled.div`
    font-size: 21px !important;
    color:${ColorManager.default.primaryColor};
    position: relative;
    width: 100%;
    min-width: 400px !important;
    border-radius: 5px;
`;

export const TextHilight = styled.span`
    color:${ColorManager.default.primaryColor};
    font-family: ${FontManager.default.secondaryFont};
  `;

export const UlDivOutSideM = styled.div`
    font-size: 21px !important;
    color:${ColorManager.default.primaryColor};
    position: relative;
    overflow: hidden scroll;
    width: 100%;
    border-radius: 5px;
`;

export const UlDivInSide = styled.div`
    max-height: 275px;
    overflow: auto;
    border-radius: 0px 0px 5px 5px;
    text-align:left !important;
`;
export const UlDivInSideHistory = styled.div<Iany>`
    overflow: auto;
    border-radius: ${(props: any) => props.radius === true ? '0px 0px 5px 5px' : ''};
    text-align:left !important;
`;

export const LiItem = styled.li`
    padding: 15px 28px !important;
    border-bottom: 1px solid ${ColorManager.default.greyColor} !important;
`;

export const UlDivInSideMobile = styled.div`
    overflow: auto;
    text-align:left !important;
`;

export const StartTextField = styled.div`
    font-size: 21px !important;
    color: ${ColorManager.default.primaryColor};
    display: flex;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
`;

export const Ul = styled.div`
  ul :not(div) {
    ::before {
      border-bottom-color: ${ColorManager.default.greyColor} !important;
      border-width: 5px!important;
      margin-top: -9px;
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left:3%;
      top: -1px;
      border: solid transparent;
    }
  }
  
  ul {
    margin: 0;
    background: white;
    min-width: 100%;
    padding: 0;
    z-index: 1;
    position: absolute;
    list-style: none;
    background-color: white
    overflow: hidden;
    margin-top:11px;
    box-shadow: 0 3px 12px 1px rgba(0,0,0,0.26);
    border-radius: 5px;
    
    li.item:active  {
      background-color: ${ColorManager.default.fifthColor};
      color: white;
      cursor:pointer;
    }
    
    li.item:active span {
      background-color: ${ColorManager.default.fifthColor};
      color: white;
      cursor:pointer;
    }
    li.item:active  svg {
      color: white;
    }
    li.load {
      background-color:white;
      padding: 8px 15px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    li.item  {
      background-color:white;
      padding: 8px 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor:pointer;
      color:${ColorManager.default.fifthColor};
      margin: 0px;
    }
    li.item:hover div {
      color: white;
      cursor:pointer;
    }
    li.item:hover span {
      color: white;
      cursor:pointer;
      font-weight: normal;
    }
    li.item:hover  {
      background-color: ${ColorManager.default.fifthColor};
      color: white;
      cursor:pointer;
    }
    li.item[data-focus="true"]  {
      background-color: ${ColorManager.default.fifthColor};
      color: white;
      cursor:pointer;
    }
    li.item[data-focus="true"] div {
      color: white;
    }
    li.item[data-focus="true"] span {
      color: white;
    }
  }
`;

export const Li = styled.li`
  background-color:white;
  padding: 8px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UlMobile = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 1;
    list-style: none;
    background-color: white
    overflow: auto;
    
    li.item:active {
      background-color: ${ColorManager.default.primaryColor};
      color: white;
      cursor:pointer
    }
    li.load {
      background-color:white;
      padding: 8px 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      border-bottom: 1px solid ${ColorManager.default.greyPaleColor};
    }
    li.item {
      background-color:white;
      padding: 8px 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor:pointer;
      border-bottom: 1px solid ${ColorManager.default.greyPaleColor};
    }
    li.item:hover {
      background-color: ${ColorManager.default.primaryColor};
      color: white;
      cursor:pointer
    }
`;

export const Boxs = styled(Box)`
    padding: 0 !important;
`;

export const BoxLabel = styled(Box)`
    padding: 0 !important;
    color: ${ColorManager.default.fourthColor};
`;

export const MCssTextField = styled<any>(InputFields)`
  .MuiOutlinedInput-root {
    background: ${ColorManager.default.greyColor} !important;
    border: none;
    :hover fieldset {
      border: none;
    },
    .Mui-focused fieldset {
      border: none;
    }
  }
`;

export const MCssTextFieldMap = styled<any>(InputFieldsMap)`
  .MuiOutlinedInput-root {
    background: ${ColorManager.default.greyColor} !important;
    border: none;
    :hover fieldset {
      border: none;
    }
    .Mui-focused fieldset {
      border: none;
    }
  }
`;

export const CssTextField = styled<any>(TextField)`
  background: ${(props: any) => props.backgroundcolor ?? 'white'};
  font-size: ${FontManager.default.TEXT_TINY_18};
  width:100%;
  padding-top: ${(props: any) => props.paddingtop ?? '12px'} !important; 
  padding-bottom: ${(props: any) => props.paddingbottom ?? '6px'} !important; 
  padding-left: ${(props: any) => props.paddingleft ?? '16px'} !important; 
  padding-right: ${(props: any) => props.paddingright ?? '16px'} !important; 
  border-radius: 5px !important;
  :focus {
    border-color: inherit !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline:none !important;
  }
  .MuiOutlinedInput-root {
    :hover fieldset {
      border: 0px solid black !important;
    }
    .Mui-focused fieldset {
      border: 0px solid black !important;
    }
  }
  
  .MuiInputLabel-shrink {
    transform: inherit !important;
  }
  
  .MuiFormLabel-root {
    color: ${(props: any) => props.labelcolor ?? ColorManager.default.secondaryColor } !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  .MuiInput-formControl {
    margin-top: 0px !important;
  }
  input {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;

    // background: ${(props: any) => props.backgroundcolor ?? 'white'};
    color: ${(props: any) => props.inputcolor ?? ColorManager.default.thirdColor } !important;
    font-size: ${(props: any) => props.inputFontSize ?? FontManager.default.TEXT_MEDIUM_22} !important;
  }
  input::placeholder {
    color: black !important;    
  }

  label {
    position: relative !important;
    font-family: ${FontManager.default.secondaryFont};
    font-size: ${(props: any) => props.labelFontSize ?? FontManager.default.TEXT_TINY_18} !important;
  }
  
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 0px !important;
  }
  .MuiInput-underline:before {
    border-bottom: 0px !important;
  },
  .MuiInput-underline:after  {
    border-bottom: 0px !important;
  }
`;

export const styleGrow = { 
  transformOrigin: '0 0 0',
  zIndex: 99999
};