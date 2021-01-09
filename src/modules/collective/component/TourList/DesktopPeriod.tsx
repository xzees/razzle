import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import { GridPeriod, BoxPeriod, TourItinerary, MonthLabel, PeriodMonth, BoxDate, DateItem, PeriodNotFound } from './Desktop.style';
import { TourListProps } from './Interface';
import { getDate, formatsubMonth, formatYear } from 'common/Manager/Helper';

const DesktopPeriod = inject("stores")(
  observer((props: TourListProps) => {
    const { tourData } = props

    return (
      <>
        {tourData.periods.length > 0 ? (
          <>
            <BoxPeriod>
              <Heading content={i18n.t('collective.list.itinerary.title')} {...TourItinerary} />
              {tourData?.periods.map(periodValue => {
                const month = new Date(periodValue.month);
                const year = new Date(periodValue.year);
                return (
                  <GridPeriod key={`period${periodValue.month}`} item xs={12} className={`tour-period`}>
                    <PeriodMonth>
                      <MonthLabel>{formatsubMonth(month)} {formatYear(year)}</MonthLabel>
                    </PeriodMonth>
                    <BoxDate>
                      {periodValue?.periodData.map(periodData => {
                        const dateFrom = new Date(periodData.dateFrom);
                        const dateTo = new Date(periodData.dateTo);
                        return (
                          <DateItem key={`date${periodData.periodID}`}>
                            {`${getDate(dateFrom)}-${getDate(dateTo)}`}
                          </DateItem>
                        )
                      })}
                    </BoxDate>
                  </GridPeriod>
                )
              })}
            </BoxPeriod>
          </>
        ) :
          <BoxPeriod>
            <Heading content={i18n.t('collective.list.itinerary.title')} {...TourItinerary} />
            <PeriodNotFound>{i18n.t('collective.list.itinerary.notfound')}</PeriodNotFound>
          </BoxPeriod>
        }
      </>
    )
  })
)

export default DesktopPeriod;