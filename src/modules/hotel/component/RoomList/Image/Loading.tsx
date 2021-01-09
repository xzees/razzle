import React from 'react';
import {
  BoxImg,
  ImgBox,
  ImgCard,
} from './Style';
import { useMediaQuery } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const Loading = (props: any) => {
  const { check, href, title, isMobile, coverImage } = props;

  const isLarge = props.isLarge && useMediaQuery('(max-width: 959px)');
  const borderRadius = isLarge ? '0px 6px 0px 0px' : '0px 0px 0px 6px';

  if (isMobile) {
    return (
      <>
        <a href={href} target={'_blank'} title={title}>
          <Skeleton variant={'rect'} width={'100%'} height={'100%'} />
        </a>
      </>
    );
  }

  return (
    <BoxImg>
      <ImgBox>
        <ImgCard>
          <Skeleton variant={'rect'} width={'100%'} height={'100%'} />
        </ImgCard>
      </ImgBox>
    </BoxImg>
  );
};

export default Loading;
