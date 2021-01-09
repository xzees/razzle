import React from 'react'
import { 
    Style
} from '../Style';
import { Box } from '@material-ui/core';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

const CircleRemove = (props: any) => {
    const click = props.value > props.minusChk ? props.CircleRemoveClick : ()=>{}
    return (
        <Box onClick={click}  m={0}>
            <Box m={0} {...Style.BoxTextIcon}>
            {props.value <= props.minusChk && <RemoveCircleOutlineRoundedIcon  {...Style.IconMinus} />}
            {props.value > props.minusChk && <RemoveCircleOutlineRoundedIcon  {...Style.IconMinusEnable} />}
            </Box>
        </Box>
    )
}
export default CircleRemove;