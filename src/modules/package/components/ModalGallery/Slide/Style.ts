import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const PrevArrow = withStyles({
  root: {
    fontSize: FontManager.default.ultraLarge,
    color: `${ColorManager.default.white}!important`,
  },
})(ArrowBackIosRounded);

export const NextArrow = withStyles({
  root: {
    fontSize: FontManager.default.ultraLarge,
    color: `${ColorManager.default.white}!important`,
  },
})(ArrowForwardIosRounded);

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  image-rendering: auto;
  max-height: 400px;
`;
