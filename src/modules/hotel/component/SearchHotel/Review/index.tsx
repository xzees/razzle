import React from 'react';
import {
    BoxReview,
    SpanRate
} from './Style';
import _ from 'lodash';

import { 
    KanokOrange,
} from 'modules/hotel/component/Icon'
import FontManager from 'modules/hotel/Manager/FontManager';

const index = (props: any) => {
    if(props.isMobile) {
        return (
            <>
                <BoxReview fontSize={FontManager.default.TEXT_TINY_18}>
                    <KanokOrange />
                    <SpanRate>7.9 </SpanRate> 
                    (2909)
                </BoxReview>
            </>
        )
    }

    return (
        <>
            <BoxReview>
                <KanokOrange />
                <SpanRate>7.9 </SpanRate> 
                (2909)
            </BoxReview>
        </>
    )
};

export default index;