import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { Grid } from '@material-ui/core';
import Heading from 'common/src/components/Heading';
import { TourTitle, PriceTitle, TourPrice } from './Desktop.style';
import { TourListProps } from './Interface';

const DesktopTitleP = inject("stores")(
  observer((props: TourListProps) => {
    const { tourData } = props

    return (
      <Grid container >
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9} className="Tour-Name">
          <a href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank">
            <Heading content={tourData.title} {...TourTitle} />
          </a>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} style={{ textAlign: 'right' }} className="Tour-Price">
          <PriceTitle>{i18n.t('collective.list.price.title')}</PriceTitle>
          <Heading id="tour-price" content={`฿ ${tourData.minPrice.toLocaleString()}`} {...TourPrice} />
        </Grid>
      </Grid>
    )
  })
)

export default DesktopTitleP;