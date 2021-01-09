import React, { useState, useEffect } from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, Grid } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import i18n from 'utilities/I18n';
import { shadows } from '@material-ui/system';
import {
    styleFormControlLabel,
    styleRadioGroup,
    StyleToggleButton
} from './Style';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores'
import _ from 'lodash'

const useStyles = makeStyles({
    mySortingContainerStyle: {
        padding: '0rem 1rem',
    },
    myToggleGroupStyle: {
        background: ColorManager.default.white,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 3px 0px',
    },
    myToggleButtonStyle: {
        "&.MuiToggleButton-root":{
        width: '100%',
        color: ColorManager.default.fourthColor,
        fontSize: FontManager.default.TEXT_MEDIUM_22,
        padding: '3px',
        backgroundColor: ColorManager.default.white,
        border: 'none',
        "&:hover": {
            backgroundColor: ColorManager.default.white,
            color: ColorManager.default.secondaryColor,
          },
        "&.Mui-selected": {
            backgroundColor: ColorManager.default.white,
            color: ColorManager.default.secondaryColor,
            "&:hover": {
                backgroundColor: ColorManager.default.white,
                color: ColorManager.default.secondaryColor,
              },
          },
        },
    },
    myFormControlStyle: {
        "&.MuiFormControl-root":{
            width: '100%',
            marginBottom: '0',
            marginTop: '28px',
        },
    },
    myDividerStyle: {
        width: 3,
        height: '30px',
        margin: '10px 0',        
    },
    myPopupMenuStyle: {
        '& .MuiPopover-paper': {
            minWidth: 165,
            marginTop: 50,
        },
        '& .MuiListItem-root': {
            fontSize: FontManager.default.text,
            color: ColorManager.default.fourthColor,
            '& .MuiListItem-button:hover':{
                color: ColorManager.default.primaryColor,
            }
        }
    }
  });

interface IOption {
    title: string;
    val: string;
}

interface Iprops {
    stores?: RootStore;
}

