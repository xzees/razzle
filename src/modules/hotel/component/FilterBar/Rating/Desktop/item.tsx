import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import StarIcon from '@material-ui/icons/Star';
import styled from "styled-components";
import _ from 'lodash';


const styles = {
    MyListLabelStyle: styled<any>(FormControlLabel)`
        font-size: ${FontManager.default.text};
        height: 10px;
        .MuiTypography-body1 {
            font-size: ${FontManager.default.text};
            margin-top: 10px;
        }
    `, 
    MyCountStyle: styled<any>(ListItemSecondaryAction)`
        font-size: ${FontManager.default.text};
        color: ${ColorManager.default.fourthColor};
    `, 
    MyCheckboxStyle: styled<any>(Checkbox)`
        &.MuiCheckbox-root {
            color: ${ColorManager.default.fifthColor};
            padding: 12px;
            width: auto;
                &.Mui-checked {
                    color: ${ColorManager.default.yellowColor};
                    width: auto;
            },
        },
    `, 
    MyIconStyle: styled<any>(StarIcon)`
        font-size: 1.3rem;
        margin-left: 1px;
        color: ${ColorManager.default.yellowColor};

    `, 
}

const index = (props: any) => {
    const {
        inx,
        itemData,
        ratingItemChange,
        isChecked
    } = props;

    //const [checked,setChecked] = useState(itemData.isChecked);
    
    const onCheckboxChange = () => {
        ratingItemChange(itemData);
    }


    const yellowStar = () => {
        return (
            <span>
                {[...Array(itemData.star)].map((x, i) =>
                    <styles.MyIconStyle key={i}></styles.MyIconStyle>
                )}
            </span>
          );
    }

    
    return (
            <ListItem>
                <styles.MyListLabelStyle
                    control={
                    <styles.MyCheckboxStyle
                        checked={isChecked}
                        onChange={() => onCheckboxChange()}
                        name={itemData.label}
                    />
                    }
                    label={yellowStar()}
                />
                <styles.MyCountStyle>
                    {itemData.count}
                </styles.MyCountStyle>
            </ListItem>
    );
};

export default index;