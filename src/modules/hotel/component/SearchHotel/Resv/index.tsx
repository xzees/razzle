import React from 'react';
import FillFull from 'modules/hotel/component/Button/FillFull';
import ColorManager from 'common/Manager/ColorManager';
import i18n from 'utilities/I18n';

const index = (props: {onClick: () => void, style?: React.CSSProperties}) => {
    const {
      onClick
    } = props;
    
    return (
      
        <FillFull 
          backgroundColor={ColorManager.default.secondaryColor}
          stlye={props.style}
          onClick={onClick}
        >
          {i18n.t('hotel.desktop.btn.item.detail')}
        </FillFull> 
    );
};

export default index;