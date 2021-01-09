import styled from 'styled-components';
import { Grid } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ColorManager from 'common/Manager/ColorManager';

export const styleAccordionSummary = {
  style: {
    paddingTop: 20,
    minHeight: 28,
  }
};

export const HeadingDiv = styled.div`
  flex-direction: column;
  margin: 0;
`;

export const ViewButtonDesktop = styled.a`
  border: 1px solid #440099;
  border-radius: 4px;
  color: #440099;
  display: inline-block;
  float: right;
  font-size: 1.2rem;
  line-height: 1;
  height: 45px;
  width: 100%;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  padding: 12px 24px;
  :hover {
    background: #440099;
    color: #fff;
  }
`
{/*
export const Accordions = withStyles({
  root: {
      boxShadow: '1px 1px 3px 0px #e0e0e0b3 !important',
      borderRadius: 6,
      '&.MuiAccordion-rounded': {
          borderRadius: '6px !important',
      },
      '&.MuiAccordionSummary-root': {
          paddingLeft: 20,
      },
      
  } as any
})(MuiAccordion);
*/}


export const AccordionSummarys = withStyles({
  expanded: {
    margin: '0px !important',
  } as any
})(AccordionSummary);

export const DivSticky = styled.div`
    position: sticky;
    top: 75px;
    @media(max-width: 1279px) {
        position: sticky;
        top: 10px;
    }
`;

export const Bar = styled.div`
  height: 60px;
  padding: 10px 0;
  padding-left: 10px;
  
`;
export const BarLeft = styled.div`
  height: 60px;
  padding: 10px 0;
`;


export const CodeDesktop = styled.span`
  color: #888aaa;
  font-size: 1.3375rem;
`;

export const CodeDesktopBox = styled.label`
  color: #888aaa;
  font-size: 1.3375rem;
`;


export const TitleMobile = {
  as: 'h3',
  color: '#440099',
  fontFamily: '"DBHeaventRoundedMedv32"',
  fontSize: '1.4375rem',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '5px',
};
export const BoxDesktop = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 3px 0px #e0e0e0b3;
  display: flex;
  margin-bottom: 25px;
  
`
export const ResultBarH3Mobile = {
  as: 'h3',
  color: '#230550',
  fontSize: ['21px'],
  fontFamily: '"DBHeaventRoundedv32"',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
}
export const ResultBarH1Mobile = {
  as: 'h1',
  color: '#440099',
  fontSize: ['25px'],
  fontFamily: '"DBHeaventRoundedMedv32"',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
}
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

export const ButtonFilter = styled.button`
  background: white;
  border: none;
  border-radius: 4px;
  max-width: 10rem;
  font-size: 1.3rem;
  font-family: "DBHeaventRoundedMedv32";
  height: 40px;
  padding: 0 21px;
  display: inline-flex;
  color: ${ColorManager.default.black};
  justify-content: center;
  align-items: center;
  line-height: 0.7;
  box-shadow: 0px 1px 1px 0px #7b7b7b52;
`;

export const TextTotalSeacrh = styled.div<any>`
  border: none;
  float: right; 
  flex-direction: ${(props: any) => props.flexDirection ? props.flexDirection : ''};
  font-size: 1.3rem;
  font-family: "DBHeaventRoundedMedv32";
  align-items: center;
  text-align: right !important;
  height: 40px;
  padding: 0;
  display: inline-flex;
  color: ${ColorManager.default.black};
  line-height: 0.7;
`;

export const InputUseFilter = styled.button`
  background: white;
  border: 1px solid #4caf50;
  color: #4caf50;
  borde-radius: 4px;
  float: right;
  border-radius: 5px;
  font-size: 1.4375rem;
  width:100%;
  height: 40px;
  padding: 0 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0.7;
`;

export const SectionMobile = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
  padding-top: 10px;
`
export const SectionDesktop = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
  padding-top: 10px;
  height:100%;
`

export const SectionMobileForFilter = styled.section`
  background-color: #f3f2fa;
  padding-top: 10px;
`

export const Containers = styled(Container)`
   
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
      color: '#230550',
      fontSize: ['30px', '30px', '30px', '40px', '50px'],
      fontWeight: 'normal',
      mb: '2px',
      textAlign: 'center',
      fontFamily: 'DBHeaventRoundedv32' ,
      lineHeight: 1
  },
  h3Style: {
      as: 'h3',
      color: '#230550',
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
  },
  button: {
    fontSize: '1.2rem',
    lineHeight: '1'
  }
};


export const ThemeDesktop = {
  boxStyle: {
      margin: '0 auto',
  },
  h1Style: {
      as: 'h1',
      color: '#230550',
      fontSize: ['30px', '30px', '30px', '40px', '50px'],
      fontWeight: 'normal',
      mb: '2px',
      textAlign: 'center',
      fontFamily: 'DBHeaventRoundedv32' ,
      lineHeight: 1
  },
  h3Style: {
      as: 'h3',
      color: '#230550',
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
    lg: 4,
  },
  Datepicker: {
    xs: 5,
    md: 5,
    lg: 3,
  },
  Guest: {
    xs: 5,
    md: 5,
    lg: 3,
  },
  gButton: {
    xs: 2,
    md: 2,
    lg: 2,
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
  button: {
    fontSize: '1.2rem',
    lineHeight: '1'
  }
};

interface ContainerProps{
  windowinnerheight: Number;
}
interface ButtonProps{
  buttontype: string;
}

export const Style = {
  CalendarScrollContainer: styled.div<ContainerProps>`
  position: relative;
  overflow-y: scroll;
  height: calc(${props =>props.windowinnerheight.toString()}px - 59px);
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
  Box85SpaceHeight: styled.div`
    height:85px;
    width: 100%;
    display:block;
  `,
};


//export default Style;
