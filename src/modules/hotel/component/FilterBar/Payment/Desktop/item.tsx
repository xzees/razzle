import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';

const useStyles = makeStyles({
    myFormControlStyle: {
        width: '100%',
    },
    myListLabelStyle:{
        '&.MuiFormControlLabel-root':{
            fontSize: FontManager.default.text,
            height: '10px',
            marginRight: 0,
            "& > .MuiTypography-body1": {
                fontSize: 19,    
            },
            '& .MuiListItem-gutters': {
                paddingRight: 0
            },
        },
    },
    myCountStyle:{
        fontSize: FontManager.default.text,
        color: ColorManager.default.fifthColor,
    },
    myCheckboxStyle: {
        '&.MuiIconButton-colorSecondary.MuiIconButton-root': {
            color: ColorManager.default.fifthColor,
            padding: 9,
            '&.Mui-checked': {
            color: ColorManager.default.greenColor,
            },
        },
    }
  });

  
const index = (props: any) => {
    const { 
        label,
        name, 
        isChecked,
        count,
        paymentOptionChange,
        index,
    } = props;
    const myclasses = useStyles();

    const [checked,setChecked] = useState(isChecked);
    
    const onCheckboxChange = (status: boolean) => {
        setChecked(status);
        paymentOptionChange(name, status);
    }

    return (
            <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={checked}
                        onChange={() => {onCheckboxChange(!checked)}}
                        name={name}
                        className={myclasses.myCheckboxStyle}
                    />
                    }
                    label={label}
                    className={myclasses.myListLabelStyle}
                />
                <ListItemSecondaryAction
                    className={myclasses.myCountStyle}>
                    {count}
                </ListItemSecondaryAction>
            </ListItem>
    );
};

export default index;