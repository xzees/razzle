import React from 'react';
import _ from 'lodash';
import {
    BoxReview,
    RoomRoundedIcons
} from './Style';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import i18n from 'utilities/I18n';

const index = (props: any) => {

    if (props.isMobile) {
        return (
            <>
                <BoxReview
                    fontSize={FontManager.default.TEXT_20}>
                    <RoomRoundedIcons /> asdasdasdasd
                </BoxReview>
            </>
        );
    }

    return (
        <>
            <BoxReview
                fontSize={FontManager.default.TEXT_20}
                color={ColorManager.default.black}>
                <RoomRoundedIcons />{i18n.t('hotel.components.roomlist.textimg.lblrricon')}
            </BoxReview>
        </>
    );
};

export default index;