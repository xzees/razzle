import React from 'react';
import _ from 'lodash';
import {
    BoxReview,
    RoomRoundedIcons
} from 'modules/hotel/component/SearchHotel/Location/Style';
import FontManager from 'modules/hotel/Manager/FontManager';
import LocationInterface from 'modules/hotel/component/SearchHotel/Location/LocationInterface';

const index = (props: LocationInterface) => {

    if (props.isMobile) {
        return (
            <>
                <BoxReview
                    fontSize={FontManager.default.TEXT_TINY_18}
                >
                    <RoomRoundedIcons />{props.hotelListModel.cityName || ''}
                </BoxReview>
            </>
        );
    }

    return (
        <>
            <BoxReview>
                <RoomRoundedIcons />{props.hotelListModel.cityName || ''}
            </BoxReview>
        </>
    );
};

export default index;