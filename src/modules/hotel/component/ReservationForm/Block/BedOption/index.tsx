//React
import React, { useState, useEffect } from 'react'
//Plugin
import _ from 'lodash';
//MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
//Model
import BlockModel from 'modules/hotel/models/BlockModel';
import ReservationBlockModel from 'modules/hotel/models/ReservationModel/BlockModel';
import BedroomModel from 'modules/hotel/models/ReservationModel/BedroomModel';
//Style
import {labelStyle, textHeaderStyle} from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const index = (props: any) => {
    const block: BlockModel = props.block;
    // console.log("🚀 ~ file: index.tsx ~ line 62 ~ index ~ block", block)
    const isConfirmMode: boolean = props.isConfirmMode;
    const reservationBlockState: ReservationBlockModel = props.reservationBlockState;
    // console.log("🚀 ~ file: index.tsx ~ line 65 ~ index ~ reservationBlockState", reservationBlockState)
    const reservationBlockIndex: number = props.reservationBlockIndex;
    const bookingFormState = props.bookingFormState;
    const setBookingFormState = props.setBookingFormState;

    const updateBedroom = (blockId: String, blockIndex: number, bedroomIndex: number, bedroomData: BedroomModel) => {
        const block = _.find(bookingFormState.blocks, ['blockId', blockId]);
        if (block) {
            const guestUpdate = block.guests[blockIndex].bedrooms[bedroomIndex] = bedroomData;
            setBookingFormState({ ...bookingFormState, ...guestUpdate });
        }
    }

    return (
        <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend" style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.guest.selectbedtype')}</FormLabel>
                {/* เลือกประเภทเตียง (ขึ้นอยู่กับความพร้อมให้บริการ) */}
                <Grid container spacing={3}>
                    {
                        block.roomInfo.bedrooms.map((br, bedroomIndex) => {
                            const bedrooms = br.bedConfigurations.map((bed) => {
                                let bedString: string = '';
                                bed.bedTypes.map((bedType, index) => {
                                    if (index > 0) {
                                        if (index == bed.bedTypes.length - 1) {
                                            bedString += ' ' + i18n.t('hotel.desktop.reservation.form.and') + ' ';
                                        } else {
                                            bedString += " , ";
                                        }
                                    }
                                    bedString += bedType.count + " " + bedType.name;
                                });
                                return (
                                    <FormControlLabel
                                        value={bed.bedTypes[0].configurationId}
                                        control={<Radio disabled={isConfirmMode} />}
                                        label={<Typography style={labelStyle}>{bedString}</Typography>}
                                    />
                                );
                            })
                            if (bedroomIndex < block.roomInfo.bedroomCount) {
                                return (<Grid item md={6} xs={12}>
                                    <Typography variant="h3" component="h3" style={textHeaderStyle}>
                                        {br.name}
                                    </Typography>
                                    <RadioGroup
                                        aria-label="bedPreference"
                                        name="bedPreference"
                                        row
                                        value={reservationBlockState.guests[reservationBlockIndex].bedrooms[bedroomIndex].bedTypeConfigurationId}
                                        onChange={(e) => updateBedroom(block.blockId, reservationBlockIndex, bedroomIndex, { ...reservationBlockState.guests[reservationBlockIndex].bedrooms[bedroomIndex], bedTypeConfigurationId: Number(e.target.value) })} >
                                        {bedrooms}
                                    </RadioGroup>
                                </Grid>);
                            } else {
                                return null;
                            }
                        })
                    }
                </Grid>
            </FormControl>
        </Grid>
    );
}


export default index;