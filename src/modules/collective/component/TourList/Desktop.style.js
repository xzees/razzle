import styled from 'styled-components';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Grid } from '@material-ui/core';
import Container from 'common/src/components/UI/Container';
import { AppImage } from 'common/components';
import { Rating } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';

export const SectionTour = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-bottom: 10px;
  padding-top: 10px;
`

export const ResultBarH1 = {
  as: 'h1',
  color: ColorManager.default.primaryColor,
  // fontSize: ['28px', '28px', '28px', '35px', '35px'],
  fontSize: ['25px'],
  fontFamily: FontManager.default.secondaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
}

export const ContainerTour = styled(Container)`
  @media(max-width:991px) {
    padding-left: 15px;
    padding-right: 15px
  }
`

export const ResultBarH2 = {
  as: 'h2',
  color: ColorManager.default.primaryColor,
  fontSize: ['25px', '29px', '31px'],
  fontFamily: FontManager.default.secondaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '2px',
}
export const ResultBarH3 = {
  as: 'h3',
  color: ColorManager.default.black,
  fontSize: ['21px', '23px', '25px'],
  fontFamily: FontManager.default.primaryFont,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
}
export const FilterBox = styled(Grid)`
  min-height: 80px;
  position: relative;
  z-index: 5;
`
export const ResultBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
`
export const TourBreadcrumbs = styled(Breadcrumbs)`
  color: ${ColorManager.default.black} !important;
  font-size: 21px !important;
  a {
    text-decoration: unset !important;
  }
  p {
    color: ${ColorManager.default.primaryColor} !important;
    font-family: ${FontManager.default.secondaryFont};
    font-size: 21px !important;
  }
`
export const FilterBar = styled.div`
  height: 60px;
  padding: 10px 0;
`

export const SelectSort = styled.select`
  background: ${ColorManager.default.white};
  border: 1px solid ${ColorManager.default.fourthColor};
  border-radius: 4px;
  float: right;
  font-size: 23px;
  height: 40px;
  padding: 0 20px;
`

export const BoxMain = styled.div`
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
export const BoxTour = styled.div`
  background-color: ${ColorManager.default.white};
  border-radius: 6px;
  box-shadow: 1px 1px 3px 0px #e0e0e0b3;
  display: flex;
  margin-bottom: 25px;
`
export const BoxTourImg = styled.div`
  border-radius: 6px 0 0 6px;
  max-width: 248px;
  min-width: 248px;
  overflow: hidden;
`
export const ImgBox = styled.div`
  height: calc(100% - 13px);
  overflow: hidden;
`
export const ImgCard = styled.div`
  display: block;
  height: 233px;
  overflow: hidden;
  position: relative;
  transition: transform .25s;
  width: 100%;
  .lazy-load-image-background.blur {
    display: block !important;
  }
`
export const TourImg = styled(AppImage)`
  display: block;
  height: 100%;
  image-rendering: auto;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const BoxTourContent = styled.div`
  padding: 20px 35px;
`
export const TourTitle = {
  as: 'h2',
  color: ColorManager.default.primaryColor,
  fontFamily: FontManager.default.secondaryFont,
  fontSize: ['1.5625rem', '1.5625rem', '29.5px', '29.5px', '29.5px'],
  fontWeight: 'normal',
  lineHeight: 0.9,
  mb: '10px',
}
export const PriceTitle = styled.small`
  color: ${ColorManager.default.fourthColor};
  display: block;
  font-size: 1.1875rem;
`
export const StrikePrice = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-size: 1.5625rem;
  line-height: 0;
  position: relative;
  top: -1px;
  :after {
    border-top: 1.5px solid ${ColorManager.default.red};
    bottom: 0;
    content: "";
    height: 45%;
    height: calc(55% - 1px);
    left: -1px;
    position: absolute;
    transform: rotateZ(-7deg);
    width: 110%;
  }
`
export const TourPrice = {
  as: 'h3',
  color: ColorManager.default.primaryColor,
  display: 'block',
  fontFamily: FontManager.default.secondaryFont,
  fontSize: ['31px', '31px', '41px', '41px', '43px'],
  fontWeight: 'normal',
  lineHeight: 0.6,
  mb: '0',
}

export const BoxAbstract = styled.div`
  align-items: center;
  justify-content: left;
  margin-bottom: 10px;
`
export const TourCode = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-size: 1.4375rem;
  a {
    color: inherit;
  }
`
export const TourRating = styled(Rating)`
  font-size: 1.4375rem !important;
  margin-left: 10px;
  margin-top: 2px;
  position: absolute !important;
  svg {
    font-size: 1.3125rem !important;
  }
`
export const ShowAbstract = styled.button`
  background-color: ${ColorManager.default.yellowColor};
  border: 0;
  border-radius: 6px;
  color: ${ColorManager.default.white};
  float: right;
  font-size: 1.1875rem;
  margin-top: -2px;
  min-width: 80px;
  padding: 3px;
  text-align: center;
`
export const AbstractContent = styled.div`
  border-top: 1px solid ${ColorManager.default.greyColor};
  padding: 20px 0;
  p {
    color: ${ColorManager.default.black};
    cursor: default;
    font-family: ${FontManager.default.thirdFont};
    font-size: 15px;
    line-height: 1.4;
    margin: 0;
  }
`
export const AbstractBox = styled.div`
  height: 100%;
  max-height: 65px;
  overflow: hidden;
`

