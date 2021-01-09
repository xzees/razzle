import React from 'react';
import {
  UlDivInSide,
  Ul,
  UlMobile,
  UlDivOutSide,
  MLabel,
  Li
} from 'modules/hotel/component/Autocomplete/Style';
import i18n from 'utilities/I18n';
import ColorManager from 'common/Manager/ColorManager';

const Mobile = () => {
  return (
    <UlDivOutSide>
        <UlMobile className="listbox">
            <MLabel radius="false">
              {i18n.t('hotel.components.autocomplete.notfind')}
            </MLabel>
        </UlMobile>
    </UlDivOutSide>
  );
};

export default Mobile;