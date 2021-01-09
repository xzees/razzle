import React from 'react'
import LocationShareFavoriteIcon from 'modules/hotel/component/LocationShareFavoriteIcon';
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import SearchToggle from 'modules/hotel/component/SearchToggle/Modal';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon'
import i18n from 'utilities/I18n';

const TopContainer = (props: any) => {

    return (
        <styles.TopContainer component="div" p={6}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <BtnSearch {...props} refName="" refComp={null} />
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="row" justify="flex-end" alignItems="center">
                        <LocationShareFavoriteIcon color={ColorManager.default.white}  {...props}/>
                    </Grid>
                </Grid>
            </Grid>
        </styles.TopContainer>
    );
};

const BtnSearch = inject('stores')(
    observer((props: RoomListInterface) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;

    const onClick = () => {
        uiStore.setOpen((!uiStore.open));
    }
    return (
        <SearchToggle 
            setOpen={uiStore.setOpen}
            closeBtnIcon={<RenderExpandMoreIcon />}
            open={uiStore.open} 
        >
            <styles.EditSearchButton onClick={onClick} variant="outlined">
                {i18n.t('hotel.components.guest.guest.lblmodel')}
            </styles.EditSearchButton>
        </SearchToggle>
    )
}));

export default TopContainer;