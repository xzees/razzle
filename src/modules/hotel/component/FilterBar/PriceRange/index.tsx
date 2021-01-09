import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import { PriceRangeListItem } from './item';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import numeral  from 'numeral';
import styled from "styled-components";
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Loading from 'modules/hotel/component/Loading';

const styles = {
    MyFormControlStyle: styled<any>(FormControl)`
        &.MuiFormControl-root {
            width: 100%;
            margin-bottom: 16px;
            padding: 0;
            height: auto;
        },
        .MuiListItem-gutters {
            padding-left: 16px;
        },
        .MuiListItemSecondaryAction-root {
            right: 8px;
        },
    `,
    MySliderContainer: styled.div<any>`
        margin: 0 16px;
    `,
    MyTextField: styled<any>(TextField)`
        .MuiOutlinedInput-input {
            font-size: ${FontManager.default.text};
            padding: 6px 14px 6px 2px;
            text-align: right;
        },
        .MuiTypography-colorTextSecondary {
            font-size: ${FontManager.default.text};
        },
        .MuiOutlinedInput-notchedOutline{
            transform: rotate(0);
        },
    `,
    MyGridContainerStyle: styled<any>(Grid)`
        padding: 0 8px 0 16px;
    `,
    PrettoSlider: styled<any>(Slider)`
        &.MuiSlider-root {
            left: 0 !important;
            border: 0 !important;
            color: ${ColorManager.default.fifthColor} !important;
        },
        .MuiSlider-track {
            background-color: ${ColorManager.default.fifthColor};
        },
        .MuiSlider-thumb {
            height: 18px;
            width: 18px;
            background-color: ${ColorManager.default.white};
            border: 2px solid ${ColorManager.default.fifthColor};
            margin-top: -9px;
            &:focus, &:hover, &$active {
                box-shadow: inherit;
            },
        },
        .MuiSlider-valueLabel {
            left: calc(-50% - 2px);
        },
    `,
}

const enum INPUT_PRICE {
    EMPTY = 0,
    CHECKBOX = 1,
    SLIDER = 2,
    TEXTFIELD = 3,
}

interface PriceSliderInterface {
    start: number;
    end: number;
}

interface IPriceRange { label: string, value:number[], isChecked:boolean, count: number }
interface Iprops {
    stores?: RootStore;
    onReset: boolean;
}

