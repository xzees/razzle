import styled from "styled-components";
import ColorManager from "common/Manager/ColorManager";
import React from "react";
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import { base, themed } from 'common/src/components/base'

export const RootContainer = styled("div")`
  background-color: ${ColorManager.default.appBackground};
  /* overflow: scroll; */
  /* -webkit-overflow-scrolling: touch; */
  /* padding-bottom: 70px; */
  z-index: 4000;

  /* - Navigation Bar's height 56px;*/
  min-height: calc(100vh - 56px);

  /* overflow: visible; */
  /* padding: 1rem 4rem 1rem 4rem; */
`;

type FlexProps = {
  centerY?: boolean;
  centerX?: boolean;
  touchable?: boolean;
  autoAdjust?: boolean;
  adjustedHorizontalPosition?: "left" | "center";
};

export const FlexRow = styled("div")`
  display: flex;
  transition: 0.35s;
  flex-direction: row;
  justify-content: ${(props: FlexProps) =>
    props.centerX ? "center" : "initial"};
  align-items: ${(props) => (props.centerY ? "center" : "initial")};
  cursor: ${(props) => (props.touchable ? "pointer !important" : "initial")};
  * {
    cursor: ${(props) => (props.touchable ? "pointer !important" : "initial")};
  }
  @media (max-width: 768px) {
    align-items: ${(props) =>
      props.autoAdjust
        ? "normal"
        : props.centerY
        ? "center"
        : "initial"} !important;
    flex-direction: ${(props) => (props.autoAdjust ? "column" : "row")};
  }
`;

export const FlexColumn = styled("div")`
  display: flex;
  transition: 0.35s;
  flex-direction: column;
  justify-content: ${(props: FlexProps) =>
    props.centerY ? "center" : "initial"};
  align-items: ${(props) => (props.centerX ? "center" : "initial")};
  cursor: ${(props) => (props.touchable ? "pointer !important" : "initial")};
  * {
    cursor: ${(props) => (props.touchable ? "pointer !important" : "initial")};
  }
`;

export const Touchable = styled.div`
  background-color: transparent;
  border: 0px;
  display: block;
  cursor: pointer !important;
  padding: 0;
  margin: 0;
  * {
    cursor: pointer !important;
  }
`;

export const Separator = styled.div`
  height: 1px;
  border-top: 1px solid ${ColorManager.default.lightGrey};
`;

type SeparatorProps = {
  height?: number | string;
  width?: number | string;
};

export const HorizontalSeparator = styled("div")`
  height: ${(props: SeparatorProps) => props.height || "1px"};
  width: ${(props) => props.width || "16px"};
  background-color: ${ColorManager.default.lightGrey};
`;

export const VerticalSeparator = styled("div")`
  height: ${(props: SeparatorProps) => props.height || "16px"};
  width: ${(props) => props.width || "1px"};
  background-color: ${ColorManager.default.lightGrey};
`;

export const Scrollable = styled(FlexColumn)`
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;

const ImageWrapper = styled(LazyLoadImage)(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    margin: 'auto',
  },
  base,
  themed('Image')
)

const Image = styled(LazyLoadImage)`
  object-fit: contain;
  image-rendering: pixelated;
`

export const AppImage = (props: LazyLoadImageProps) => {
  return <Image alt='none' {...props} />
}

export const AppImageResponsive = (props: LazyLoadImageProps) => {
  return <ImageWrapper  alt='none' {...props} />
}

export const LinearGradientSeparator = styled.div`
  width: 70%;
  height: 2px;
  background-image: linear-gradient(
    to right,
    ${ColorManager.default.separator},
    ${ColorManager.default.white}
  );
`;

export const FadeBottomInContainer = styled.div`
  @keyframes fade-in-from-bottom {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  border-radius: 0px;
  transform: translateY(100%);
  opacity: 0;
  position: fixed;
  display: none;
  z-index: 10000;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: ${ColorManager.default.appColor2}; */
  &.visible {
    display: initial;
    animation: fade-in-from-bottom 0.35s ease-in-out forwards;
  }
`;
