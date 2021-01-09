import React from 'react';
import _ from 'lodash';
import LayoutSwitcher from 'common/components/LayoutSwitcher';
import Desktop from './Layout/Desktop';
import Mobile from './Layout/Mobile';
import HotelListInterface from 'modules/hotel/pages/hotel_list/HotelListInterface';

const Content = (props: HotelListInterface) => {
    return (
        <>
            <LayoutSwitcher 
                desktopView={<Desktop {...props} />}
                mobileView={<Mobile {...props} />}
            />
        </>
    );
};

export default Content;