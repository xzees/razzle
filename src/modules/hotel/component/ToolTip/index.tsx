import React from 'react';
import Desktop from 'modules/hotel/component/ToolTip/Layout/Desktop';
import Mobile from 'modules/hotel/component/ToolTip/Layout/Mobile';
import {
    DivOutSide
} from 'modules/hotel/component/ToolTip/Style';
interface TooltipInterface {
    arrowColor?: string;
    isMobile: boolean;
    maxHeight?: string;
    [key: string]: any;
}

const index = (props: TooltipInterface) => {
    return (
        <DivOutSide>
            {props.isMobile && <Mobile {...props} />}
            {!props.isMobile && <Desktop {...props} />}
        </DivOutSide>
    );
};

export default index;