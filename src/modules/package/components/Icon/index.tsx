import React, { CSSProperties, FunctionComponent } from 'react';
import ImageManager from 'common/Manager/ImageManager';
import { AppImageIcon } from './Style';

type TagIconProps = {
  width?: string | number;
  height?: string | number;
};

type KanokIconProps = {
  style?: CSSProperties;
};

type VerifiedIconProps = {};

type CoinIconProps = {};

export const TagIcon: FunctionComponent<TagIconProps> = ({ width, height }) => {
  return (
    <AppImageIcon
      src={`${
        ImageManager.default.images.hotel.icon.tag
      }?v=${new Date().getTime()}`}
      width={width}
      height={height}
    />
  );
};

export const KanokIcon: FunctionComponent<KanokIconProps> = ({ style }) => {
  return (
    <AppImageIcon
      src={`${
        ImageManager.default.images.hotel.icon.kanokOrange
      }?v=${new Date().getTime()}`}
      {...(style ? { style } : {})}
    />
  );
};

export const VerifiedIcon: FunctionComponent<VerifiedIconProps> = () => {
  return (
    <AppImageIcon
      src={`${
        ImageManager.default.images.hotel.icon.verified
      }?v=${new Date().getTime()}`}
    />
  );
};

export const CoinIcon: FunctionComponent<CoinIconProps> = () => {
  return (
    <AppImageIcon
      src={`${
        ImageManager.default.images.hotel.icon.coin
      }?v=${new Date().getTime()}`}
    />
  );
};
