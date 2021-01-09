import styled from 'styled-components';
import { AppImage } from 'common/components';
import ColorManager from 'common/Manager/ColorManager';

interface ScreenProps {
  isMobile: boolean;
  isLarge?: boolean;
}

export const ImageWrapper = styled.div<ScreenProps>`
  width: 100%;
  ${(props: ScreenProps) =>
    !props.isMobile && props.isLarge ? '' : 'height: 100%;'}
  background-color: ${ColorManager.default.greyColor};
  border-radius: ${(props: ScreenProps) =>
    !props.isMobile && props.isLarge ? '4px 4px 0px 0px' : '4px 0px 0px 4px'};
  overflow: hidden;
`;

export const ImgCard = styled.div<ScreenProps>`
  display: block;
  width: 100%;
  ${(props: ScreenProps) =>
    !props.isMobile && props.isLarge ? '' : 'height: 100%;'}
  position: relative;
  transition: transform 0.25s;
`;

export const Img = styled(AppImage)<ScreenProps>`
  display: block;
  width: 100%;
  ${(props: ScreenProps) =>
    !props.isMobile && props.isLarge ? '' : 'height: 100%;'}
  left: 0;
  object-fit: cover;
  position: relative;
  top: 0;
`;
