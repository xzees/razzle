import React, { Component,Fragment } from 'react'
import Banner from 'modules/hotel/component/Banner/Roomlist'
import _ from 'lodash';
import { formatDate } from 'common/Manager/Helper';
import i18n from 'utilities/I18n';

export const Desktop = (props: any) => {
   
    return (
      <>
        <Banner {...props} />
        <style jsx={true}>{`
          #header-menu {
            color: black !important;
          }
          #header-menu img {
            filter: invert(48%) sepia(30%) saturate(3207%) hue-rotate(-130deg) brightness(95%) contrast(56%);
          }
          #header-menu button[aria-label="open drawer"] svg {
            color: #440099;
          }

        `}</style>
      </>
    );
};

export default Desktop;