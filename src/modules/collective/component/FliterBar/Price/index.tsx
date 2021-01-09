import React from 'react';
import i18n from 'utilities/I18n';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import ColorManager from 'common/Manager/ColorManager';
import TourFilterModel from 'modules/collective/Models/TourFilter/TourFilterModel';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import { FCMobileLabel, FCMobileFilterLabel, FCMobileFilterTotal } from '../Style';

type Props = {
    tourFilter: TourFilterModel;
    filterPrice?: string;
    handlePriceChange?: any;
}

const index = (props: Props) => {

    const {
        tourFilter,
        filterPrice,
        handlePriceChange
    } = props;

    const PropRadio = {
        checkedIcon: <RadioButtonCheckedRoundedIcon style={{ fill: ColorManager.default.primaryColor }} />,
        icon: <RadioButtonUncheckedRoundedIcon />,
    };

    return (
        <>
            <FormControl component="fieldset" style={{ width: '100%' }}>
                <RadioGroup value={filterPrice} onChange={handlePriceChange}>
                    <FCMobileLabel
                        control={<Radio {...PropRadio} />}
                        label={<FCMobileFilterLabel>{i18n.t('collective.list.filter.price.all')}</FCMobileFilterLabel>}
                        value=""
                    />
                    {tourFilter?.price?.priceRange?.map((priceData, index, arr) => (
                        parseInt(priceData.total) > 0 ? (
                            <FCMobileLabel key={index}
                                control={<Radio {...PropRadio} />}
                                // control={<Checkbox value={priceData.value} onChange={handlePriceChange} name={priceData.text} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                                label={
                                    <FCMobileFilterLabel>
                                        {priceData.text} {arr.length - 1 === index ? 'ขึ้นไป' : ''}
                                        <FCMobileFilterTotal>( {priceData.total} )</FCMobileFilterTotal>
                                    </FCMobileFilterLabel>
                                }
                                value={priceData.value}
                            />
                        ) : undefined
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default index;