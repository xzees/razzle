import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { ClearRounded } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const ClearRoundedIcon = withStyles({
  root: {
    color: ColorManager.default.white,
    fontSize: FontManager.default.ultraLarge,
  },
})(ClearRounded);

export const OpenModalWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalContentWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-top: -10px;
`;

export const GalleryWrapper = styled.div`
  background-color: ${ColorManager.default.black};
  padding: 8px;
`;

export const SliderWrapper = styled.div`
  padding: 8px 50px;
`;

export const ThumbnailWrapper = styled.div`
  padding: 8px;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${ColorManager.default.transparent};
`;
