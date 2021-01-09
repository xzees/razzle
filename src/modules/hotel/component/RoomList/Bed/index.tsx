import React from 'react';
import _ from 'lodash';
import {
    BoxReview,
    RoomRoundedIcons
} from './Style'
import { RenderKingBedIcon, RenderSingleBedIcon } from 'modules/hotel/component/Icon';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import { display } from 'styled-system';
import i18n from 'utilities/I18n';

const Bed = (props: any) => {
    return (
        <>
            <RenderKingBedIcon />
            <RenderSingleBedIcon />
        </>
    )
};

const index = (props: any) => {
    const { isMobile } = props;
    return (
        <>
            <div style={ (isMobile) ? {display: 'flex', justifyContent: 'center'} : {} }>
                <Bed />
            </div>
            <div style={{
                width: '100px',
                margin: (isMobile) ? 'auto' : '',
                marginTop: (isMobile) ? '3px' : '7px',
                fontSize: FontManager.default.TEXT_20,
                lineHeight: '0.9',
                color: ColorManager.default.thirdColor,
            }}>
                {i18n.t('hotel.components.roomlist.bed.lblbeddesc')}
            </div>
        </>
    )
}

export default index;