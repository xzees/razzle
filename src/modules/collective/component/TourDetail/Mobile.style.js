import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core';
import ButtonMui from '@material-ui/core/Button';
import Container from 'common/src/components/UI/Container';
import { AppImage } from 'common/components';
import { Rating } from '@material-ui/lab';
import { DateRangeRounded, RestaurantRounded, GradeRounded, CardTravelRounded, ExpandMoreRounded, EventNoteRounded, InfoRounded } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';

export const SectionTour = styled.section`

`
export const ContainerTour = styled(Container)`

`
export const BoxMain = styled.div`
  background-color: ${ColorManager.default.white};
  margin-left: -15px;
  margin-right: -15px;
  padding: 15px;
`
export const TourImg = styled(AppImage)`
  display: inline-block;
  border: 0;
  border-radius: 6px;
  image-rendering: auto;
  // margin-bottom: 10px;
  max-width: 100%;
  object-fit: cover;
  vertical-align: middle;
  width: 100%;
`

export const BoxDetail = styled.div`
  // margin: 15px 0;
  @media(max-width: 413px) {
    .Date-Box, .Country-Box, .Meal-Box {
      padding: 12px 6px !important;
    }
    .Date-Box svg {
      margin-left: 0 !important;
      margin-right: 4% !important;
    }
    .Meal-Box svg {
      font-size: 24px !important;
      margin-right: 4% !important;
    }
  }
  @media(max-width: 370px) {
    .Date-Box, .Country-Box, .Meal-Box {
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
    .Meal-Box svg {
      font-size: 22px !important;
      margin-left: -2% !important;
      margin-right: 2% !important;
    }
  }
`
export const TourTitle = {
  as: 'h1',
  color: ColorManager.default.primaryColor,
  fontFamily: FontManager.default.secondaryFont,
  fontSize: '1.4375rem',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '5px',
  mt: '10px',
}
export const BoxTourCode = styled.div`
  align-items: center;
  justify-content: left;
  margin-bottom: 15px;
`
export const TourCode = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-size: 1.3125rem;
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
export const GridContent = styled(Grid)`
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`
export const GridAirline = styled(Grid)`
  display: table-cell;
  margin: 0;
  padding: 15px;
  vertical-align: middle;
`
export const AirLogo = styled(AppImage)`
  height: 36px;
  image-rendering: auto;
  vertical-align: middle;
  width: 100%;
`
export const GridDate = styled(Grid)`
  padding: 12px 10px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`
export const DateBox = styled.div`
  // align-items: center;
  display: flex;
  justify-content: left;
  p {
    margin: 0;
  }
`
export const DateIcon = styled(DateRangeRounded)`
  font-size: 26px !important;
  margin-left: 4%;
  margin-right: 6%;
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
export const GridMeal = styled(Grid)`
  padding: 12px 10px;
  text-align: center;
`
export const MealBox = styled.div`
  // align-items: center;
  display: flex;
  justify-content: left;
  p {
    margin: 0;
  }
`
export const MealIcon = styled(RestaurantRounded)`
  font-size: 26px !important;
  margin-right: 6%;
`
export const MealAll = styled.span`
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

export const BoxTopButton = styled.div`
  padding: 0.625rem 0;
`
export const BoxShared = styled.div`
  display: flex;
  margin-bottom: 0.625rem;
`
export const BoxSharedButton = styled.div`
  width: 50%;
  margin-right: 4px;
  :last-child {
    margin-left: 4px;
    margin-right: 0;
  }
`
export const ButtonTel = styled(ButtonMui)`
  background-color: ${ColorManager.default.white} !important;
  border: 1px solid ${ColorManager.default.primaryColor} !important;
  border-radius: 4px !important;
  box-shadow: unset !important;
  color: ${ColorManager.default.primaryColor} !important;
  font-size: 1.4375rem !important;
  line-height: 1 !important;
  text-transform: unset !important;
  padding: 12px 10px !important;
  width: 100%;
  svg {
    font-size: 1.375rem !important;
    filter: unset !important;
    position: absolute;
    left: 19px;
    top: 25%;
  }
  @media(max-width: 393px) {
    padding: 10px !important;
  }
`
export const ButtonLine = styled(ButtonMui)`
  background-color: ${ColorManager.default.white} !important;
  border: 1px solid #3acd02 !important;
  border-radius: 4px !important;
  box-shadow: unset !important;
  color: #3acd02 !important;
  font-size: 1.4375rem !important;
  line-height: 1 !important;
  text-transform: unset !important;
  padding: 12px 10px !important;
  width: 100%;
  img {
    filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8) !important;
    position: absolute;
    left: 19px;
    top: 25%;
    width: 22px;
  }
  @media(max-width: 393px) {
    padding: 10px !important;
  }
`

