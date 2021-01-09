import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import { h2Style, BoxPeriod, PeriodTitle, IconPeriod, TablePeriod, Table, TableHead, TableBody, TableTR, TableTD, TableTH, StrikeP, StrikePeriod, RevButtonFull, RevButton } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';
import { getDate, formatsubMonth, formatFullYear } from 'common/Manager/Helper';
import PeriodNotFound from './PeriodNotFound';

const DesktopPeriod = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;

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
      <BoxPeriod id={'tourDeskPeriod'} >
        <PeriodTitle><IconPeriod htmlColor={ColorManager.default.primaryColor} /><Heading content={i18n.t('collective.detail.period.title')} {...h2Style} /></PeriodTitle>
        {tourDetail?.periods.periodList ? (
          <TablePeriod>
            <Table>
              <TableHead>
                <TableTR>
                  <TableTH style={{ maxWidth: 160, minWidth: 160 }} className="text-center" rowSpan={2}>{i18n.t('collective.detail.period.title')}</TableTH>
                  <TableTH style={{ width: '40%' }} className="text-center" colSpan={3}>{i18n.t('collective.detail.period.adult')}</TableTH>
                  <TableTH style={{ width: '40%' }} className="text-center" colSpan={3}>{i18n.t('collective.detail.period.child')}</TableTH>
                </TableTR>
                <TableTR>
                  <TableTH>{i18n.t('collective.detail.period.adult.twin')}</TableTH>
                  <TableTH>{i18n.t('collective.detail.period.adult.single')}</TableTH>
                  <TableTH>{i18n.t('collective.detail.period.adult.triple')}</TableTH>
                  <TableTH>{i18n.t('collective.detail.period.child.single')}</TableTH>
                  <TableTH>{i18n.t('collective.detail.period.child.bed')}</TableTH>
                  <TableTH>{i18n.t('collective.detail.period.child.nobed')}</TableTH>
                </TableTR>
              </TableHead>
              <TableBody>
                {tourDetail?.periods.periodList.map((periodData, index) => {
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
                    <TableTR key={`periods${index}`}>
                      <TableTD>
                        {getDate(dateFrom) == getDate(dateTo)
                          ? (`${getDate(dateFrom)}-${getDate(dateTo)} ${formatsubMonth(dateTo)} ${formatFullYear(dateTo)}`)
                          : (`${getDate(dateFrom)} ${formatsubMonth(dateFrom)} - ${getDate(dateTo)} ${formatsubMonth(dateTo)} ${formatFullYear(dateTo)}`)
                        }
                        {checkFull != 'N'
                          ? <RevButtonFull
                            onClick={() => window.open(`https://www.thaitravelcenter.com/th/tour/booking_tour.php?id=${tourDetail?.tourID}&type=${discountType}&value=${periodData?.periodID}`, "_blank")}
                          >{i18n.t('collective.detail.period.button.full')}</RevButtonFull>
                          : <RevButton
                            onClick={() => window.open(`https://www.thaitravelcenter.com/th/tour/booking_tour.php?id=${tourDetail?.tourID}&type=${discountType}&value=${periodData?.periodID}`, "_blank")}
                          >{i18n.t('collective.detail.period.button')}</RevButton>
                        }
                      </TableTD>
                      <TableTD>{calPrice(discountPrice, periodData.price_1ATwin_HT)}</TableTD>
                      <TableTD>{calPrice(discountPrice, periodData.price_1ASingle_HT)}</TableTD>
                      <TableTD>{calPrice(discountPrice, periodData.price_3A_HT)}</TableTD>
                      <TableTD>{calPrice(discountPrice, periodData.price_1A1C_HT)}</TableTD>
                      <TableTD>{calPrice(discountPrice, periodData.price_2A1Cbed_HT)}</TableTD>
                      <TableTD>{calPrice(discountPrice, periodData.price_2A1CNobed_HT)}</TableTD>
                    </TableTR>
                  )
                })}
              </TableBody>
            </Table>
          </TablePeriod>
        ) : (<PeriodNotFound />)}
      </BoxPeriod>
    )
  })
)

export default DesktopPeriod;