export const GridAirline = styled(Grid)`
  display: table-cell;
  margin: 0;
  padding: 3px;
  vertical-align: middle;
`
export const AirLogo = styled(AppImage)`
  height: 36px;
  image-rendering: auto;
  vertical-align: middle;
  width: 100%;
`
export const GridDate = styled(Grid)`
  padding: 0 10px;
  border-left: 1px solid ${ColorManager.default.greyColor};
  border-right: 1px solid ${ColorManager.default.greyColor};
`
export const DateBox = styled.div`
  // align-items: center;
  display: flex;
  justify-content: left;
  p {
    margin: 0;
  }
`
export const DateTitle = styled.span`
  color: ${ColorManager.default.primaryColor};
  display: block;
  font-size: 1.3125rem;
  // justify-content: center;
`
export const DateNum = styled.span`
  color: #333333e6;
  display: block;
  font-size: 1.3125rem;
  line-height: 0.9;
  // margin-left: 22px;
  // text-align: center;
`

export const GridCountry = styled(Grid)`
  padding: 0 10px;
`
export const CountryBox = styled.div`
  // align-items: center;
  display: flex;
  justify-content: left;
  p {
    margin: 0;
  }
`
export const CountryTitle = styled.span`
  color: ${ColorManager.default.primaryColor};
  display: block;
  font-size: 1.3125rem;
  // justify-content: center;
`
export const CountryAll = styled.span`
  color: #333333e6;
  display: block;
  font-size: 1.3125rem;
  line-height: 0.9;
  // margin-left: 22px;
  // text-align: center;
  a:last-child {
    margin: 0;
  }
`
export const LinkTour = styled.span`
  color: inherit;
  margin-right: 4px;
`

export const BoxMonth = styled.div`
  margin: 10px 0;
`
export const GridPeriod = styled(Grid)`
  border-bottom: 1px solid ${ColorManager.default.greyColor};
  display: flex;
  padding: 2px 0;
`
export const BoxPeriod = styled.div`
  border-top: 1px solid ${ColorManager.default.greyColor};
  padding-top: 20px;
  margin: 15px 0;
  .tour-period:last-child {
    border-bottom: 0;
  }
`
export const TourItinerary = {
  as: 'h4',
  color: ColorManager.default.primaryColor,
  fontFamily: FontManager.default.secondaryFont,
  fontSize: '1.4375rem',
  fontWeight: 'normal',
  lineHeight: 0.9,
  mb: '5px',
}
export const MonthTopic = styled.div`
  border: 1px solid ${ColorManager.default.primaryColor};
  border-radius: 4px;
  color: ${ColorManager.default.primaryColor};
  display: inline-block;
  font-size: 1.1875rem;
  margin-right: 8px;
  min-width: 55px;
  padding: 1px 0;
  text-align: center;
  width: max-content;
  :last-child {
    margin-right: 0;
  }
`
export const PeriodMonth = styled.div`
  display: block;
  padding: 4px 0;
  text-align: center;
`
export const MonthLabel = styled.div`
  background: ${ColorManager.default.primaryColor};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  display: block;
  font-size: 1.3125rem;
  margin-right: 10px;
  min-width: 60px;
  padding: 2px 6px;
  text-align: center;
  width: max-content;
`
export const BoxDate = styled.div`
  display: block;
`
export const DateItem = styled.div`
  border-right: 1px solid ${ColorManager.default.greyColor};
  color: #333333e6;
  display: inline-block;
  font-size: 1.3125rem;
  margin-bottom: 3px;
  margin-top: 3px;
  padding: 2px 0;
  text-align: center;
  width: 65px;
  :last-child {
    border: 0;
  }
`
export const PeriodNotFound = styled.div`
  color: ${ColorManager.default.primaryColor};
  display: block;
  font-size: 1.3125rem;
  text-align: center;
`

export const BoxButton = styled.div`
  align-items: center;
  justify-content: left;
`
export const ViewButton = styled.a`
  border: 1px solid ${ColorManager.default.primaryColor};
  border-radius: 4px;
  color: ${ColorManager.default.primaryColor};
  display: inline-block;
  float: right;
  font-size: 1.3125rem;
  margin-top: 0;
  padding: 8px 24px;
  text-align: center;
  width: max-content;
  :hover {
    background: ${ColorManager.default.primaryColor};
    color: ${ColorManager.default.white};
  }
`