import React from 'react';
import { Box } from '@material-ui/core';
import Heading from 'common/src/components/Heading';
import _ from 'lodash';
import styled from 'styled-components';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';

export const TitleDesktop = {
    color: ColorManager.default.thirdColor ,
    fontFamily: FontManager.default.secondaryFont,
    fontSize: [ FontManager.default.LARGE_28 , FontManager.default.LARGE_28, FontManager.default.LARGE_28, '25.5px', FontManager.default.LARGE_28],
    fontWeight: 'normal',
    lineHeight: 0.9,
    mb: '0px',
}

export const TitleMobile = {
    color: ColorManager.default.thirdColor ,
    fontFamily: FontManager.default.secondaryFont,
    fontSize: [ FontManager.default.TEXT_MEDIUM_22 ],
    fontWeight: 'normal',
    lineHeight: 0.9,
    mb: '0px',
}

export const BoxTitle = styled(Box)`
    &.MuiBox-root{
        display: block;
        display: -webkit-box;
        max-width: inherit;
        max-height: 60px;
        line-height: 1;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

interface ITitle {
    propName: string
}

const index = (props: ITitle) => {
    
    return (
        <BoxTitle style={{
            alignSelf: 'center',
        }}>
            <Heading content={props.propName} {...TitleDesktop} />
        </BoxTitle>
    )
}

export default index