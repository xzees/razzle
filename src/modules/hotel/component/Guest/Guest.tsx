import React from 'react';
import LayoutSwitchers from './LayoutSwitchers';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import useGuest from 'modules/hotel/Hook/useGuest';
import {
  Theme
} from './Style'
interface PropTypes {
  stores?: RootStore;
}
import i18n from 'utilities/I18n';

const Guest = inject('stores')(
  observer((props: PropTypes) => {

    const uiStore = props.stores!.HotelRootStore
    const Themes = {...uiStore.GuestStore.getUITheme}

    const {
      handleClickAway,
      handleClick,
      roomAdd,
      roomRemove,
      adultAdd,
      adultRemove,
      childAdd,
      childRemove,
      _handleChange,
      ChildText,
      open,
      setOpen
    } = useGuest(uiStore);

    return (
      <div style={{...Themes.container}}>
        <LayoutSwitchers 
          handleClickAway={handleClickAway}
          Theme={Themes}
          handleClick={handleClick}
          open={open}
          room={uiStore.vRoom}
          adult={uiStore.vAdult}
          child={uiStore.vChild}
          childOld={uiStore.vChildOld}
          roomAdd={roomAdd}
          roomRemove={roomRemove}
          adultAdd={adultAdd}
          adultRemove={adultRemove}
          modelLabel={i18n.t('hotel.components.guest.guest.lblmodel')}
          modelTitle={i18n.t('hotel.components.guest.guest.lblmodel')}
          setOpen={setOpen}
          childAdd={childAdd}
          childRemove={childRemove}
          childText={ChildText}
          childHandleChange={_handleChange}
        />
      </div>
    ); 
}));

export default Guest;