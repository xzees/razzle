import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import Heading from 'common/src/components/Heading';
import {
  h2Style, BoxTourPeriod, PeriodTitle, IconPeriod, BoxMonth, MonthTopic, BoxPeriod, TablePeriod, TablePeriorTitle, MonthTitle, MonthResvButtonFull, MonthResvButton,
  TablePeriodDetail, TablePeriodDetailL, TablePeriodDetailR, PeriodDetailTitle, StrikeP, StrikePeriod, PeriodDetailTitleP, PeriodDetailTitleR, PeriodDetailLable, PeriodDetailLableR
} from './Mobile.style';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';
import { getDate, formatsubMonth, formatFullYear, formatYear } from 'common/Manager/Helper';
import PeriodNotFound from './PeriodNotFound';

const MobilePeriod = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, openPeriod, selectedPeriod } = props;

    function calPrice(dcPrice: number, salePrice: number) {
      if (salePrice > 0) {
        if (dcPrice > 0) {
          const sumPrice = salePrice - dcPrice;
          return (<><StrikeP><StrikePeriod>{salePrice.toLocaleString()}</StrikePeriod></StrikeP>{sumPrice.toLocaleString()}</>)
        }
        else {
          return (<>{salePrice.toLocaleString()}</>)
        }
      } else {
        return (<>-</>)
      }
    }

    return (
      <BoxTourPeriod id={'tourMobPeriod'}>
        <PeriodTitle><IconPeriod htmlColor={ColorManager.default.primaryColor} /><Heading content={i18n.t('collective.detail.period.title')} {...h2Style} /></PeriodTitle>
        {tourDetail?.periods.periodGroup ? (
          <>
            <BoxMonth>
              {tourDetail?.periods.periodGroup.map((periodData, index) => {
                const month = new Date(periodData.month);
                const year = new Date(periodData.year);
                return (
                  <MonthTopic key={`month${index}`} onClick={() => openPeriod(`${periodData.month}${index}`)}
                    className={`month-period${selectedPeriod === periodData.month + '' + index ? ' current' : ''}`}
                  >
                    {formatsubMonth(month)} {formatYear(year)}</MonthTopic>
                )
              })}
            </BoxMonth>
            <BoxPeriod>
              {tourDetail?.periods.periodGroup.map((periodValue, indexPeriod) => (
                <Grid key={`period${indexPeriod}`} item xs={12} className={`tour-period${selectedPeriod === periodValue.month + '' + indexPeriod ? ' open' : ''}`} >
                  {periodValue?.periodData.map((periodData, indexDate) => {
                    const dateFrom = new Date(periodData.dateFrom);
                    const dateTo = new Date(periodData.dateTo);
                    const checkFull = periodData.full;
                    let discountPrice = 0;
                    let discountType = 'period';
                    if (periodData.dcUpdatePrice > 0) {
                      discountPrice = periodData.dcUpdatePrice;
                      discountType = 'update';
                    }
                    if (periodData?.dcHotPrice > 0) {
                      discountPrice = periodData.dcHotPrice;
                      discountType = 'hot';
                    }
                    return (
                      <TablePeriod key={`period${indexDate}`}>
                        <TablePeriorTitle>
                          <MonthTitle>
                            {getDate(dateFrom) == getDate(dateTo)
                              ? (`${getDate(dateFrom)}-${getDate(dateTo)} ${formatsubMonth(dateTo)} ${formatFullYear(dateTo)}`)
                              : (`${getDate(dateFrom)} ${formatsubMonth(dateFrom)} - ${getDate(dateTo)} ${formatsubMonth(dateTo)} ${formatFullYear(dateTo)}`)
                            }
                          </MonthTitle>
                          {checkFull != 'N'
                            ? <MonthResvButtonFull
                              onClick={() => window.open(`https://www.thaitravelcenter.com/th/tour/booking_tour.php?id=${tourDetail?.tourID}&type=${discountType}&value=${periodData?.periodID}`, "_blank")}
                            >{i18n.t('collective.detail.period.button.full')}</MonthResvButtonFull>
                            : <MonthResvButton
                              onClick={() => window.open(`https://www.thaitravelcenter.com/th/tour/booking_tour.php?id=${tourDetail?.tourID}&type=${discountType}&value=${periodData?.periodID}`, "_blank")}
                            >{i18n.t('collective.detail.period.button')}</MonthResvButton>
                          }
                        </TablePeriorTitle>
                        <TablePeriodDetail container>
                          <TablePeriodDetailL item xs={6}>
                            <PeriodDetailTitle>{i18n.t('collective.detail.period.adult')} <PeriodDetailTitleP>({i18n.t('collective.detail.period.priceTHB')})</PeriodDetailTitleP></PeriodDetailTitle>
                            <PeriodDetailTitle>{i18n.t('collective.detail.period.adult.twin')}<PeriodDetailTitleR>{calPrice(discountPrice, periodData.price_1ATwin_HT)}</PeriodDetailTitleR></PeriodDetailTitle>
                            <PeriodDetailLable>{i18n.t('collective.detail.period.adult.single')}<PeriodDetailLableR>{calPrice(discountPrice, periodData.price_1ASingle_HT)}</PeriodDetailLableR></PeriodDetailLable>
                            <PeriodDetailLable>{i18n.t('collective.detail.period.adult.triple')}<PeriodDetailLableR>{calPrice(discountPrice, periodData.price_3A_HT)}</PeriodDetailLableR></PeriodDetailLable>
                          </TablePeriodDetailL>
                          <TablePeriodDetailR item xs={6}>
                            <PeriodDetailTitle>{i18n.t('collective.detail.period.child')} <PeriodDetailTitleP>({i18n.t('collective.detail.period.priceTHB')})</PeriodDetailTitleP></PeriodDetailTitle>
                            <PeriodDetailTitle>{i18n.t('collective.detail.period.child.single')}<PeriodDetailTitleR>{calPrice(discountPrice, periodData.price_1A1C_HT)}</PeriodDetailTitleR></PeriodDetailTitle>
                            <PeriodDetailLable>{i18n.t('collective.detail.period.child.bed')}<PeriodDetailLableR>{calPrice(discountPrice, periodData.price_2A1Cbed_HT)}</PeriodDetailLableR></PeriodDetailLable>
                            <PeriodDetailLable>{i18n.t('collective.detail.period.child.nobed')}<PeriodDetailLableR>{calPrice(discountPrice, periodData.price_2A1CNobed_HT)}</PeriodDetailLableR></PeriodDetailLable>
                          </TablePeriodDetailR>
                        </TablePeriodDetail>
                      </TablePeriod>
                    )
                  })}
                </Grid>
              ))}
            </BoxPeriod>
          </>
        ) : (<PeriodNotFound />)}
      </BoxTourPeriod>
    )
  })
)

export default MobilePeriod;