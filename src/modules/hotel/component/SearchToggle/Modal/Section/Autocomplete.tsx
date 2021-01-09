import React from 'react';
import Container from 'modules/hotel/component/ModalScreen/Container';
import { 
    InputAC , 
} from './Style';
import useAC from 'modules/hotel/Hook/useAC';
import RootStore from 'stores';
import ModalScreens from 'modules/hotel/component/ModalScreen'
import Component from 'modules/hotel/component/Autocomplete/Component'
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon'
import { useShowHistory } from 'modules/hotel/component/Autocomplete/ModalScreen';
import i18n from 'utilities/I18n';
import { inject, observer } from 'mobx-react';

interface Iprops {
    MInputProps: any;
    stores?: RootStore;
}

const Autocomplete = inject('stores')(
    observer((props: Iprops) => {

    const {
        getOptionLabel,
        value,
        setValue,
        onKeyUp,
        onChange,
        notfind,
        setOption,
        loading,
        options,
        history,
        setHistory,
        propsItem,
        propsHistory,
        autocompleteUI
    } = useAC(props);
    
    const {
        handleClickOpen,
        handleClose,
        setState,
        state
    } = useShowHistory(props);

    const {
        MInputProps
    } = props;

    const propsAC: any = {
        id: 'use-autocomplete-hotel',
        options,
        getOptionLabel,
        clearOnBlur: true,
        placeholder: i18n.t('hotel.autocomplete.modal.detail'),
        notfind,
        setOption,
        value,
        setValue,
        loading,
        history,
        setHistory,
        debug: false,
        modelLabel: i18n.t('hotel.autocomplete.modal'),
        modelTitle: i18n.t('hotel.autocomplete.label'),
        onChange: (event: any, values: any) => {
            if (values != null) {
                setState(false);
            } 
            onChange(event, values)
        },
        onKeyUp: onKeyUp,
        propsItem: propsItem,
        propsHistory: propsHistory,
        autocompleteUI: autocompleteUI
    };

    return (
        <Container>
            <InputAC
                variant="outlined"
                placeholder={i18n.t('hotel.autocomplete.modal.detail')}
                InputProps={MInputProps}
                onClick={handleClickOpen}
            />
             <ModalScreens 
                closeBtnIcon={<RenderExpandMoreIcon />}
                title={i18n.t('hotel.autocomplete.label')}
                open={state}
                setOpen={setState}
                handleClose={handleClose}
            >
                <Component 
                    isMobile={true} 
                    {...propsAC}
                    setOpen={setState}
                />
            </ModalScreens>
        </Container>
    );
}));

export default Autocomplete;