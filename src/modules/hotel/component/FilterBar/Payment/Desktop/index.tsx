import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import PaymentOptionListItem from './item';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import _ from 'lodash';
import RootStore from 'stores';

const useStyles = makeStyles({
    myFormControlStyle: {
        '&.MuiFormControl-root':{
            width: '100%',
            marginBottom: 16,
        },
        '& .MuiListItem-gutters':{
            paddingLeft: 8,
        },
        '& .MuiListItemSecondaryAction-root': {
            right: 8,
        }
    },
  });
  interface PaymentInterface {
    pay_at_property: boolean;
    no_require_credit_card: boolean; 
}

interface IPaymentOption { label: string; name: string; isChecked: boolean; count:number; }

interface Iprops {
    stores?: RootStore;
    onReset: boolean;
}

const index = inject('stores')(
    observer((props: Iprops) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const [paymentOption, setPaymentOption] = React.useState<IPaymentOption[]>(
        [
            { label: i18n.t('hotel.desktop.search.filter.paymentoption.athotel'), name: 'pay_at_property', isChecked:false, count: 0},
            { label: i18n.t('hotel.desktop.search.filter.paymentoption.notrequirecreditcard'), name: 'no_require_credit_card', isChecked:false, count: 0},
        ]
    );     
    
    const [paymentOptionSelect, setPaymentOptionSelect] = useState<any>({
        pay_at_property: false, 
        no_require_credit_card: false
    });
    const myclasses = useStyles();

    const paymentOptionChange = (name:string, status:boolean) => {
        const newPaymentOption:IPaymentOption[] = paymentOption.map((opt) => {
            return { label: opt.label, name: opt.name, isChecked:((name === opt.name)?status:opt.isChecked), count: opt.count}
        })
        setPaymentOption(newPaymentOption);
    }

    useEffect(() => {
        const o = _.reduce(paymentOption , function(obj, paymentOption) {
            obj[paymentOption.name] = paymentOption.isChecked
            return obj;
           }, {});
        setPaymentOptionSelect(o);
    }, [paymentOption])
    
    useEffect(() => {
        if(uiStore.dataComplete){
            setPaymentOption([{...paymentOption[0], count: uiStore.returnCountPayAtProperty.true}, {...paymentOption[1], count: uiStore.returnCountCreditcardRequired.true}])
        }
    },[uiStore.dataComplete]);

    useEffect(() => {
        uiStore.setFilter({payment: paymentOptionSelect});
    }, [paymentOptionSelect]);
    return (
        <FormControl component="fieldset" className={myclasses.myFormControlStyle}>
            {
                paymentOption.map((itemData, i) => { 
                    return (<PaymentOptionListItem key={i} label={itemData.label} name={itemData.name} isChecked={itemData.isChecked} count={itemData.count} paymentOptionChange={paymentOptionChange}/>) 
                })
            }
        </FormControl>
    );
}));

export default index;