export const BoxAbstract = styled.div`
  margin-bottom: 20px;
`
export const AbstractTitle = styled.div`
  display: flex;
`
export const IconAbstract = styled(GradeRounded)`
  margin-right: 5px;
  margin-top: -2px;
`
export const h2Style = {
  as: 'h2',
  color: ColorManager.default.primaryColor,
  fontSize: '1.5625rem',
  fontWeight: 'normal',
  lineHeight: 0.9,
  mb: '10px',
}
export const AbstractTour = styled.p`
  cursor: default;
  font-family: ${FontManager.default.thirdFont};
  // font-size: 1.3125rem;
  font-size: 0.9375rem;
  // line-height: 1;
  line-height: 1.4;
  margin: 0;
`

export const BoxPlan = styled.div`
  margin-bottom: 20px;
`
export const PlanTitle = styled.div`
  display: flex;
`
export const IconPlan = styled(CardTravelRounded)`
  margin-right: 5px;
  margin-top: -2px;
`
export const PlanDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  #daysidebar {
    scrollbar-width: none;
  }
  #daysidebar::-webkit-scrollbar{
    display: none;
  }
`
export const DaySidebar = styled.div`
  height: 100%;
  // margin-right: 15px;
  // margin-right: 0;
  overflow: hidden;
  position: sticky;
  text-align: center;
  top: 70px;
  // top: 5px;
  // width: 50px;
  // width: 80px;
  width: 70px;
  z-index: 1;
  .dayDate.expanded .tag-day {
    background: ${ColorManager.default.primaryColor};
  }
  .dayDate.expanded .tag-num {
    color: ${ColorManager.default.primaryColor};
  }
  .dayDate:last-child {
    margin-bottom: 0;
  }
  // ::-webkit-scrollbar {
  //   background: transparent;
  //   width: 4px;
  // }
  // ::-webkit-scrollbar-thumb {
  //   background: ${ColorManager.default.primaryColor};
  //   border-radius: 5px;
  // }

  // @media(max-width: 416px) {
  //   width: 68px;
  //   ::-webkit-scrollbar {
  //     width: 2px;
  //   }
  // }
  // @media(max-width: 393px) {
  //   margin-right: 4px;
  //   width: 67px;
  // }
  // @media(max-width: 376px) {
  //   margin-right: 3px;
  // }

