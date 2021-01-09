import React from 'react';
import useDatepicker from 'modules/hotel/Hook/useDatepicker';
import RootStore from 'stores';
import ModalScreens from 'modules/hotel/component/ModalScreen';
import DatepickerMobile from 'modules/hotel/component/DatepickerMobile';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon';
import useModel from 'modules/hotel/Hook/useModel';
import View from 'modules/hotel/component/Datepickers/View';
import i18n from 'utilities/I18n';

interface Iprops {
    startDates: Date;
    endDates: Date;
    stores?: RootStore;
    [key: string]: any;
}

const Calendar = (props: Iprops) => {

    const {
        handleClickOpen,
        setStateModel,
        stateModel,
        handleClose 
    } = useModel({});

    const propDatepicker = {
        ...useDatepicker(props),
        Theme: {...props.stores?.HotelRootStore.DatepickerStore.UI.Theme},
        modelLabel: '',
        modelTitle: ''
    } as any;

    return (
        <>
            <View {...props} handleClickOpen={handleClickOpen} />
            <ModalScreens 
                closeBtnIcon={<RenderExpandMoreIcon />}
                title={i18n.t('hotel.components.datepicker.label')}
                open={stateModel}
                setOpen={setStateModel}
                handleClose={handleClose}
            >
            <div>
                <DatepickerMobile {...propDatepicker} handleClose={handleClose} />
            </div>
            </ModalScreens>
        </>
    );
};

export default Calendar;