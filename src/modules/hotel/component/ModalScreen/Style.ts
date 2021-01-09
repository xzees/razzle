import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core';
import Container from 'common/src/components/UI/Container';
import ColorManager from 'common/Manager/ColorManager';
import { 
  Dialog, 
  IconButton, 
  TextField 
} from '@material-ui/core'; 
import { Label } from "common/components/Label";
import FontManager from 'modules/hotel/Manager/FontManager';

export const IconButtons = styled(IconButton)`
  padding: 14px 0px 15px 5px;
`;

export const Labels = styled(Label)`
  font-size: 1.7rem;
  color: ${ColorManager.default.white};
`;

export const Bar = styled.div`
  height: 60px;
  padding: 10px 0;
`;

export const ResultBarH3Mobile = {
  as: 'h3',
  color: '#230550',
  fontSize: [FontManager.default.small],
  fontFamily: `"${FontManager.default.primaryFont}"`,
  fontWeight: 'normal',
  lineHeight: 1,
  
  mb: '0',
};

export const ResultBarH1Mobile = {
  as: 'h1',
  color: '#694a8d',
  fontSize: ['2rem'],
  fontFamily: `"${FontManager.default.secondaryFont}"`,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
};

export const ResultBarH1MobilePrimary = {
  as: 'h1',
  color: '#fff',
  fontSize: ['25px'],
  fontFamily: `"${FontManager.default.secondaryFont}"`,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
};

export const Headings = styled.h1`
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 2rem;
  color: #694a8d;
  font-family: "${FontManager.default.secondaryFont}";
  font-weight: normal;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ViewButtonDesktop = styled.a`
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
  font-family: "${FontManager.default.secondaryFont}";
`

export const FilterBox = styled(Grid)`
  position: relative;
  z-index: 5;
`;

export const FilterBoxForFilter = styled(Grid)`
  position: relative;
  z-index: 5;
`;

export const GridBar = styled(Grid)`
  align-self: center;
`;

export const ResultBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const ResultBarPrimary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export const SelectSort = styled.select`
  background: white;
  border: 1px solid #ddd;
  borde-radius: 4px;
  float: right;
  font-size: 23px;
  height: 40px;
  padding: 0 12px;
`;

export const Input = styled.button`
  background: white;
  border: 1px solid #ddd;
  borde-radius: 4px;
  float: right;
  font-size: 23px;
  height: 40px;
  padding: 0 12px;
`;

export const SectionMobile = styled.section`
 
`;
export const SectionDesktop = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const SectionMobileForFilter = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;

  padding-top: 10px;
`;

export const Containers = styled(Container)`
  
  background-color: ${ColorManager.default.hotelTheme.HeaderList};
`;

export const SectionPrimary = styled.div`
  background-color: ${ColorManager.default.primaryColor};
  padding-bottom: 10px !important;
  padding-top: 10px !important;
  color: #fff;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Theme = {
  boxStyle: {
      margin: '0 auto',
  },
  h1Style: {
      as: 'h1',
      color: '#000',
      fontSize: ['30px', '30px', '30px', '40px', '50px'],
      fontWeight: 'normal',
      mb: '2px',
      textAlign: 'center',
      fontFamily: FontManager.default.primaryFont ,
      lineHeight: 1
  },
  h3Style: {
      as: 'h3',
      color: '#000',
      fontSize: ['23px', '23px', '23px', '28px', '30px'],
      fontWeight: 'normal',
      p: 0,
      m: 0,
      mb: '10px',
      textAlign: 'center',
      fontFamily: FontManager.default.primaryFont ,
      lineHeight: 1
  },
  gridAutocomplete: { 
      marginBottom: '7px'
  },
  gridDatepicker: { 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' ,
      marginBottom: '7px'
  },
  gridGuest: { 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' ,
      marginBottom: '7px'
  },
  gridButton: { 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' ,
      marginBottom: '7px'
  },
};

export const styles = {
  Dialogs: styled(Dialog)`
    z-index: 99999 ;
    height: 100%;
    div[role="combobox"] {
      overflow: hidden scroll !important;
    }
  `,
  header: styled.div`
    display: flex;
    width: 100%;
    position: relative;
  `,
  divInHeaderLeft: styled.div`
    flex: 1;
    align-self: center;
    margin-left: 1rem!important;
  `,
  divInHeaderRight: styled.div`
    align-self: center;
  `,
  TextField : styled(TextField)`
    background:white;
    width:100%;
    border-radius: 5px !important;
  `,
};