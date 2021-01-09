import React from 'react';
import {
    BoxReview,
    SpanRate
} from './Style';
import _ from 'lodash';

import { 
    KanokOrange,
} from 'modules/hotel/component/Icon';

const index = (props: any) => {
    return (
        <>
            <BoxReview>
                <KanokOrange />
                <SpanRate>7.9 </SpanRate> 
                (2909)
            </BoxReview>
        </>
    );
};

export default index;