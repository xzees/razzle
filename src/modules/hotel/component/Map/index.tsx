import React, { useState } from 'react';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import _ from 'lodash';
import i18n from 'utilities/I18n';

const styles = {
  MapButton: styled<any>(Button)`
    &.MuiButton-contained {
      background-color: ${ColorManager.default.white50a};
      font-size: ${FontManager.default.TEXT_20};
      position: absolute;
      color: ${ColorManager.default.fifthColor};
      padding: 12px 20px;
      box-shadow: none;
    },
    .MuiButton-label {
      flex-direction: column;
    },
  `,
  MyLocationOnIcon: styled<any>(LocationOnIcon)`
    color: ${ColorManager.default.redColor};
    height: ${FontManager.default.TEXT_EXTRA_24};
  `,
  MyMapContainer: styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 130px;
  `,
  MyParagraph: styled.p<any>`
    margin: 0;
    padding: 0;
    line-height: ${FontManager.default.SMALL_MEDIUM_14};
    display: block;
  `,
}
   
const index = (props: any) => {
    const {latitude, longitude} = props;
    const center = {
      lat: _.round(latitude, 7),
      lng: _.round(longitude, 7)
    };
    
    const defaultProps = {
      center: center,
      zoom: 12
    };
    const mapProps = defaultProps;

    return (
      <styles.MyMapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDMCTfemEKm_49XKN2jllS5iocsEEmCBhw' }}
          center={center}
          defaultZoom={mapProps.zoom}
          options={{
            fullscreenControl: false
          }}
        >
        </GoogleMapReact>
        <styles.MapButton variant="contained">
          <styles.MyParagraph><styles.MyLocationOnIcon/></styles.MyParagraph>
          <styles.MyParagraph>{i18n.t('hotel.components.map.lookonmap')}</styles.MyParagraph>
        </styles.MapButton>
      </styles.MyMapContainer>
    );
};

export default index;