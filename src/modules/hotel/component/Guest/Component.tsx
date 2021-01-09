import React from 'react';
import { ClickAwayListener } from '@material-ui/core';
import Input from './Input'
import Content from './Content'
import Iprops from './interface';

const Component = (props: Iprops) => {

    const { 
        handleClickAway,
        Theme,
        open,
    } = props;

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{...Theme.container}}>
                <Input {...props} />
                {open && <Content {...props} />}
            </div>
       </ClickAwayListener>
    )
}

export default Component;