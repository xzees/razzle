import styled from 'styled-components';
import { Grid, Box, withStyles } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import Chip from '@material-ui/core/Chip';
import ColorManager from 'common/Manager/ColorManager';


export const StyleChipSuccess = withStyles({
  root: {
    textTransform:'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },
  colorPrimary: {
    color: '#077812',
    border: '1px solid #077812',
    borderRadius: '6px'
  }
})(Chip);

export const CodeMobile = styled.span`
  color: #888aaa;
  display: inline-flex !important;
  font-size: 1.4375rem;
  margin-left: -5px;
`;

export const StyleChipPrimary = withStyles({
  root: {
    textTransform:'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },
  colorPrimary: {
    color: ColorManager.default.primaryColor,
    border: '1px solid ' + ColorManager.default.primaryColor,
    borderRadius: '6px'
  }
})(Chip);

export const StyleChipGray = withStyles({
  root: {
    textTransform:'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },
  colorPrimary: {
    color: '#888aaa',
    border: '1px solid #888aaa',
    borderRadius: '6px'
  }
})(Chip);

export const Bar = styled.div`
  height: 60px;
  padding: 10px 0;
`;

export const FilterBox = styled(Grid)`
  min-height: 80px;
  position: relative;
  z-index: 5;
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
  borde-radius: 4px;
  float: right;
  font-size: 23px;
  height: 40px;
  padding: 0 12px;
`;

export const SMobile = styled.section`
  background-color: #f3f2fa;
  min-height: 400px;
  padding-bottom: 10px;
  padding-top: 10px;
`
export const SectionDesktop = styled.section`
  background-color: #f3f2fa;
  padding-bottom: 10px;
  padding-top: 10px;
`

export const Containers = styled(Container)`
  @media(max-width: 991px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  margin-top: 10px;
  // padding-left: 15px;
  // padding-right: 15px
  
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

export const TitleDesktop = {
  as: 'h3',
  color: '#440099',
  fontFamily: '"DBHeaventRoundedMedv32"',
  fontSize: ['1.5625rem', '1.5625rem', '29.5px', '29.5px', '29.5px'],
  fontWeight: 'normal',
  lineHeight: 0.9,
  mb: '10px',
}

export const CodeDesktop = styled.span`
  color: #888aaa;
  font-size: 1.4375rem;
  

`;

export const BoxMainMobile = styled(Box)`
  background-color: #fff;
  margin-bottom: 10px;
  margin-left: -15px;
  margin-right: -15px;
  padding: 15px;
  .tour-period {
    display: none;
  }
  .tour-period.open {
    display: flex;
  }
`

export const BoxContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 100%;
`

export const BoxDesktop = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 3px 0px #e0e0e0b3;
  display: flex;
  margin-bottom: 25px;
  
`

export const Texts = styled.span`
  font-size: 1.2375rem;
  display: flex;
`;

export const BoxMainDesktop = styled(Box)`
  color: unset;
  width: 100% !important;
  @media (max-width: 710px) {
    .Air-Box {
      max-width: 25%;
      flex-basis: 25%;
    }
    .Date-Box {
      max-width: 33.333333%;
      flex-basis: 33.333333%;
    }
    .Country-Box {
      max-width: 41.666667%;
      flex-basis: 41.666667%;
    }
    .Resv-Box {
      max-width: 100%;
      flex-basis: 100%;
    }
    .Resv-Box a {
      margin-top: 10px;
      width: 100%;
    }
  }
  @media (max-width: 991px) {
    img {
      image-rendering: auto;
    }
    .Box-Tour {
      display: block;
      padding: 20px 30px;
    }
    .Box-Tour-Img {
      border-radius: 6px;
      max-width: unset;
      min-width: unset;
      padding: 0;
    }
    .Img-Card {
      height: 249px;
    }
    .Box-Tour-Content {
      padding: 0!important;
      padding-top: 15px!important;
    }
  }
  @media (max-width: 1219px) {
    .Box-Tour-Content {
      padding: 20px;
    }
  }
`

export const BoxDetail = styled(Box)`
  // margin: 15px 0;
`
export const ImgBox = styled.div`
  height: calc(100% - 10px);
  overflow: hidden;
  position: relative;
`;

export const BoxImg = styled.div`
  border-radius: 6px 0 0 0px;
  
  overflow: hidden;
`;

export const ImgCard = styled.div`
  display: block;
  height: 100%;
  overflow: hidden;
  position: relative;
  transition: transform .25s;
  width: 100%;
`;