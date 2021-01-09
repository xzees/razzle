import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import { GridContent, GridAirline, AirLogo, GridDate, DateBox, DateIcon, DateTitle, DateNum, GridMeal, MealBox, MealIcon, MealAll } from './Mobile.style';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';

const MobileContent = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;

    return (
      <GridContent container>
        <GridAirline item xs={4} className="Air-Box">
          <AirLogo visibleByDefault src={tourDetail?.airline.airlineLogo} alt={tourDetail?.airline.airlineName} title={tourDetail?.airline.airlineName} />
        </GridAirline>
        <GridDate item xs={4} className="Date-Box">
          <DateBox>
            <DateIcon htmlColor={ColorManager.default.fourthColor} fontSize="small" />
            <p>
              <DateTitle>{i18n.t('collective.detail.duration.title')}</DateTitle>
              <DateNum>{tourDetail?.numDay > 0 ? `${tourDetail?.numDay} ${i18n.t('collective.detail.duration.day')}` : undefined} {tourDetail?.numNight > 0 ? `${tourDetail?.numNight} ${i18n.t('collective.detail.duration.night')}` : undefined}</DateNum>
            </p>
          </DateBox>
        </GridDate>
        <GridMeal item xs={4} className="Meal-Box">
          <MealBox>
            <MealIcon htmlColor={ColorManager.default.fourthColor} fontSize="small" />
            <p>
              <DateTitle>{i18n.t('collective.detail.meal')}</DateTitle>
              <MealAll>
                {tourDetail?.mealAmount ? tourDetail?.mealAmount : i18n.t('collective.detail.meal.no')}
              </MealAll>
            </p>
          </MealBox>
        </GridMeal>
      </GridContent>
    )
  })
)

export default MobileContent;