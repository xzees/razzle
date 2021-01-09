
import React from 'react';
import ColorManager from 'common/Manager/ColorManager';

const styleMobile = {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 15,
    borderBottom: '1px solid ' + ColorManager.default.greyColor
};

const Container = (props: any) => {
    return (
    <div style={{...styleMobile, position: 'relative', width: '100%'}} {...props}>
        {props.children}
    </div>);
};

export default Container;