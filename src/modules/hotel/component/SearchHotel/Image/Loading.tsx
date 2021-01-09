import React from 'react';
import { 
  BoxImg,
  ImgBox,
  ImgCard,
} from './Style';
import { Skeleton } from '@material-ui/lab';

const Loading = (props: any) => {

    const {
      href,
      title,
      isMobile,
    } = props;

    if (isMobile) {
      return (
        <>
          <a href={href} target="_blank" title={title} >
            <Skeleton variant="rect" width={'100%'} height={'100%'} />
          </a>
        </>
      );
    }

    return ( 
        <BoxImg>
          <ImgBox>
            <ImgCard>
                <Skeleton variant="rect" width={'100%'} height={'100%'} />
            </ImgCard>
          </ImgBox>
        </BoxImg>
    );
};

export default Loading;