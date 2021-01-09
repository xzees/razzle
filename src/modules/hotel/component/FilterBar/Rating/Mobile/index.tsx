import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import { StarBorder } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { RatingDesktop, FormControlLabels } from './Style'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
interface IformControlLabelRating {
    checked: any;
    handleChange: any;
    value: number;
    name: string;
}
interface IRating {
    label: string; 
    star: number;
    count: number;
}

const FormControlLabelRating = (props: IformControlLabelRating) => {

    const classes = FormControlLabels();

    const { 
        checked,
        handleChange,
        value,
        name
    } = props;

    const propForCheckbox: any = {
        style: {
            color: ColorManager.default.primaryColor,
        },
        ...checked,
        onChange: handleChange, 
    };
    
    const propForRating: any = {
        max: 5,
        emptyIcon: <StarBorder fontSize="inherit" />,
        readOnly: true,
        ...{value}
    };

    return (
        <FormControlLabel
            name={name}
            className={classes.formControlLabel}
            control={<Checkbox {...propForCheckbox} />}
            label={<RatingDesktop {...propForRating} />}
        />
    );
};

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
        padding: 0,
        "&.Mui-selected": {
            backgroundColor: ColorManager.default.yellowColor,
            borderColor: ColorManager.default.yellowColor,
            color: ColorManager.default.white,
            "&:hover": {
                backgroundColor: ColorManager.default.yellowColor,
                borderColor: ColorManager.default.yellowColor,
              },
          },
    },
    myFormControlStyle: {
        width: '100%',
    }, 
    myIconStyle: {
        fontSize: '1.3rem',
        marginLeft: '1px',
    }   
  });

  interface Iprops {
    stores?: RootStore;
    onReset: boolean;
}

const index = inject('stores')(
    observer((props: Iprops) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const starFilterSelected = uiStore.filter.star;
    const { onReset } = props;
    const myclasses = useStyles();
    
    const [ratingData, setRatingData] = useState<IRating[]>([]);

    const [countHotelClass, setCountHotelClass] = useState<any>();

    const onRatingItemChange = (ratingItem: IRating) => {
        if(_.includes(starFilterSelected, ratingItem.star)){
            const filterStar = _.filter(starFilterSelected, (star) => { return ratingItem.star != star; });
            uiStore.setFilter({star: [...filterStar]});
        }else{
            uiStore.setFilter({star: [...starFilterSelected, ratingItem.star]});
        }

    }   

    useEffect(() => {
        if(onReset){
            uiStore.setFilter({star: []});
        }
    }, [onReset]);

    useEffect(() => {
        if(uiStore.dataComplete){
            if(!(_.isEqual(countHotelClass, uiStore.returnCountHotelClass))){
                setCountHotelClass(uiStore.returnCountHotelClass);
                let tempDataArr:IRating[] = [];
                for (let i=5;i>=2;i--){
                    try {
                        if(uiStore.returnCountHotelClass[i] > 0){
                            tempDataArr.push({label:i.toString(),star:i,count:uiStore.returnCountHotelClass[i]});
                        }
                    ​​} catch (error) {
                        ​​  console.log("Error. : " + error);
                    ​​}
                }
                setRatingData(tempDataArr);
            }
        }
    },[uiStore.dataComplete, uiStore.returnCountHotelClass]);

    return (
        <FormControl component="fieldset" className={myclasses.myFormControlStyle}>
            <Grid container spacing={4} direction="row-reverse"
                    className={myclasses.mySortingContainerStyle}>
                    {
                        ratingData.map((itemData: IRating, i: number) => { 
                            return (
                                <Grid item xs>
                                    <ToggleButton
                                        value="check"
                                        // selected={itemData.isChecked}
                                        selected={_.includes(starFilterSelected, itemData.star)}
                                        onChange={() => onRatingItemChange(itemData)}
                                        className={myclasses.myToggleButtonStyle}
                                        >
                                        {itemData.star} <StarIcon className={myclasses.myIconStyle}></StarIcon>
                                    </ToggleButton>
                                </Grid>
                                );
                        })
                    }
            </Grid>
      </FormControl>
    );
}));

export default index;