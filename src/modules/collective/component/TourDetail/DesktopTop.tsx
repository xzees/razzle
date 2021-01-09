import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import { SectTourMain, ContainerTour } from './Desktop.style';
import { TourDetailProps } from './Interface';
import DesktopTitle from './DesktopTitle';
import DesktopImage from './DesktopImage';
import DesktopTopButton from './DesktopTopButton';
import DesktopTopContent from './DesktopTopContent';

const DesktopTop = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, isClient, periodDesktopScroll } = props;

    return (
      <SectTourMain>
        <ContainerTour>
          <DesktopTitle tourDetail={tourDetail} />
          <Grid container spacing={3} >
            <DesktopImage tourDetail={tourDetail} isClient={isClient} />
            <DesktopTopContent tourDetail={tourDetail} />
            <DesktopTopButton tourDetail={tourDetail} periodDesktopScroll={periodDesktopScroll} />
          </Grid>
        </ContainerTour>
      </SectTourMain>
    )
  })
)

export default DesktopTop;