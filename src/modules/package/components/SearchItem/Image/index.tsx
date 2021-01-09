import React, { FunctionComponent } from 'react';
import Ribbon from '../Ribbon';
import { ImageWrapper, ImgCard, Img } from './Style';

type Props = {
  href: string;
  title: string;
  coverImage: string;
  isMobile: boolean;
  isLarge?: boolean;
  test: number;
};

const Image: FunctionComponent<Props> = (props: Props) => {
  const { href, title, coverImage, isMobile, isLarge, test } = props;

  return (
    <ImageWrapper isMobile={isMobile} isLarge={isLarge}>
      <ImgCard isMobile={isMobile} isLarge={isLarge}>
        <a href={href} target="_blank" title={title}>
          <Img
            isMobile={isMobile}
            isLarge={isLarge}
            height={249}
            src={coverImage}
            alt={title}
            title={title}
          />
          <Ribbon isMobile={isMobile} test={test} />
        </a>
      </ImgCard>
    </ImageWrapper>
  );
};

export default Image;
