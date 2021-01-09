import React, { useState, useEffect } from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, Grid } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import { FormControlLabels } from '../Rating/Mobile/Style';
import { makeStyles } from '@material-ui/core/styles';
import i18n from 'utilities/I18n';
import {
    styleFormControlLabel,
    styleRadioGroup,
    StyleToggleButton
} from './Style';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';


const useStyles = makeStyles({
    mySortingContainerStyle: {
        padding: '0rem 1rem',
    },
    myToggleButtonStyle: {
        width: '100%',
        color: ColorManager.default.fifthColor,
        border: 1,
        borderStyle: 'solid',
        borderColor: ColorManager.default.fifthColor,
        fontSize: FontManager.default.text,
        padding: '3px',
        "&.Mui-selected": {
            backgroundColor: ColorManager.default.fifthColor,
            color: ColorManager.default.white,
            "&:hover": {
                backgroundColor: ColorManager.default.fifthColor,
              },
          },
    },
    
  }
);

interface IOrder { label: string; value: boolean, name: string, ordering: string }
interface Iprops {
    stores?: RootStore;
    onReset: boolean;
}

const index = inject('stores')(
    observer((props: Iprops) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const classes = FormControlLabels();
    const myclasses = useStyles();
    const { onReset} = props;

    const handleOrder = (indexOrderSelected: number) => {
        let newOrderArr:IOrder[] = new Array();
        order.map((elm:IOrder, index:number) => {
            const newOrder:IOrder = {...elm, value: (index == indexOrderSelected)}
            newOrderArr.push(newOrder);
            if(index == indexOrderSelected){
                uiStore.setSort({name: elm.name, ordering: elm.ordering});
            }
        });
        setOrder(newOrderArr);
    }

    useEffect(() => {
        if(onReset) {
            handleOrder(0);
            //setOnReset(false);
        }
      }, [onReset]);

    const masterOrder:IOrder[] = [
        {label: i18n.t('hotel.search.filter.price.order.recommend'), value: false, name: 'advice', ordering: 'desc'},
        {label: i18n.t('hotel.desktop.search.filter.order.score'), value: false, name: 'scroll', ordering: 'desc' },
        {label: i18n.t('hotel.search.filter.price.order.price.asc') , value: false, name: 'price', ordering: 'asc' },
        {label: i18n.t('hotel.search.filter.price.order.price.desc'), value: false, name: 'price', ordering: 'desc' },
    ];
    let orderTemp:IOrder[] = [];
    masterOrder.map((item: any) => {
        orderTemp.push({...item, value: (item.name == uiStore.sort.name && item.ordering == uiStore.sort.ordering)});
    });

    const [order, setOrder] = useState<IOrder[]>(orderTemp);

    return (
        <FormControl component="fieldset">
            <Grid container spacing={4}
                        className={myclasses.mySortingContainerStyle}>
                {
                    order.map((elm:IOrder, index:number) => {
                        return (<Grid item xs={6} key={index}>
                            <ToggleButton
                                value={elm.label}
                                selected={elm.value}
                                onChange={() => {
                                    handleOrder(index);
                                }}
                                className={myclasses.myToggleButtonStyle}
                                >
                                {elm.label}
                            </ToggleButton>
                        </Grid>);
                    })
                }
            </Grid>
        </FormControl>
    );
}));


export default index;