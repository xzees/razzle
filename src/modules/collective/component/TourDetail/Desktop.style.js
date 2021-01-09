import styled from 'styled-components';
import { Grid, Box, Button } from '@material-ui/core';
import Container from 'common/src/components/UI/Container';
import { AppImage } from 'common/components';
import { Rating } from '@material-ui/lab';
import { FlightRounded, DateRangeRounded, RestaurantRounded, LocationOnRounded, CardTravelRounded, ExpandMoreRounded, EventNoteRounded, InfoRounded } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';

export const SectTourMain = styled.section`
  background-color: ${ColorManager.default.greyColor};
  margin-top: 64px;
  padding-bottom: 20px;
  padding-top: 20px;
  @media (max-width: 1279px) {
    margin-top: 0;
  }
`
export const SectionTour = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-bottom: 20px;
  padding-top: 20px;
`
export const ContainerTour = styled(Container)`
  @media(max-width: 991px) {
    .Desktop-RContent {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`
export const BoxAbstract = styled.div`
  margin-bottom: 20px;
  p {
    cursor: default;
    // font-size: 1.4375rem;
    font-family: ${FontManager.default.thirdFont};
    font-size: 1.0625rem;
    // line-height: 1;
    line-height: 1.4;
    margin: 0;
  }
`
export const h1Style = {
  as: 'h1',
  color: ColorManager.default.primaryColor,
  // fontSize: ['28px', '28px', '28px', '35px', '35px'],
  fontSize: ['25px', '29px', '31px'],
  fontFamily: FontManager.default.secondaryFont,
  fontWeight: 'normal',
  lineHeight: 0.9,
  mb: '15px',
  textAlign: 'left'
}
export const h2Style = {
  as: 'h2',
  color: ColorManager.default.primaryColor,
  fontSize: '1.8125rem',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '10px',
}

export const GridImage = styled(Grid)`
  @media only screen and (max-width: 991px) {
    flex-basis: 100%!important;
    max-width: 100%!important;
  }
  @media (min-width: 600px) and (max-width: 991px) {
    flex-basis: 80%!important;
    max-width: 80%!important;
    margin: 0 auto !important;
  }
`
export const BoxImg = styled(Grid)`
  padding: 10px;
`
export const TourImg = styled(AppImage)`
  border-radius: 6px;
  height: 100%;
  image-rendering: auto;
  object-fit: cover;
  width: 100%;
`

export const GridContent = styled(Grid)`
  @media only screen and (max-width: 991px) {
    flex-basis: 100%!important;
    max-width: 100%!important;
  }
`
export const BoxMain = styled.div`
  background-color: ${ColorManager.default.white};
  border-radius: 6px;
  height: 100%;
`
export const BoxTopDetail = styled.div`
  padding: 12px 20px;
  @media (min-width: 600px) and (max-width: 991px) {
    padding: 6px 20px;
  }
`
export const BoxTourItem = styled.div`
  display: block;
  margin-bottom: 4px;
  @media (min-width: 600px) and (max-width: 991px) {
    margin-bottom: 0;
    h2 {
      line-height: 1;
    }
  }
`
export const PriceTitle = styled.span`
  font-size: 1.4375rem;
  margin-right: 5px;
`
export const StrikePrice = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-size: 1.4375rem;
  margin-right: 5px;
  position: relative;
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
  as: 'h2',
  color: ColorManager.default.primaryColor,
  display: 'inline',
  fontFamily: FontManager.default.secondaryFont,
  fontSize: ['25px', '31px', '35px'],
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
}
export const TourPriceAsk = {
  as: 'h2',
  color: ColorManager.default.greenColor,
  display: 'inline',
  fontFamily: FontManager.default.secondaryFont,
  fontSize: ['25px', '31px', '35px'],
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
}
export const TourCode = styled.span`
  color: ${ColorManager.default.fourthColor};  
  font-size: 1.4375rem;
`

export const BoxTopButton = styled.div`
  padding: 20px;
  @media (min-width: 600px) and (max-width: 991px) {
    padding-top: 10px;
  }
`
export const BoxShared = styled.div`
  display: flex;
  margin-bottom: 0.625rem;
  @media (min-width: 960px) and (max-width: 991px) {
    .RightTelBox svg, .RightLineBox img {
      display: none;
    }
  }
`
export const BoxSharedButton = styled.div`
  margin-right: 4px;
  width: 50%;
  :last-child {
    margin-left: 4px;
    margin-right: 0;
  }
`
export const ButtonTel = styled(Button)`
  background-color: ${ColorManager.default.white} !important;
  border: 1px solid ${ColorManager.default.primaryColor} !important;
  border-radius: 4px !important;
  box-shadow: unset !important;
  color: ${ColorManager.default.primaryColor} !important;
  font-size: 1.4375rem !important;
  line-height: 1 !important;
  padding: 10px !important;
  text-transform: unset !important;
  width: 100%;
  svg {
    filter: unset !important;
    font-size: 1.375rem !important;
    left: 19px;
    position: absolute;
    top: 25%;
  }
  @media (min-width: 992px) and (max-width: 1219px) {
    .MuiButton-startIcon {
      margin-left: 0px;
    }
    svg {
      left: 15px;
    }
  }
`
export const ButtonLine = styled(Button)`
  background-color: ${ColorManager.default.white} !important;
  border: 1px solid #3acd02 !important;
  border-radius: 4px !important;
  box-shadow: unset !important;
  color: #3acd02 !important;
  font-size: 1.4375rem !important;
  line-height: 1 !important;
  padding: 10px !important;
  text-transform: unset !important;
  width: 100%;
  img {
    filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8) !important;
    left: 19px;
    position: absolute;
    top: 25%;
    width: 22px;
  }
  @media (min-width: 992px) and (max-width: 1219px) {
    .MuiButton-startIcon {
      margin-left: 0px;
    }
    img {
      left: 15px;
    }
  }
`

export const GridCC = styled(Grid)`
  @media only screen and (max-width: 991px) {
    flex-basis: 100%!important;
    max-width: 100%!important;
  }
`
export const BoxContent = styled.div`
  background-color: ${ColorManager.default.white};
  border-radius: 6px;
  height: 100%;
  @media (min-width: 992px) {
    .airContent, .dateContent, .mealContent, .countryContent {
      border: none;
      flex-basis: 100%!important;
      max-width: 100%!important;
    }
  }
`
export const GridAirline = styled(Grid)`
  border-right: 1px solid #dddddd;
  margin-bottom: 10px !important;
  margin-top: 10px !important;
  @media (max-width: 959px) {
    border: none;
  }
`
export const BoxAirline = styled.div`
  display: table;
  padding: 0 10px;
  vertical-align: middle;
  width: 100%;
  .airname {
    display: none;
  }
  @media (min-width: 992px) {
    padding: 0 12px;
    .airname {
      display: table-cell;
    }
  }
`
export const AirItem = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 60%;
`
export const AirName = styled.span`
  display: flex;
  font-size: 1.4375rem;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: unset;
  }
`
export const AirIcon = styled(FlightRounded)`
  font-size: 26px !important;
  margin-right: 5px;
`
export const AirLogo = styled(AppImage)`
  height: 27px;
  image-rendering: auto;
  vertical-align: middle;
  width: 100%;
`
export const GridDate = styled(Grid)`
  border-right: 1px solid #dddddd;
  margin-bottom: 10px !important;
  margin-top: 10px !important;
`
export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  @media (min-width: 992px) {
    padding: 0 12px;
    justify-content: left;
    p {
      margin: 0px;
    }
  }
`
export const DateTitle = styled.span`
  display: flex;
  font-size: 1.4375rem;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: unset;
}
`
export const DateIcon = styled(DateRangeRounded)`
  font-size: 26px !important;
  margin-right: 5px;
