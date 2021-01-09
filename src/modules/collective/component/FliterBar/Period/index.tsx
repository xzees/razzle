import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import ColorManager from 'common/Manager/ColorManager';
import TourFilterModel from 'modules/collective/Models/TourFilter/TourFilterModel';
import { FCMobileLabel, FCMobileFilterLabel, FCMobileFilterTotal } from '../Style';
import { formatfullMonth, formatYear } from 'common/Manager/Helper';

type Props = {
    tourFilter: TourFilterModel;
    handlePeriodChange?: any;
}

const index = (props: Props) => {

    const {
        tourFilter,
        handlePeriodChange
    } = props;

    return (
        <>
            <FormControl component="fieldset" style={{ width: '100%' }}>
                <FormGroup>
                    {tourFilter?.period?.map((periodData, index) => {
                        const month = new Date(periodData.month);
                        const year = new Date(periodData.year);
                        return (
                            <FCMobileLabel key={index}
                                control={<Checkbox value={periodData.value} checked={periodData.isChecked} onChange={handlePeriodChange} name={periodData.value} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                                label={
                                    <FCMobileFilterLabel>
                                        {formatfullMonth(month)} {formatYear(year)}
                                        <FCMobileFilterTotal>( {periodData.total} )</FCMobileFilterTotal>
                                    </FCMobileFilterLabel>
                                }
                            />
                        )
                    })}
                </FormGroup>
            </FormControl>
        </>
    );
};

export default index;