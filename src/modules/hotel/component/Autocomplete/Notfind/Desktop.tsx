import React from 'react';
import {
  UlDivInSide,
  Ul,
  UlDivOutSide,
  MLabel,
  UlDivOutSideM,
  UlDivInSideHistory,
  UlDivInSideMobile,
  Li
} from 'modules/hotel/component/Autocomplete/Style';
import i18n from 'utilities/I18n';
import ColorManager from 'common/Manager/ColorManager';

const Desktop = () => {
  return (
    <ul className="listbox">
        <UlDivOutSideM>
          <MLabel radius="true">
            {i18n.t('hotel.components.autocomplete.notfind')}
          </MLabel>      
        </UlDivOutSideM>
      </ul>
  );
};

export default Desktop;