import styled from 'styled-components';
import FontManager from 'common/Manager/FontManager';
import { Grid } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const MobileFilterBox = styled(Grid)`
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0px 2px 2px 0px #eeeeee33;
  font-size: 1.3125rem;
  min-height: 57px;
  position: sticky;
  text-align: center;
  top: 0;
  z-index: 5;
`
export const MobileFilterbar = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 55px;
  justify-content: center;
`
export const MobileFilterLabel = styled.span`
  align-items: center;
  display: flex;
  line-height: 0.9;
`
export const MobileSortBar = styled.div`
  align-items: center;
  border-left: 1px solid #eee;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 55px;
  justify-content: center;
`
export const MobileSortLabel = styled.label`
  align-items: center;
  display: flex;
  line-height: 0.9;
`
export const MobileSortText = styled.select`
  appearance: none;
  background-color: unset;
  border: 0;
  font-size: 1.0625rem;
  // line-height: 0.9;
  option {
    background: #440099;
    color: #fff;
    font-size: 21px;
  }
  option:hover {
    background: #440099;
  }
  option:not(:checked) {
    background-color: white;
    color: #000;
  }
`

export const FCMobileLabel = styled(FormControlLabel)`
  padding-left: 10px;
  .MuiIconButton-root {
    padding: 9px;
  }
  .MuiFormControlLabel-label {
    width: 100%;
  }
`;

export const FCMobileFilterLabel = styled.span`
  color: #333333;
  font-size: 1.4375rem;
`;
export const FCMobileFilterTotal = styled.span`
  color: #440099;
  float: right;
  font-family: ${FontManager.default.secondaryFont};
`;

export const styleAccordionSummary = {
  style: {
    borderBottom: '1px solid gainsboro',
  }
};

export const HeadingDiv = styled.div`
  flex-direction: column;
  padding-left: 10px;
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

export const Accordions = withStyles({
  root: {
    boxShadow: '1px 1px 3px 0px #e0e0e0b3 !important',
    borderRadius: 6,
    '&.MuiAccordion-rounded': {
      borderRadius: '6px !important',
    },
    '&.MuiAccordionSummary-root': {
      paddingLeft: 20
    },
  } as any
})(MuiAccordion);

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
  padding-right:10px;
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
  fontFamily: FontManager.default.secondaryFont,
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
  color: '#000',
  fontSize: ['21px'],
  fontFamily: FontManager.default.primaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
}
export const ResultBarH1Mobile = {
  as: 'h1',
  color: '#440099',
  fontSize: ['25px'],
  fontFamily: FontManager.default.secondaryFont,
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
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
    // padding-left: 15px;
    // padding-right: 15px
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

export const ButtonBottom = styled.div`
  background: #fff;
  border-top: 1px solid #eee;
  bottom: 0;
  padding: 10px;
  position: fixed;
  width: 100%;
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
    fontFamily: FontManager.default.primaryFont,
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
    fontFamily: FontManager.default.primaryFont,
    lineHeight: 1
  },
  gridAutocomplete: {
    marginBottom: '7px'
  },
  gridDatepicker: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '7px'
  },
  gridGuest: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '7px'
  },
  gridButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#000',
    fontSize: ['30px', '30px', '30px', '40px', '50px'],
    fontWeight: 'normal',
    mb: '2px',
    textAlign: 'center',
    fontFamily: FontManager.default.primaryFont,
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
    fontFamily: FontManager.default.primaryFont,
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
    justifyContent: 'center',
    marginBottom: '7px'
  },
  gridGuest: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '7px'
  },
  gridButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '7px'
  },
  button: {
    fontSize: '1.2rem',
    lineHeight: '1'
  }
};