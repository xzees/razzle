import React from 'react';
import Box from 'common/src/components/Box';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import { BannerWrapper , propsBannerSection } from './Style';
import RootStore from 'stores';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import SearchForm from '../SearchForm';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import i18n from 'utilities/I18n';

interface PropTypes {
  stores?: RootStore;
  params?: any;
  [key: string]: any;
}

const BannerSection = inject('stores')(
  observer((props: PropTypes) => {
    
    const { boxStyle, h1Style, h3Style } = propsBannerSection;
    const uiStore = props.stores!.HotelRootStore;

    return (
      <BannerWrapper id="banner_section">
        <Container>
          <Box width={['100%', '100%', '90%', '80%', '70%']} {...boxStyle}>
            <Grid container={true} spacing={1}>
              <Grid item={true} xs={12} md={12} lg={12}>
                <Heading content={i18n.t('hotel.components.banner.content1st')} 
                {...h1Style} />
              </Grid>
              <Grid item={true} xs={12} md={12} lg={12}>
                <Heading content={i18n.t('hotel.components.banner.content2nd')}
                {...h1Style} />
              </Grid>
              <SearchForm Theme={propsBannerSection} btnSearch={uiStore.btnSearch} />
            </Grid>
          </Box>
        </Container>
      </BannerWrapper>
    );
  })
);

export default BannerSection;