const index = inject('stores')(
    observer((props: any) => {
        
    const uiStore = props.stores!.HotelRootStore.ListStore;

    const myclasses = useStyles();
    
    // const {sortingFn} = props;
    // const { 
    //     sortingFn
    // } = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);

    const handleClickE1 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClickE2 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorE2(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setAnchorE2(null);
    };

    const [sortingData, setSortingData] = React.useState(uiStore.sort.name);

    const handleSorting = (event: React.MouseEvent<HTMLElement>, newSortingData: string | null) => {
        if (newSortingData !== null) {
            setSortingData(newSortingData);
        }
    };
    
    const [priceDisplay, setPriceDisplay] = React.useState<string>(i18n.t('hotel.desktop.search.filter.pricing.title')); 
    const [priceOptions, setPriceOptions]  = React.useState<IOption[]>([{title: i18n.t('hotel.components.filterbar.price.lblchoose'), val: ''},
    {title: i18n.t('hotel.components.sortingbar.priceasc'), val: 'asc'},
    {title: i18n.t('hotel.components.sortingbar.pricedesc'), val: 'desc'}]);
    
    const [classDisplay, setClassDisplay] = React.useState<string>(i18n.t('hotel.desktop.search.filter.rating.title')); 
    const [classOptions, setClassOptions] = React.useState<IOption[]>([{title: i18n.t('hotel.components.filterbar.price.lblchoose'), val: ''},
    {title: i18n.t('hotel.components.sortingbar.stardesc'), val: 'desc'},
    {title: i18n.t('hotel.components.sortingbar.starasc'), val: 'asc'}]);
    const [selectedPriceOptionIndex, setSelectedPriceOptionIndex] = React.useState(() => {
            if(uiStore.sort.name == 'price'){
                return _.findIndex(priceOptions, function(p) { return p.val == uiStore.sort.ordering; });
            }else {
                return 0;
            }
        }
    );
    const handlePriceOptionClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedPriceOptionIndex(index);
        setAnchorEl(null);
    };
    const [selectedClassOptionIndex, setSelectedClassOptionIndex] = React.useState(() => {
        if(uiStore.sort.name == 'class'){
            return _.findIndex(classOptions, function(c) { return c.val == uiStore.sort.ordering; });
        }else {
            return 0;
        }
    });
    const handleClassOptionClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedClassOptionIndex(index);
        setAnchorE2(null);
    };

    useEffect(() => {
            if(!anchorEl && !anchorE2){
                let orderData:string = 'asc'
                setPriceDisplay(i18n.t('hotel.desktop.search.filter.pricing.title'));
                setClassDisplay(i18n.t('hotel.desktop.search.filter.rating.title'));
                if (sortingData == 'price'){
                    orderData = priceOptions[selectedPriceOptionIndex].val;
                    setPriceDisplay(priceOptions[selectedPriceOptionIndex].title);
                    // setClassDisplay(i18n.t('hotel.desktop.search.filter.rating.title'));
                }else if (sortingData == 'class'){
                    orderData = classOptions[selectedClassOptionIndex].val;
                    setClassDisplay(classOptions[selectedClassOptionIndex].title);
                    // setPriceDisplay(i18n.t('hotel.desktop.search.filter.pricing.title'));
                }else{
                }
                uiStore.setSort({name: sortingData, ordering: orderData});
            }
    }, [sortingData, selectedPriceOptionIndex, selectedClassOptionIndex]);

    return (
        <FormControl component="fieldset" className={myclasses.myFormControlStyle}>
            <ToggleButtonGroup value={sortingData} exclusive  onChange={handleSorting} className={myclasses.myToggleGroupStyle}>
                <ToggleButton
                    value="advice"
                    className={myclasses.myToggleButtonStyle}
                    >
                    {i18n.t('hotel.search.filter.price.order.recommend')} 
                </ToggleButton>
                <Divider orientation="vertical" className={myclasses.myDividerStyle} flexItem />
                <ToggleButton
                    aria-controls="menu-price" aria-haspopup="true" onClick={handleClickE1}
                    value="price"
                    className={myclasses.myToggleButtonStyle}
                    >
                        {priceDisplay}
                    <ArrowDropDownIcon />
                </ToggleButton>
                <Menu
                    id="menu-price"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    className={myclasses.myPopupMenuStyle}
                    >
                    {priceOptions.map((option, index) => (
                            <MenuItem
                                key={index}
                                disabled={index === 0}
                                selected={index === selectedPriceOptionIndex}
                                onClick={(event) => {handlePriceOptionClick(event, index)}}
                            >
                                {option.title}
                            </MenuItem>
                            ))}
                </Menu>
                <Divider orientation="vertical" className={myclasses.myDividerStyle} flexItem />
                <ToggleButton
                    aria-controls="menu-rating" aria-haspopup="true" onClick={handleClickE2}
                    value="class"
                    className={myclasses.myToggleButtonStyle}
                    >
                    {classDisplay}  
                    <ArrowDropDownIcon />
                </ToggleButton>
                <Menu
                    id="menu-rating"
                    anchorEl={anchorE2}
                    keepMounted
                    open={Boolean(anchorE2)}
                    onClose={handleClose}
                    className={myclasses.myPopupMenuStyle}
                    >
                    {classOptions.map((option, index) => (
                        <MenuItem
                            key={index}
                            disabled={index === 0}
                            selected={index === selectedClassOptionIndex}
                            onClick={(event) => {handleClassOptionClick(event, index)}}
                        >
                            {option.title}
                        </MenuItem>
                        ))}
                </Menu>
                    <Divider orientation="vertical" className={myclasses.myDividerStyle} flexItem />
                <ToggleButton
                    value="scroll"
                    className={myclasses.myToggleButtonStyle}
                    >
                    {i18n.t('hotel.desktop.search.filter.order.score')}  
                </ToggleButton>
            </ToggleButtonGroup>
        </FormControl>
    );
}));

export default index;