`
export const GridMeal = styled(Grid)`
  border-right: 1px solid #dddddd;
  margin-bottom: 10px !important;
  margin-top: 10px !important;
`
export const BoxMeal = styled.div`
  padding: 0 10px;
  @media (min-width: 992px) {
    padding: 0 12px;
  }
`
export const MealTitle = styled.span`
  display: flex;
  font-size: 1.4375rem;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: unset;
  }
`
export const MealIcon = styled(RestaurantRounded)`
  font-size: 26px !important;
  margin-right: 5px;
`
export const GridCountry = styled(Grid)`
  margin-bottom: 10px !important;
  margin-top: 10px !important;
`
export const BoxCountry = styled.div`
  padding: 0 10px;
  @media (min-width: 992px) {
    padding: 0 12px;
  }
`
export const CountryTitle = styled.span`
  display: flex;
  font-size: 1.4375rem;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: unset;
  }
`
export const CountryIcon = styled(LocationOnRounded)`
  font-size: 26px !important;
  margin-right: 5px;
`
export const LinkTour = styled.a`
  color: inherit;
  margin-right: 4px;
`

export const BoxPeriod = styled.div`
  margin-bottom: 20px;
`
export const PeriodTitle = styled.div`
  display: flex;
`
export const IconPeriod = styled(EventNoteRounded)`
  margin-right: 5px;
  margin-top: 2px;
