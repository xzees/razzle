import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Container from 'common/src/components/UI/Container';
import { AppImage } from 'common/components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';

export const AppImages = styled(AppImage)`
  cursor: pointer;
  padding-right: 10px;
`;

export const Bar = styled.div`
  height: 60px;
  padding: 10px 0;
  padding-left: 10px;
  
`;

export const BarLeft = styled.div`
  height: 60px;
  padding: 10px 0;
  padding-right:10px;
`;

export const ResultBarH3Mobile = {
  as: 'h3',
  color: '#000',
  fontSize: ['21px'],
  fontFamily: '"DBHeaventRoundedv32"',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
};

export const ResultBarH1Mobile = {
  as: 'h1',
  color: '#440099',
  fontSize: ['25px'],
  fontFamily: '"DBHeaventRoundedMedv32"',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
};

export const FilterBox = styled(Grid)`
  min-height: 80px;
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
  height: 80px;
  justify-content: center;
`;

export const SelectSort = styled.select`
  background: white;
  border: 1px solid #ddd;
  width:100%;
  borde-radius: 4px;
  text-align-last:center;
  float: right;
  font-size: 1.4375rem;
  height: 40px;
  padding: 0 12px;
`;

export const Input = styled.button`
  background: white;
  border: 1px solid #ddd;
  borde-radius: 4px;
  float: right;
  border-radius: 5px;
  font-size: 1.4375rem;
  width:100%;
  height: 40px;
  padding: 0 12px;
`;

export const SectionMobile = styled.section`
  background-color: #f3f2fa;
  min-height: 550px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const SectionDesktop = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
  // padding-top: 10px;
`;

export const SectionMobileForFilter = styled.section`
  background-color: #f3f2fa;
  padding-top: 10px;
`;

export const Containers = styled<any>(Container)`
    @media(max-width: 991px) {
      padding-left: 15px;
      padding-right: 15px;
    }
`;

export const ContainerSearch = styled(Container)`
    @media(max-width: 991px) {
      padding-left: 15px;
      padding-right: 15px;
    }
    padding-top: 15px;
    padding-bottom: 7px;
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
      fontFamily: 'DBHeaventRoundedv32' ,
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
      fontFamily: 'DBHeaventRoundedv32' ,
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
  }
};

export const boxStyle = {
  padding: '10px 0px 18px 0px'
};

export const gridStyle = {
  padding: '20px 0px 28px 0px'
};

export const SectionWrapper = styled.section`
  align-items: center;
  background-color: ${ColorManager.default.fifthColor};
  margin-top: 65px;
  @media (max-width: 1279px) {
    padding-top: 20px;
  }
`;

export const SortingWrapper = styled.section`
  background-color: #FCE6E8;
`;

export const Detail = styled.p`
color: ${ColorManager.default.secondaryColor};
font-size: ${FontManager.default.TEXT_20};
margin: 0;
line-height: 1;
text-align: left;
padding-left: 1rem !important;
padding-right: 1rem !important;
`;

export const h3Style = {
  as: 'h3',
  color: ColorManager.default.fifthColor,
  fontSize: FontManager.default.LARGE_MEDIUM_30,
  fontFamily: FontManager.default.primaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  marginTop: 0,
  paddingLeft: '1rem !important',
  paddingRight: '1rem !important',
  marginBottom: 0,
}; 

export const ThemeDesktop = {
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
      fontFamily: 'DBHeaventRoundedv32' ,
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
      fontFamily: 'DBHeaventRoundedv32' ,
      lineHeight: 1
  },
  Autocomplete: {
    xs: 12,
    md: 12,
    lg: 3,
  },
  Datepicker: {
    xs: 12,
    md: 5,
    lg: 4,
  },
  Guest: {
    xs: 12,
    md: 5,
    lg: 3,
  },
  gButton: {
    xs: 12,
    md: 2,
    lg: 2,
  },
  gridAutocomplete: { 
  },
  gridDatepicker: { 

  },
  gridGuest: { 
  },
  gridButton: { 
      display: 'flex', 
  },
  button: {
    fontSize: FontManager.default.LARGE_MEDIUM_30,
    lineHeight: '1',
    height: '100% !important',
    minHeight: '50px'
  }
};
