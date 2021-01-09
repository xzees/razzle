import LayoutSwitcher from 'common/components/LayoutSwitcher';
import React from 'react';
import Component from './Component';
import ModalScreen from './ModalScreen';
import { HooksAutocompleteProps } from './withHooksHOC';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon';

const renderModalScreen = (props: HooksAutocompleteProps) => {
  return (
    <ModalScreen 
      fullscreen={true} 
      label={props.modelLabel}
      closeBtnIcon={<RenderExpandMoreIcon />}
      title={props.modelTitle}
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