`
export const TablePeriod = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
`
export const Table = styled.table`
  border-collapse: collapse;
  cursor: default;
  text-align: center;
  width: 100%;
`
export const TableHead = styled.thead`
  font-size: 1.4375rem;
  th:first-child {
    border-left: none;
  }
  th:last-child {
    border-right: none;
  }
`
export const TableBody = styled.tbody`
  font-size: 1.3125rem;
  max-height: 50px;
  td:first-child {
    border-left: none;
  }
  td:last-child {
    border-right: none;
  }
`
export const TableTR = styled.tr`
  .text-center {
    text-align: center;
  }
`
export const TableTD = styled.td`
  border: 1px solid #ddd;
  border-bottom: 0;
  // padding: 8px;
  padding-top: 8px;
  text-align: center;
`
export const TableTH = styled.th`
  border: 1px solid #ddd;
  border-top: 0;
  font-family: ${FontManager.default.secondaryFont};  
  font-weight: normal;
  line-height: 0.9;
  padding: 8px;
  vertical-align: middle;
`
export const StrikeP = styled.p`
  line-height: 0.9;
  margin: 0;
  padding: 0;
`
export const StrikePeriod = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-size: 1.4375rem;
  position: relative;
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
export const RevButton = styled.button`
  background: ${ColorManager.default.primaryColor};
  border: 0;
  border-radius: 4px;
  color: ${ColorManager.default.white};
  cursor: pointer;
  display: block;
  font-size: 1.3125rem;
  margin-top: 2px;
  width: 100%;
`
export const RevButtonFull = styled.button`
  background: ${ColorManager.default.orange2Color};
  border: 0;
  border-radius: 4px;
  color: ${ColorManager.default.white};
  cursor: pointer;
  display: block;
  font-size: 1.3125rem;
  margin-top: 2px;
  width: 100%;
`

export const BoxPlan = styled.div`
  margin-bottom: 20px;
`
export const PlanTitle = styled.div`
  display: flex;
`
export const IconPlan = styled(CardTravelRounded)`
  margin-right: 5px;
  margin-top: 2px;
`
export const PlanDetail = styled.div`
  display: flex;
  justify-content: space-between;
  #daysidebar {
    scrollbar-width: none;
  }
  #daysidebar::-webkit-scrollbar{
    display: none;
  }
`
export const DaySidebar = styled.div`
  height: 100%;
  margin-right: 15px;
  overflow: hidden;
  position: sticky;
  text-align: center;
  top: 70px;
  // width: 60px;
  // width: 67px;
  width: 70px;
  z-index: 1;
  .dayDate.expanded .tag-day {
    background: ${ColorManager.default.primaryColor};
  }
  .dayDate.expanded .tag-num {
    color: ${ColorManager.default.primaryColor};
  }
  .dayDate:last-child {
    margin-bottom: 5px;
  }
`
export const DayData = styled.div`
  border-radius: 10px;
  cursor: pointer;
  display: block;
  height: 50px;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
  width: 60px;
  :after {
    border: 1px dashed #bbbccc;
    bottom: 0;
    content: '';
    display: block;
    left: 50%;
    position: absolute;
    top: -60%;
    z-index: 0;
  }
  :first-child:after {
    top: 0;
  }
`
export const PlanDay = styled.div`
  color: #409;
`
export const TagDay = styled.span`
  background: #ddd;
  border-radius: 10px 0 0 10px;
  color: ${ColorManager.default.white};
  display: block;
  font-size: 13px;
  font-weight: bold;
  line-height: 10px;
  padding: 11px 4px;
  position: absolute;
  width: 16px;
  word-break: break-all;
  z-index: 3;
`
export const TagNum = styled.h1`
  background: #eee;
  border-radius: 10px;
  color: #7fb231;
  display: block;
  font-size: 48px;
  line-height: 1;
  margin: 0;
  padding: 2px 0 2px 14px;
  position: relative;
  z-index: 2;
`

