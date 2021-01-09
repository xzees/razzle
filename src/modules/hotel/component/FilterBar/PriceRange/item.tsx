import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import styled from "styled-components";

const styles = {
    MyListLabelStyle: styled<any>(FormControlLabel)`
        font-size: ${FontManager.default.text};
        height: 10px;
        margin-right: 0;
        & > .MuiTypography-body1 {
            font-size: ${FontManager.default.text};
        },
        & .MuiListItem-gutters {
            padding-right: 0;
        },
    `,
    MyCountStyle: styled<any>(ListItemSecondaryAction)`
        font-size: ${FontManager.default.text};
        color: ${ColorManager.default.fourthColor};
    `,
    MyCheckboxStyle: styled<any>(Checkbox)`
        &.MuiIconButton-colorSecondary.MuiIconButton-root {
            color: ${ColorManager.default.fifthColor};
            padding: 9px;
            width: auto;
            &.Mui-checked {
            color: ${ColorManager.default.greenColor};
                width: auto;
            },
        },
    `,
}
  
export const index = (props: any) => {
    const { 
        label,
        value,
        isChecked,
        count,
        onCheckboxHandleChange
    } = props;

    const [checked,setChecked] = useState(isChecked);

    return (
            <ListItem>
                <styles.MyListLabelStyle
                    control={
                    <styles.MyCheckboxStyle
                        checked={isChecked}
                        onChange={onCheckboxHandleChange}
                        value={value}
                    />
                    }
                    label={label}
                />
                <styles.MyCountStyle>
                    {count}
                </styles.MyCountStyle>
            </ListItem>
    );
};

export const PriceRangeListItem = React.memo(index)