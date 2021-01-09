import React from 'react';
import Heading from 'common/src/components/Heading';
import _ from 'lodash';
import {
    BoxTitle,
    TitleDesktop,
    TitleMobile,
    AlignCenter
} from './Style';
import TitleInterface from 'modules/hotel/component/SearchHotel/Title/TitleInterface';

const index = (props: TitleInterface) => {
    
    const TitleProp = props.isMobile ? TitleMobile : TitleDesktop;
    
    return (
        <BoxTitle style={AlignCenter}>
            <a onClick={props.LinkRoomlist} target="_blank"> 
                <Heading content={props.propName} {...TitleProp} />
            </a>
        </BoxTitle>
    );
};

export default index;