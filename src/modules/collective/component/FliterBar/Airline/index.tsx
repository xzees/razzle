import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import ColorManager from 'common/Manager/ColorManager';
import TourFilterModel from 'modules/collective/Models/TourFilter/TourFilterModel';
import { FCMobileLabel, FCMobileFilterLabel, FCMobileFilterTotal } from '../Style';

type Props = {
    tourFilter: TourFilterModel;
    handleAirlineChange?: any;
}

const index = (props: Props) => {

    const {
        tourFilter,
        handleAirlineChange
    } = props;

    return (
        <>
            <FormControl component="fieldset" style={{ width: '100%' }}>
                <FormGroup>
                    {tourFilter?.airline?.map((airlineData, index) => (
                        <FCMobileLabel
                            key={index}
                            control={<Checkbox value={airlineData.value} onChange={handleAirlineChange} name={airlineData.value.toString()} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                            label={
                                <FCMobileFilterLabel>
                                {airlineData.langTH}
                                    <FCMobileFilterTotal>( {airlineData.total} )</FCMobileFilterTotal>
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