import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import ColorManager from 'common/Manager/ColorManager';
import TourFilterModel from 'modules/collective/Models/TourFilter/TourFilterModel';
import { FCMobileLabel, FCMobileFilterLabel, FCMobileFilterTotal } from '../Style';

type Props = {
    tourFilter: TourFilterModel;
    handleRouteChange?: any;
}

const index = (props: Props) => {

    const {
        tourFilter,
        handleRouteChange
    } = props;

    return (
        <>
            <FormControl component="fieldset" style={{ width: '100%' }}>
                <FormGroup>
                    {tourFilter?.route?.map((routeData, index) => (
                        <FCMobileLabel
                            key={index}
                            control={<Checkbox value={routeData.value} onChange={handleRouteChange} name={routeData.value} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                            label={
                                <FCMobileFilterLabel>
                                    {routeData.value}
                                    <FCMobileFilterTotal>( {routeData.total} )</FCMobileFilterTotal>
                                </FCMobileFilterLabel>
                            }
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </>
    );
};

export default index;