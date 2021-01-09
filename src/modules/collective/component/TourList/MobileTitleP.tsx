import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import Heading from 'common/src/components/Heading';
import { TourTitle, GridPrice, PriceTitle, StrikePrice, TourPrice } from './Mobile.style';
import { TourListProps } from './Interface';

const MobileTitleP = inject("stores")(
  observer((props: TourListProps) => {
    const { tourData } = props;

    return (
      <Grid container>
        <Grid key={`title${tourData.tourID}`} item xs={8}>
          <a href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank">
            <Heading content={tourData.title} {...TourTitle} />
          </a>
        </Grid>
        <GridPrice key={`price${tourData.tourID}`} item xs={4} style={{ textAlign: 'right' }}>
          <PriceTitle className={tourData.discount ? 'mb-2' : undefined}>{i18n.t('collective.list.price.title')}</PriceTitle>
          {tourData.discount
            ? <><StrikePrice>{`฿ ${tourData.discount.normalPrice.toLocaleString()}`}</StrikePrice><Heading className={tourData.discount ? 'mt-4' : undefined} content={`฿ ${tourData.discount.salePrice.toLocaleString()}`} {...TourPrice} /></>
            : <Heading content={`฿ ${tourData.minPrice.toLocaleString()}`} {...TourPrice} />
          }
        </GridPrice>
      </Grid>
    )
  })
)

export default MobileTitleP;