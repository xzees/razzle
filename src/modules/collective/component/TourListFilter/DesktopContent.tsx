import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import { GridAirline, AirLogo, GridDate, DateBox, DateTitle, DateNum, GridCountry, CountryBox, CountryTitle, CountryAll, LinkTour, BoxButton, ViewButton } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import { DateRangeRounded, RoomRounded } from '@material-ui/icons';
import { TourListProps } from './Interface';

const DesktopContent = inject("stores")(
  observer((props: TourListProps) => {
    const { tourData, index } = props

    return (
      <Grid container>
        <GridAirline key={`airline${index}`} item xs={3} sm={4} md={4} className="Air-Box">
          {index === 0 ? (<AirLogo visibleByDefault src={tourData?.airline.airlineLogo} alt={tourData?.airline.airlineName} title={tourData?.airline.airlineName} />)
            : (<AirLogo effect="blur" src={tourData?.airline.airlineLogo} alt={tourData?.airline.airlineName} title={tourData?.airline.airlineName} />)
          }
        </GridAirline>
        <GridDate key={`date${index}`} item xs={4} sm={4} md={4} className="Date-Box">
          <DateBox>
            <DateRangeRounded htmlColor={ColorManager.default.fourthColor} fontSize="small" style={{ marginLeft: '4%', marginRight: '6%', fontSize: 34 }} />
            <p>
              <DateTitle>{i18n.t('collective.list.duration.title')}</DateTitle>
              <DateNum>{tourData?.numDay > 0 ? `${tourData?.numDay} ${i18n.t('collective.list.duration.day')}` : undefined} {tourData?.numNight > 0 ? `${tourData?.numNight} ${i18n.t('collective.list.duration.night')}` : undefined}</DateNum>
            </p>
          </DateBox>
        </GridDate>
        <GridCountry key={`country${index}`} item xs={5} sm={4} md={4} className="Country-Box">
          <CountryBox>
            <RoomRounded htmlColor={ColorManager.default.fourthColor} fontSize="small" style={{ marginRight: '2%', fontSize: 34 }} />
            <p>
              <CountryTitle>{i18n.t('collective.list.country.title')}</CountryTitle>
              <CountryAll>
                {tourData?.country.map(tourCountry => (
                  // <LinkTour key={`country${tourCountry.code}`} href={`/${tourCountry.code}/`}>{tourCountry.title}</LinkTour>
                  <LinkTour key={`country${tourCountry.code}`}>{tourCountry.title}</LinkTour>
                ))}
              </CountryAll>
            </p>
          </CountryBox>
        </GridCountry>
      </Grid>
    )
  })
)

export default DesktopContent;