export const PlanData = styled.div`
  // margin-bottom: 6px;
  margin-bottom: 3px;
  width: 100%;
  .explanDate.expanded svg {
    transform: rotate(180deg);
    transition: transform 150ms ease;
  }
  .explanDate.expanded .planDetail {
    height: auto;
    min-height: 0px;
    opacity: 1;
    padding: 0.5rem 1rem;
    transition: opacity 0.2s linear;
    visibility: visible;
  }
  .explanDate:last-child {
    margin-bottom: 0;
  }
`
export const ExPlanPanel = styled.div`
  border: 1px solid #ddd !important;
  border-radius: 6px !important;
  box-shadow: none !important;
  margin-bottom: 10px;
`
export const ExPlanTab = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  min-height: 47px !important;
  padding: 0 0.5rem 0 0.8rem;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`
export const ExPlanTitle = styled.div`
  color: ${ColorManager.default.primaryColor};
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.4375rem;
  line-height: 1;
  padding: 12px 0;
  width: 100%;
  span {
    font-family: ${FontManager.default.secondaryFont};
    margin-right: 5px;
  }
`
export const IconExPlan = styled(ExpandMoreRounded)`
  color: ${ColorManager.default.primaryColor};
  transform: rotate(0deg);
  transition: transform 150ms ease !important;
`
export const ExPlanDetail = styled.div`
  font-size: 1.3125rem;
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: visibility 0s 0.2s, opacity 0.2s linear;
  visibility: hidden;
  p {
    line-height: 1;
    margin: 0;
  }
  p img {
    height: 24px;
    margin-right: 5px;
    position: relative;
    top: 5px;
    width: auto;
  }
  p br {
    content: "";
    display: block;
    font-size: 20%;
    margin: 2em;
  }
  strong {
    font-family: ${FontManager.default.secondaryFont};
    font-weight: normal;
  }
`

export const BoxCondition = styled.div`
  // margin-bottom: 20px;
  .tabOpen .condDetail {
    height: auto;
    min-height: 0px;
    opacity: 1;
    padding: 0.5rem 0.8rem;
    transition: opacity 0.2s linear;
    visibility: visible;
  }
  .Minius-SVG {
    display: none;
  }
  .tabOpen {
    .Minius-SVG {
      display: block;
    }
    .Plus-SVG {
      display: none;
    }
  }
`
export const CondTitle = styled.div`
  display: flex;
`
export const IconCond = styled(InfoRounded)`
  margin-right: 5px;
  margin-top: 2px;
`
export const ExCondPanel = styled.div`
  border-bottom: 1px solid #ddd !important;
  :last-child {
    border-bottom: none !important;
  }
`
export const ExCondTab = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  min-height: 47px !important;
  padding: 0 0.5rem 0 0.8rem;
  user-select: none;
  svg {
    color: #409;
    font-size: 1.5rem;
    margin: 9px 0;
    margin-right: 5px;
    pointer-events: none;
  }
`
export const ExCondTitle = styled.div`
  color: #333;
  cursor: pointer;
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.4375rem;
  line-height: 1;
  margin: 12px 0;
  pointer-events: none;
  width: 100%;
`
export const ExCondDetail = styled.div`
  font-size: 1.1875rem;
  height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transition: visibility 0s 0.2s, opacity 0.2s linear;
  visibility: hidden;
  .cond-detail {
    display: flex;
  }
  .cond-detail:last-child {
    margin-bottom: 10px;
  }
  .cond-detail svg {
    font-size: 1.375rem;
    margin-right: 2px;
  }
  .cond-detail .unconstruc {
    background-color: #fff5e1;
    border: 1px solid #f99d5d;
    border-radius: 12px;
    color: #ad6323;
    height: auto;
    margin: 10px auto 0;
    padding: 15px;
    text-align: center;
    width: 95%;
  }
  .cond-detail .unconstruc .style8 {
    font {
      float: unset !important;
    }
  }
  .cond-detail p {
    margin: 0;
  }
  .cond-detail p .span-dprice, p .dprice {
    background: #f18200;
    border-radius: 6px;
    color: ${ColorManager.default.white};
    padding: 0 4px;
  }
`

export const BoxMainRight = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  position: sticky;
  top: 70px;
`
export const RRatingLabel = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-size: 1.4375rem;
`
export const RTourRating = styled(Rating)`
  font-size: 1.4375rem !important;
  margin-left: 10px;
  margin-top: 2px;
  position: absolute !important;
  svg {
    font-size: 1.3125rem !important;
  }
`