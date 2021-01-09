import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Container from 'common/src/components/UI/Container';
import { AppImage } from 'common/components';
import { Rating } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';

export const TourListResultBox = styled.section`
  border-bottom: 1px solid ${ColorManager.default.greyColor};
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
export const TotalTour = styled.span`
  font-size: 21px;
  line-height: 1;
`
export const ResultBarH4 = {
  as: 'h4',
  color: ColorManager.default.black,
  // fontSize: ['28px', '28px', '28px', '35px', '35px'],
  fontSize: ['21px'],
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
export const TourListSearchBox = styled(Grid)`
  background: ${ColorManager.default.white};
  border-bottom: 1px solid ${ColorManager.default.greyColor};
  box-shadow: 0px 2px 2px 0px #eeeeee33;
  font-size: 1.3125rem;
  min-height: 57px;
  position: sticky;
  text-align: center;
  top: 0;
  z-index: 5;
`
export const SearchBar = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 55px;
  justify-content: center;
`
export const SearchLabel = styled.span`
  align-items: center;
  display: flex;
  line-height: 0.9;
`
export const FilterBar = styled.div`
  align-items: center;
  border-left: 1px solid ${ColorManager.default.greyColor};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 55px;
  justify-content: center;
`
export const FilterLabel = styled.label`
  align-items: center;
  display: flex;
  line-height: 0.9;
`
export const FilterText = styled.select`
  appearance: none;
  background-color: unset;
  border: 0;
  font-size: 1.0625rem;
  // line-height: 0.9;
  option {
    background: ${ColorManager.default.primaryColor};
    color: ${ColorManager.default.white};
    font-size: 21px;
  }
  option:hover {
    background: ${ColorManager.default.primaryColor};
  }
  option:not(:checked) {
    background-color: ${ColorManager.default.white};
    color: ${ColorManager.default.black};
  }
`

export const SectionTour = styled.section`
  background-color: ${ColorManager.default.greyColor};
  // min-height: 550px;
  padding-bottom: 10px;
  padding-top: 10px;
`
export const ContainerTour = styled(Container)`
  @media(max-width: 991px) {
    padding-left: 15px;
    padding-right: 15px
  }
`
export const List = styled.ul`
  list-style: none;
  margin: 0;
`
export const BoxMain = styled.div`
  background-color: ${ColorManager.default.white};
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
// export const BoxImg = styled.div`
//   margin-bottom: 15px;
// `
export const TourImg = styled(AppImage)`
  display: inline-block;
  border: 0;
  border-radius: 6px;
  image-rendering: auto;
  margin-bottom: 10px;
  max-width: 100%;
  object-fit: cover;
  vertical-align: middle;
  width: 100%;
`

export const BoxDetail = styled.div`
  // margin: 15px 0;
  @media(max-width: 413px) {
    .Date-Box, .Country-Box {
      padding: 12px 6px !important;
    }
    .Date-Box svg {
      margin-left: 0 !important;
      margin-right: 4% !important;
    }
  }
  @media(max-width: 370px) {
    .Date-Box, .Country-Box {
      padding: 8px 4px !important;
    }
    .Air-Box {
      padding: 11px !important;
    }
    .Date-Box svg {
      font-size: 22px !important;
      margin-left: 0 !important;
      margin-right: 2% !important;
    }
    .Country-Box svg {
      font-size: 22px !important;
      margin-left: -2% !important;
      margin-right: 2% !important;
    }
  }
  .lazy-load-image-background.blur {
    display: block !important;
    margin-bottom: 10px;
  }
`
export const TourTitle = {
  as: 'h2',
  color: ColorManager.default.primaryColor,
  fontFamily: FontManager.default.secondaryFont,
  fontSize: '1.4375rem',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
}

export const PriceTitle = styled.small`
  color: ${ColorManager.default.primaryColor};
  font-size: 1.0625rem;
`
export const TourPrice = {
  as: 'h3',
  color: ColorManager.default.primaryColor,
  fontFamily: FontManager.default.secondaryFont,
  fontSize: '1.9375rem',
  fontWeight: 'normal',
  lineHeight: 0.8,
  mb: '0',
}

export const BoxAbstract = styled.div`
  align-items: center;
  justify-content: left;
  margin-bottom: 15px;
  margin-top: 5px;
  .abstract-label.open {
    background: ${ColorManager.default.white};
    color: ${ColorManager.default.yellowColor};
  }
`
export const TourCode = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-size: 1.3125rem;
  a {
    color: inherit;
  }
