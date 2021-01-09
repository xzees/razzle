import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import {
  GridCC, BoxContent, GridAirline, BoxAirline, AirItem, AirName, AirIcon, AirLogo, GridDate, DateBox, DateTitle, DateIcon,
  GridMeal, BoxMeal, MealTitle, MealIcon, GridCountry, BoxCountry, CountryTitle, CountryIcon, LinkTour
} from './Desktop.style'
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';

const DesktopTopContent = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;

    return (
      <GridCC key="centerContent" item xs={12} md={3} >
        <BoxContent>
          <Grid container >
            <GridAirline key="airContent" item xs={4} sm={4} md={4} className="airContent">
              {tourDetail?.airline ? (
                <BoxAirline>
                  <AirItem className={'airname'}>
                    <AirName>
                      <AirIcon htmlColor={ColorManager.default.fourthColor} />
                      {tourDetail?.airline.airlineName}
                    </AirName>
                  </AirItem>
                  <AirItem>
                    <AirLogo visibleByDefault src={tourDetail?.airline.airlineLogo} alt={tourDetail?.airline.airlineName} />
                  </AirItem>
                </BoxAirline>
              ) : undefined}
            </GridAirline>
            <GridDate key="dateContent" item xs={3} sm={3} md={3} className="dateContent">
              <DateBox>
                <DateTitle>
                  <DateIcon htmlColor={ColorManager.default.fourthColor} />
                  {tourDetail?.numDay > 0 ? `${tourDetail?.numDay} ${i18n.t('collective.detail.duration.day')}` : undefined} {tourDetail?.numNight > 0 ? `${tourDetail?.numNight} ${i18n.t('collective.detail.duration.night')}` : undefined}
                </DateTitle>
              </DateBox>
            </GridDate>
            <GridMeal key="mealContent" item xs={2} sm={2} md={2} className="mealContent">
              <BoxMeal>
                <MealTitle>
                  <MealIcon htmlColor={ColorManager.default.fourthColor} />
                  {tourDetail?.mealAmount ? `${tourDetail?.mealAmount} ${i18n.t('collective.detail.meal.total')}` : i18n.t('collective.detail.meal.no')}
                </MealTitle>
              </BoxMeal>
            </GridMeal>
            <GridCountry key="countryContent" item xs={3} sm={3} md={3} className="countryContent">
              <BoxCountry>
                <CountryTitle>
                  <CountryIcon htmlColor={ColorManager.default.fourthColor} />
                  {tourDetail?.country.map((tourCountry, indexCountry) => (
                    <LinkTour key={`country${indexCountry}`} href={`/${tourCountry.code}/`}>
                      {tourCountry.title}
                    </LinkTour>
                  ))}
                </CountryTitle>
              </BoxCountry>
            </GridCountry>
          </Grid>
        </BoxContent>
      </GridCC>
    )
  })
)

export default DesktopTopContent;