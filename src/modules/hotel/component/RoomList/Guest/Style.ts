import styled from 'styled-components';
import { Box } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';

interface ICircleImage {
  width?: string;
  height?: string;
}

export const BoxPromo = styled.div`
  background: linear-gradient(90deg,#fef2d8  0%,#ffff 100%);
  border-radius: 6px;
  box-shadow: 1px 1px 3px 0px #e0e0e0b3;
  display: flex;
  margin-bottom: 15px;
`

export const BoxContent = styled.div<any>`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 100%;
`

export const CircleImage = styled.div<ICircleImage>`
  display: inline-block;
  position: relative;
  width: ${props => props.width && '45px'};
  height: ${props => props.height && '45px'};
  overflow: hidden;
  border-radius: 50%;
  background: linear-gradient(45deg, #f9ab4d 0%, #ffe7a7 100%);
  
  img {
    width: 80%;
    height: 100%;
    margin-top: 6px;
  }
`

export const Containers = styled(Container)`
  background-color: #f3f2fa;
  section {
    background-color: #f3f2fa;
    padding-bottom: 10px;
  }
`;

export const BoxMainMobile = styled(Box)`
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 6px;
  .tour-period {
    display: none;
  }
  box-shadow: 0px 2px 2px 0px #7b7b7b52;
  .tour-period.open {
    display: flex;
  }
`

export const BoxMain = styled(Box)`
  color: unset;
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

export const TitleDesktop = {
  color: ColorManager.default.black ,
  fontFamily: FontManager.default.secondaryFont,
  fontSize: [ FontManager.default.TEXT_EXTRA_24 ],
  fontWeight: 'normal',
  lineHeight: '24px',
  mb: '0px'
}

export const TitleMobile = {
  color: ColorManager.default.black ,
  fontFamily: '"DBHeaventRoundedMedv32"',
  fontSize: [ '19.5px', '19.5px', '19.5px', '19.5px', '19.5px'],
  fontWeight: 'normal',
  lineHeight: 0.9,
  mb: '0px'
}