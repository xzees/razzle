import styled from 'styled-components';
import FontManager from 'modules/hotel/Manager/FontManager';
import { Box } from '@material-ui/core';

export const TitleDesktop = {
    color: '#3f256b' ,
    fontFamily: FontManager.default.secondaryFont,
    fontSize: [ 
        FontManager.default.LARGE_28, 
        FontManager.default.LARGE_28, 
        FontManager.default.LARGE_28, 
        '25.5px', 
        FontManager.default.LARGE_28],
    fontWeight: 'normal',
    lineHeight: 0.9,
    mb: '0px',
};

export const TitleMobile = {
    color: '#3f256b' ,
    fontFamily: FontManager.default.secondaryFont,
    fontSize: [ FontManager.default.TEXT_MEDIUM_22 ],
    fontWeight: 'normal',
    lineHeight: 0.9,
    mb: '0px',
};

export const BoxTitle = styled(Box)`
  display: block;
  display: -webkit-box;
  max-height: 60px;
  line-height: 1;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const AlignCenter = {
    alignSelf: 'center',
};