const index = inject('stores')(
    observer((props: Iprops) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const dataComplete = uiStore.dataComplete;
    const maxItemPrice = uiStore.returnMaxPriceHotel;
    const searchModel= uiStore.returnSearchModel;
    const priceControl = uiStore.priceControl;
    const priceCheckbox = uiStore.returnPriceCheckbox;
    const priceSlider = uiStore.returnPriceSlider;
    const { onReset } = props;
    const MIN_PRICE:number = 1;
    const MAX_PRICE:number = 10000;
    const [maxPriceProp, setMaxPriceProp] = useState<number>((maxItemPrice) ? maxItemPrice : MAX_PRICE);

    const checkboxHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value.split(",");
        const valArray:number[] = [Number(val[0]), Number(val[1])];
        let updatePriceRange:IPriceRange[] = new Array();
        priceCheckbox.map((item, index) => {
            if(item.value[0] == valArray[0] && item.value[1] == valArray[1]) {
                updatePriceRange.push({...item, isChecked: event.target.checked});
            }else{
                updatePriceRange.push(item);
            }
        });
        uiStore.setPriceCheckbox(updatePriceRange);
        uiStore.setPriceControl(INPUT_PRICE.CHECKBOX);
    }

    const handleChange = (event: any, newValue: number | number[]) => {
        uiStore.setPriceSlider({start: newValue[0], end: newValue[1]});
    };

    const handleChangeCommitted = (event: any, newValue: number | number[]) => {
        uiStore.setPriceSlider({start: newValue[0], end: newValue[1]});
        uiStore.setPriceControl(INPUT_PRICE.SLIDER);
    };
    
    // const handleStartPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTextFieldsVal(Number(event.target.value), value[0].end);
    //     //setControlLastUpdate(INPUT_PRICE.TEXTFIELD);
    //     uiStore.setPriceControl(INPUT_PRICE.TEXTFIELD);
    // };

    // const handleEndPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTextFieldsVal(value[0].start, Number(event.target.value));
    //     //setControlLastUpdate(INPUT_PRICE.TEXTFIELD);
    //     uiStore.setPriceControl(INPUT_PRICE.TEXTFIELD);
    // };
    
    const resetCheckbox = () => {
        let newPriceRangeArr:IPriceRange[] = new Array();
        priceCheckbox.map((item, index) => {
            newPriceRangeArr.push({...item, isChecked: false });
        });
        uiStore.setPriceCheckbox(newPriceRangeArr);
    }

    const resetSliderTextInput = () => {
        uiStore.setPriceSlider({start: MIN_PRICE, end: maxPriceProp});
    }

    useEffect(() => {
        if(priceControl == INPUT_PRICE.SLIDER){
            uiStore.setFilter({price: [priceSlider]});
            resetCheckbox();
            uiStore.setPriceControl(INPUT_PRICE.EMPTY);
        }else if(priceControl == INPUT_PRICE.CHECKBOX){
            let filterPriceRange:any[] = [];
            priceCheckbox.map((item, index) => {
                if(item.isChecked){
                    filterPriceRange.push({start: item.value[0], end: item.value[1]});
                }
            });
            uiStore.setFilter({price: filterPriceRange});
            resetSliderTextInput();
            uiStore.setPriceControl(INPUT_PRICE.EMPTY);
        }
    }, [priceControl]);
    
    useEffect(() => {
        if(dataComplete){
            if(maxPriceProp != maxItemPrice) {
                const priceRangeArr:IPriceRange[] = [];
                let minprice:number = 0;
                let maxprice:number = 0;
                let growth:number = 0;
                let prevGrowth:number = 0;
                priceCheckbox.map((item, index) => {
                    minprice = maxprice + 1;
                    growth = 10 + (5*index);
                    maxprice = Math.ceil((Number(maxItemPrice) * ((prevGrowth + growth)  / 100)) / 100) * 100;
                    // console.log("🚀 ~ file: index.tsx ~ line 188 ~ priceCheckbox.map ~ prevGrowth + growth", index, prevGrowth + growth)
                    prevGrowth = prevGrowth + growth;
                    const countHotelPrice = _.filter(searchModel, (o) => { return (o.price > minprice && o.price < maxprice) ?  o : null; }).length;
                    const priceRange:IPriceRange = { label: 'THB '+ numeral(minprice).format('0,0') + ' - ' +  numeral(maxprice).format('0,0') , value: [minprice, maxprice], isChecked:item.isChecked, count: countHotelPrice};
                    priceRangeArr.push(priceRange);
                });
                uiStore.setPriceCheckbox(priceRangeArr); 
                setMaxPriceProp(maxItemPrice);
                if(priceSlider.start == 0 && priceSlider.end == 0) {
                    uiStore.setPriceSlider({start: 1, end: maxItemPrice});
                }
            }
        }
    }, [dataComplete, maxItemPrice]);
   
    useEffect(() => {
        if(onReset){
            resetCheckbox();
            resetSliderTextInput();
        }
    }, [onReset]);

    return (
        <>
        {!dataComplete && <styles.MyFormControlStyle component="fieldset">
            <List>
                <Loading />
            </List>
        </styles.MyFormControlStyle>}
        {dataComplete &&
        <>
        <styles.MyFormControlStyle component="fieldset">
            <List>
            {
                priceCheckbox.map((item, i) => { 
                    return (<PriceRangeListItem key={i} label={item.label} value={item.value} isChecked={item.isChecked} count={item.count} onCheckboxHandleChange={checkboxHandleChange}/>) 
                })
            }
            </List>
        </styles.MyFormControlStyle>
        <styles.MyFormControlStyle component="fieldset">
            <styles.MySliderContainer>
                <styles.PrettoSlider
                    step={100}
                    min={MIN_PRICE}
                    max={maxPriceProp}
                    value={[priceSlider?.start, priceSlider?.end]}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    onChange={handleChange}
                    onChangeCommitted={handleChangeCommitted}
                />
            </styles.MySliderContainer>
        </styles.MyFormControlStyle>
        <styles.MyFormControlStyle component="fieldset">

        <styles.MyGridContainerStyle container alignItems="center" spacing={2}>
            <Grid item xs={5}>
                <styles.MyTextField 
                id="inputStartPrice"
                variant="outlined"
                value={numeral(priceSlider?.start).format('0,0')}
                // onChange={handleStartPriceChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">฿</InputAdornment>,
                }}/>
            </Grid>
            <Grid item xs={2}>
                <Typography  align="center">-</Typography>
            </Grid>
            <Grid item xs={5}>
                <styles.MyTextField 
                id="inputEndPrice"
                variant="outlined"
                value={numeral(priceSlider?.end).format('0,0')}
                // onChange={handleEndPriceChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">฿</InputAdornment>,
                }} />
            </Grid>
        </styles.MyGridContainerStyle>
        </styles.MyFormControlStyle>
        </>
    }
    </>
    );
}));

export default index;