import React from 'react'
import { 
    Style
} from '../Style';
import { Box } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const CircleAdd = (props: any) => {
    const click = props.value < props.minusChk ? props.CircleRemoveClick : ()=>{}
    return (
        <Box onClick={click} m={0}>
            <Box m={0} {...Style.BoxTextIcon}>
            {props.value >= props.minusChk && <AddCircleOutlineRoundedIcon  {...Style.IconMinus} />}
            {props.value < props.minusChk && <AddCircleOutlineRoundedIcon  {...Style.IconMinusEnable} />}
            </Box>
        </Box>
    )
}

export default CircleAdd;