`
export const DayData = styled.div`
  cursor: pointer;
  display: block;
  width: 50px;
  height: 45px;
  text-align: center;
  position: relative;
  margin-bottom: 15px;
  border-radius: 10px;
  :after {
    display: block;
    content: '';
    position: absolute;
    border: 1px dashed #bbbccc;
    top: -60%;
    left: 50%;
    bottom: 0;
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
  padding: 8px 4px;
  display: block;
  color: ${ColorManager.default.white};
  font-size: 11px;
  font-weight: bold;
  position: absolute;
  width: 14px;
  word-break: break-all;
  line-height: 10px;
  z-index: 3;
  border-radius: 10px 0 0 10px;
`
export const TagNum = styled.h1`
  display: block;
  margin: 0;
  padding: 3px 0 3px 14px;
  font-size: 40px;
  position: relative;
  color: #7fb231;
  background: #eee;
  z-index: 2;
  border-radius: 10px;
  line-height: 1;
`

export const PlanData = styled.div`
  // margin-bottom: 10px;
  margin-bottom: 1px;
  width: 100%;
  .explanDate.expanded svg {
    transform: rotate(180deg);
    transition: transform 150ms ease;
  }
  .explanDate.expanded .planDetail {
    height: auto;
    min-height: 0px;
    opacity: 1;
    padding: 0.5rem 0.8rem;
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
  min-height: 41px !important;
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
  font-size: 1.3125rem;
  line-height: 1;
  padding: 10px 0;
  width: 100%;
  span {
    font-family: ${FontManager.default.secondaryFont};
    margin-right: 5px;
  }
`
export const IconExPlan = styled(ExpandMoreRounded)`
  color: ${ColorManager.default.primaryColor};
  font-size: 20px !important;
  transform: rotate(0deg);
  transition: transform 150ms ease !important;
`
export const ExPlanDetail = styled.div`
  font-size: 1.1875rem;
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
    height: 20px;
    margin-right: 5px;
    position: relative;
    top: 4px;
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

export const BoxTourPeriod = styled.div`
  margin-bottom: 20px;
  .month-period.current {
    background: ${ColorManager.default.white};
    color: ${ColorManager.default.primaryColor};
  }
  .tour-period {
    display: none;
  }
  .tour-period.open {
    display: block;
  }
`
export const PeriodTitle = styled.div`
  display: flex;
`
export const IconPeriod = styled(EventNoteRounded)`
  margin-right: 5px;
`
export const BoxMonth = styled.div`
  margin: 10px 0;
`
export const MonthTopic = styled.div`
  background: ${ColorManager.default.primaryColor};
  border: 1px solid ${ColorManager.default.primaryColor};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  cursor: pointer;
  display: inline-block;
  font-size: 1.3125rem;
  margin-bottom: 5px;
  margin-right: 8px;
  min-width: 60px;
  padding: 1px 0;
  text-align: center;
  width: max-content;
  :last-child {
    margin-right: 0;
  }
`
export const BoxPeriod = styled.div`
  // display: flex;
  // .tour-period:last-child {
  //   display: flex;
  // }
`
export const TablePeriod = styled.div`
  border-radius: 4px;
  border: 1px solid ${ColorManager.default.greyColor};
  margin-bottom: 15px;
`
export const TablePeriorTitle = styled.div`
  align-items: center;
  background: ${ColorManager.default.greyColor};
  border-bottom: 1px solid ${ColorManager.default.greyColor};
  display: flex;
  padding: 5px 10px;
`
export const TablePeriodDetail = styled(Grid)`
  padding: 5px 10px;
`
export const TablePeriodDetailL = styled(Grid)`

`
export const TablePeriodDetailR = styled(Grid)`

`
export const PeriodDetailTitle = styled.label`
  color: ${ColorManager.default.thirdColor};
  display: flow-root;
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.3125rem;
`
export const StrikeP = styled.p`
  // line-height: 0.9;
  margin: 0;
  margin-bottom: -6px;
  padding: 0;
`
export const StrikePeriod = styled.span`
  // color: ${ColorManager.default.fourthColor};
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
export const PeriodDetailTitleP = styled.small`
  float: right;
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.1875rem;
  font-weight: normal;
  padding-right: 20px;
`
export const PeriodDetailTitleR = styled.span`
  float: right;
  font-family: ${FontManager.default.secondaryFont};
  padding-right: 20px;
  span {
    font-family: ${FontManager.default.secondaryFont};
  }
`
export const PeriodDetailLable = styled.label`
  color: ${ColorManager.default.fourthColor};
  display: flow-root;
  font-size: 1.3125rem;
`
export const PeriodDetailLableR = styled.span`
  color: ${ColorManager.default.fourthColor};
  float: right;
  padding-right: 20px;
`
export const MonthTitle = styled.span`
  color: ${ColorManager.default.thirdColor};
  float: left;
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.4375rem;
  line-height: 1;
  // width: 80%;
  width: -webkit-fill-available;
`
export const BoxResvButton = styled.div`
  margin: 5px auto;
`
export const MonthResvButton = styled.span`
  background: ${ColorManager.default.primaryColor};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  cursor: pointer;
  float: left;
  font-size: 1.3125rem;
  height: 30px;
  line-height: 1;
  max-width: 86px;
  min-width: 86px;
  padding: 5px 0;
  text-align: center;
  // width: 20%;
`
export const MonthResvButtonFull = styled.span`
  background: ${ColorManager.default.orange2Color};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  cursor: pointer;
  float: left;
  font-size: 1.3125rem;
  height: 30px;
  line-height: 1;
  max-width: 86px;
  min-width: 86px;
  padding: 5px 0;
  text-align: center;
  // width: 20%;
`

export const BoxCondition = styled.div`
  margin-bottom: 20px;
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
  margin-top: -2px;
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
  min-height: 41px !important;
  padding: 0 0.5rem 0 0.8rem;
  user-select: none;
  svg {
    color: #409;
    font-size: 1.375rem;
    margin: 0;
    margin-right: 5px;
    margin-top: -2px;
    pointer-events: none;
  }
`
export const ExCondTitle = styled.div`
  color: #333;
  cursor: pointer;
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.3125rem;
  line-height: 1;
  margin: 10px 0;
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
    font-size: 1.25rem;
    margin-right: 2px;
  }
  .cond-detail .unconstruc {
    width: 95%;
    height: auto;
    padding: 15px;
    text-align: center;
    background-color: #fff5e1;
    border: 1px solid #f99d5d;
    border-radius: 12px;
    margin: 10px auto 0;
    color: #ad6323;
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