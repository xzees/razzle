import React from 'react';
import i18n from 'utilities/I18n';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import ColorManager from 'common/Manager/ColorManager';
import TourFilterModel from 'modules/collective/Models/TourFilter/TourFilterModel';
import { FCMobileLabel, FCMobileFilterLabel, FCMobileFilterTotal } from '../Style';

type Props = {
    tourFilter: TourFilterModel;
    handleDurationChange?: any;
}

const index = (props: Props) => {

    const {
        tourFilter,
        handleDurationChange
    } = props;

    return (
        <>
            <FormControl component="fieldset" style={{ width: '100%' }}>
                <FormGroup>
                    {tourFilter?.duration?.map((durationData, index) => (
                        <FCMobileLabel
                            key={index}
                            control={<Checkbox value={durationData.value} onChange={handleDurationChange} name={durationData.value.toString()} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                            label={
                                <FCMobileFilterLabel>
                                    {durationData.value} {i18n.t('collective.list.duration.day')}
                                    <FCMobileFilterTotal>( {durationData.total} )</FCMobileFilterTotal>
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