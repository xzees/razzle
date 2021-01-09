import LayoutSwitcher from 'common/components/LayoutSwitcher';
import React from 'react';
import ModalScreen from './ModalScreen';
import Component  from './Component';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon'

const renderModalScreen = (props: any) => {
  return (
    <ModalScreen 
      fullscreen={true} 
      label={props.modelLabel}
      closeBtnIcon={<RenderExpandMoreIcon />}
      title={props.modelTitle}
      isMobile={true}
      {...props}
    />
  );
};

const LayoutSwitchers = (props: any) => {
  return (
      <LayoutSwitcher 
        desktopView={<Component isMobile={false} {...props} />}
        mobileView={renderModalScreen(props)}
      /> 
  );
};

export default LayoutSwitchers;