`
export const TourRating = styled(Rating)`
  font-size: 1.3125rem !important;
  margin-left: 10px;
  margin-top: 2px;
  position: absolute !important;
  svg {
    font-size: 1.1875rem !important;
    color: ${ColorManager.default.yellowColor};
  }
`
export const ShowAbstract = styled.button`
  background-color: ${ColorManager.default.yellowColor};
  border: 1px solid ${ColorManager.default.yellowColor};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  float: right;
  font-size: 1.1875rem;
  margin-top: -2px;
  min-width: 80px;
  padding: 3px;
  text-align: center;
`
export const AbstractContent = styled.div`
  margin-bottom: 10px;
  .abstract-content {
    display: none;
  }
  .abstract-content.open {
    display: block;
  }
  span {
    color: #333333e6;
    font-size: 1.3125rem;
    line-height: 1;
  }
`
export const GridAirline = styled(Grid)`
  display: table-cell;
  margin: 0;
  padding: 15px;
  vertical-align: middle;
  .lazy-load-image-background.blur {
    margin-bottom: 0;
  }
`
export const AirLogo = styled(AppImage)`
  height: 36px;
  image-rendering: auto;
  vertical-align: middle;
  width: 100%;
`
export const GridDate = styled(Grid)`
  padding: 12px 10px;
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
  display: flex;
  font-size: 1.3125rem;
  justify-content: left;
`
export const DateNum = styled.span`
  color: #333333e6;
  display: block;
  font-size: 1.1875rem;
  line-height: 0.9;
  // margin-left: 22px;
  text-align: left;
`

export const GridCountry = styled(Grid)`
  padding: 12px 10px;
`
export const CountryBox = styled.div`
  // align-items: center;
  display: flex;
  justify-content: left;
  p {
    margin: 0;
  }
`
export const CountryAll = styled.span`
  color: #333333e6;
  display: block;
  font-size: 1.1875rem;
  line-height: 0.9;
  // margin-left: 22px;
  text-align: left;
  a:last-child {
    margin: 0;
  }
`
export const LinkTour = styled.span`
  color: inherit;
  display: block;
  margin-right: 4px;
`

export const BoxMonth = styled.div`
  margin: 15px 0 10px 0;
  .period-label.open {
    background: ${ColorManager.default.white};
    color: ${ColorManager.default.primaryColor};
  }
`
export const GridPeriod = styled(Grid)`
  border-bottom: 1px solid ${ColorManager.default.greyColor};
  border-top: 1px solid ${ColorManager.default.greyColor};
  display: flex;
  padding: 4px 0;
`
export const BoxPeriod = styled.div`
  // display: flex;
  // .tour-period:last-child {
  //   display: flex;
  // }
  padding: 0;
`
export const MonthTopic = styled.div`
  background: ${ColorManager.default.primaryColor};
  border: 1px solid ${ColorManager.default.primaryColor};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  cursor: pointer;
  display: inline-block;
  font-size: 1.1875rem;
  margin-bottom: 5px;
  margin-right: 10px;
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
  font-size: 1.0625rem;
  margin-right: 10px;
  min-width: 50px;
  padding: 2px 4px;
  text-align: center;
  width: max-content;
`
export const BoxDate = styled.div`
  display: block;
  // div:last-child {
  //   border: 0;
  // }
`
export const DateItem = styled.div`
  border-right: 1px solid ${ColorManager.default.greyColor};
  color: #333333e6;
  display: inline-block;
  font-size: 1.0625rem;
  margin-bottom: 3px;
  margin-top: 3px;
  padding: 2px 0;
  text-align: center;
  width: 54px;
`
export const BoxPNotFound = styled.div`
  margin: 15px 0 10px 0;
`
export const PeriodNotFound = styled.div`
  color: ${ColorManager.default.primaryColor};
  display: block;
  // font-size: 1.0625rem;
  font-size: 1.1875rem;
  line-height: 0.9;
  text-align: center;
`

export const BoxButton = styled.div`
  margin: 15px 0;
  margin-bottom: 0;
`
export const ViewButton = styled.a`
  // background: linear-gradient(to right, rgb(38,177,122), rgb(155,218,129));
  background: ${ColorManager.default.white};
  border: 1px solid ${ColorManager.default.primaryColor};
  border-radius: 6px;
  // box-shadow: 1px 1px 3px 0px #51c07d;
  box-shadow: 1px 1px 3px 0px #44009966;
  color: ${ColorManager.default.primaryColor};
  display: block;
  font-size: 1.4375rem;
  padding: 7px 0;
  text-align: center;
  :hover {
    background: ${ColorManager.default.primaryColor};
    color: ${ColorManager.default.white};
  }
`