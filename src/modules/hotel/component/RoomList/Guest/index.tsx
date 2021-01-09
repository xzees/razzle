import React from 'react';
import _ from 'lodash';
import { RenderPerson } from '../../Icon';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import { RenderPlus } from 'modules/hotel/component/Icon';
import { flex } from 'styled-system';
import i18n from 'utilities/I18n';

const Guest = (props: any) => {

    return (
        <RenderPerson  />
    )
}

function generateRandomInteger(min: number, max: number) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}
  
const index = (props: any) => {
    const {isMobile} = props;
    const array = 5
    
    return (
        <>
            <div style={{
                justifyContent: (isMobile) ? 'center' : 'left',
                display: 'flex',
            }}>
                {array <= 3 && [...new Array(array)].map(()=> <Guest />)}
                {array > 3 && <>
                    {[...new Array(3)].map(()=> <Guest /> )}
                    <RenderPlus />
                </>}
            </div>
            <div style={{
                margin: (isMobile) ? 'auto' : '',
                marginTop: '6px',
                fontSize: FontManager.default.TEXT_20,
                lineHeight: '0.9',
                color: ColorManager.default.thirdColor,
                textAlign: (isMobile) ? 'center' : 'left',
            }}>
                {i18n.t('hotel.components.roomlist.guest.maxguest')} {array} {i18n.t('hotel.search.adult.classifier')}
            </div>
        </>
    )
}

export default index;