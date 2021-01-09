import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { 
    MCssTextFieldMap,
    BoxStyle
} from './Style';
import Style from './Style'
import ColorManager from 'common/Manager/ColorManager';
import { 
    formatMYForAutocomplete, 
    getDayTh, 
    getDate,
    getDiffDate
} from 'common/Manager/Helper';
import CallMadeIcon from '@material-ui/icons/CallMade';
import useDatepicker from 'modules/hotel/Hook/useDatepicker';
import RootStore from 'stores';
import Container from 'modules/hotel/component/ModalScreen/Container';
import i18n from 'utilities/I18n';

interface Iprops {
    // btnClickAC: any;
    startDates: Date;
    endDates: Date;
    stores?: RootStore;
    handleClickOpen?: any;
    isMobile?: Boolean;
}

const Text = (props: any) => {
    return (
        <MCssTextFieldMap
            style={{width: 50}}
            {...props}
        />
    );
};

const View = (props: Iprops) => {

    const {
        startDates,
        endDates,
        handleClickOpen,
        isMobile
    } = props;

    const {
        startDate,
        endDate
    } = useDatepicker(props);

    const InputPropsLeft = {
        style: {
            fontSize: 21,
            color: ColorManager.default.black
        },
        readOnly: true,
        value: getDate(startDates),
        padding: 0
    };

    const InputPropsRight = {
        style: {
            fontSize: 21,
            color: ColorManager.default.black
        },
        readOnly: true,
        value: (endDates != null) ? getDate(endDates) : '',
        padding: 0
    };
    
    return (
        <Container>
            <Grid container={true}  alignItems={'center'} > 
                <Grid item={true} xs={5} sm={4} md={4} >
                    <Box {...BoxStyle.BoxDefault}>
                        <Box m={0}>
                            <Text
                                variant="outlined"
                                InputProps={InputPropsLeft}
                                onClick={handleClickOpen}
                            />
                        </Box>
                        <Box {...BoxStyle.BoxThree} onClick={handleClickOpen}>
                            <Box {...BoxStyle.BoxCheckIn}>{i18n.t('hotel.components.datepicker.input.lblchkin')}</Box>
                            <Box {...BoxStyle.BoxDay} >{getDayTh(startDate.getDay()) + '.'}</Box>
                            <Box {...BoxStyle.BoxMY}>{formatMYForAutocomplete(startDate)}</Box>
                        </Box>
                    </Box>
                </Grid >
                {isMobile ? (
                <Grid item={true} xs={2} sm={2} md={2} >
                    <Box m={0} textAlign={'center'}>
                        <CallMadeIcon {...BoxStyle.CallMadeIcon} />
                    </Box>
                </Grid >
                ) : (
                <Grid item={true} xs={2} sm={4} md={4} >
                    <Style.CountDateContainer m={0} textAlign={'center'}>
                        {i18n.t('hotel.components.datepicker.view.stay')} <Style.CountDateBox>{getDiffDate(startDate, endDate)}
                        </Style.CountDateBox> {i18n.t('hotel.components.datepicker.view.night')}
                    </Style.CountDateContainer>
                </Grid >
                )}
                <Grid item={true} xs={5} sm={4} md={4} >
                    <Box {...BoxStyle.BoxDefaultRight}>
                        <Box {...BoxStyle.BoxThreeRight} onClick={handleClickOpen}>
                            <Box {...BoxStyle.BoxCheckIn}>{i18n.t('hotel.components.datepicker.input.lblchkout')}</Box>
                            <Box {...BoxStyle.BoxDay}>{endDate != null && getDayTh(endDate.getDay()) + '.'}</Box>
                            <Box {...BoxStyle.BoxMY}>{endDate != null && formatMYForAutocomplete(endDate)}</Box>
                        </Box>
                        <Box m={0}>
                            <Text
                                variant="outlined"
                                InputProps={InputPropsRight}
                                onClick={handleClickOpen}
                            />
                        </Box>
                    </Box>
                </Grid >
            </Grid >
        </Container>
    );
};

export default View;