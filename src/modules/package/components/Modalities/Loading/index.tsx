import React, { FunctionComponent } from 'react';
import { Skeleton } from '@material-ui/lab';
import {
  ItemWrapper,
  TitleWrapper,
  BodyWrapper,
  ContentWrapper,
  PriceWrapper,
  OptionWrapper,
} from './Style';

type Props = {
  isMobile: boolean;
};

const Loading: FunctionComponent<Props> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <ItemWrapper isMobile>
        <ContentWrapper isMobile>
          <TitleWrapper>
            <Skeleton
              variant="rect"
              width="50%"
              height="18px"
              animation="wave"
            />
          </TitleWrapper>
          <Skeleton
            variant="rect"
            width="100%"
            height="55px"
            animation="wave"
            style={{ marginBottom: '10px' }}
          />
          <OptionWrapper>
            <Skeleton
              variant="rect"
              width="5%"
              height="16px"
              style={{ marginRight: '8px' }}
              animation="wave"
            />
            <Skeleton
              variant="rect"
              width="30%"
              height="16px"
              animation="wave"
            />
          </OptionWrapper>
          <OptionWrapper>
            <Skeleton
              variant="rect"
              width="5%"
              height="16px"
              style={{ marginRight: '8px' }}
              animation="wave"
            />
            <Skeleton
              variant="rect"
              width="30%"
              height="16px"
              animation="wave"
            />
          </OptionWrapper>
        </ContentWrapper>
        <PriceWrapper isMobile>
          <Skeleton
            variant="rect"
            width="80%"
            height="28px"
            style={{ display: 'inline-block', marginBottom: '17px' }}
            animation="wave"
          />
          <Skeleton
            variant="rect"
            width="90%"
            height="25px"
            style={{ display: 'inline-block' }}
            animation="wave"
          />
          <Skeleton
            variant="rect"
            width="100%"
            height="42px"
            animation="wave"
            style={{ marginTop: '13px' }}
          />
        </PriceWrapper>
      </ItemWrapper>
    );
  }

  return (
    <ItemWrapper isMobile={false}>
      <TitleWrapper>
        <Skeleton variant="rect" width="50%" height="18px" animation="wave" />
      </TitleWrapper>
      <BodyWrapper>
        <ContentWrapper isMobile={false}>
          <Skeleton
            variant="rect"
            width="100%"
            height="55px"
            animation="wave"
            style={{ marginBottom: '10px' }}
          />
          <OptionWrapper>
            <Skeleton
              variant="rect"
              width="5%"
              height="16px"
              style={{ marginRight: '8px' }}
              animation="wave"
            />
            <Skeleton
              variant="rect"
              width="30%"
              height="16px"
              animation="wave"
            />
          </OptionWrapper>
          <OptionWrapper>
            <Skeleton
              variant="rect"
              width="5%"
              height="16px"
              style={{ marginRight: '8px' }}
              animation="wave"
            />
            <Skeleton
              variant="rect"
              width="30%"
              height="16px"
              animation="wave"
            />
          </OptionWrapper>
        </ContentWrapper>
        <PriceWrapper isMobile={false}>
          <Skeleton
            variant="rect"
            width="80%"
            height="28px"
            style={{ display: 'inline-block', marginBottom: '17px' }}
            animation="wave"
          />
          <Skeleton
            variant="rect"
            width="90%"
            height="25px"
            style={{ display: 'inline-block' }}
            animation="wave"
          />
          <Skeleton
            variant="rect"
            width="100%"
            height="42px"
            animation="wave"
            style={{ marginTop: '13px' }}
          />
        </PriceWrapper>
      </BodyWrapper>
    </ItemWrapper>
  );
};

export default Loading;
