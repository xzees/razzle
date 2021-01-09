import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { BoxMonth, MonthTopic, GridPeriod, BoxPeriod, MonthLabel, PeriodMonth, BoxDate, DateItem, BoxPNotFound, PeriodNotFound } from './Mobile.style';
import { TourListProps } from './Interface';
import { getDate, formatsubMonth, formatYear } from 'common/Manager/Helper';

const MobilePeriod = inject("stores")(
  observer((props: TourListProps) => {
    const {
      tourData,
      openPeriod,
      selectedPeriod
    } = props;

    return (
      <>
        {tourData.periods.length > 0 ? (
          <>
            <BoxMonth>
              {tourData?.periods.map((periodValue, periodMain) => {
                const month = new Date(periodValue.month);
                const year = new Date(periodValue.year);
                return (
                  <MonthTopic
                    key={`topic${periodValue.month}`}
                    onClick={() => openPeriod(`${tourData.tourID}${periodMain}`)}
                    className={`period-label${selectedPeriod === tourData.tourID + '' + periodMain ? ' open' : ''}`}
                  >{formatsubMonth(month)} {formatYear(year)}</MonthTopic>
                )
              })}
            </BoxMonth>
            <BoxPeriod>
              {tourData?.periods.map((periodValue, indexPeriod) => (
                <GridPeriod key={`period${periodValue.month}`} item xs={12} className={`tour-period${selectedPeriod === tourData.tourID + '' + indexPeriod ? ' open' : ''}`} >
                  <BoxDate>
                    {periodValue?.periodData.map((periodData) => {
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
              ))}
            </BoxPeriod>
          </>
        ) :
          <BoxPNotFound>
            <PeriodNotFound>{i18n.t('collective.list.itinerary.notfound')}</PeriodNotFound>
          </BoxPNotFound>
        }
      </>
    )
  })
)

export default MobilePeriod;