import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { KanokIcon } from '../../Icon';
import Ribbon from '../Ribbon';
import {
  Rating,
  RoomRoundedIcon,
  ErrorRoundedIcon,
  NearbyDestinationItemWrapper,
  ContentWrapper,
  ContentDetailWrapper,
  ImageWrapper,
  TitleWrapper,
  PriceWrapper,
  SaleWrapper,
  LocationWrapper,
  ReviewWrapper,
  Image,
  Title,
  Rate,
  Sale,
  Discount,
  Amount,
} from './Style';

type Props = {
  item: any;
  test: number;
  isMobile: boolean;
};

const Item: FunctionComponent<Props> = ({ item, test, isMobile }) => {
  return (
    <NearbyDestinationItemWrapper>
      <ImageWrapper>
        <Ribbon isMobile={isMobile} test={test} />
        <Image
          src={
            _.find(item?.content.media.images[0].urls || [], {
              sizeType: 'RAW',
            })?.resource
          }
          height={isMobile ? '107px' : '171px'}
          alt=""
        />
      </ImageWrapper>
      <ContentWrapper isMobile={isMobile}>
        <ContentDetailWrapper height={isMobile ? '77px' : '124px'}>
          <TitleWrapper height={isMobile ? '44px' : '68px'}>
            <a href={`/package/activity/detail/${item?.code}`} target="_blank">
              <Title {...(isMobile ? { fontSize: '0.9375rem' } : {})}>
                {item?.content.name}
              </Title>
            </a>
            <Rating
              name="rating"
              value={4}
              {...(isMobile ? { size: 'small' } : {})}
              readOnly
            />
          </TitleWrapper>
          <LocationWrapper isMobile={isMobile}>
            <RoomRoundedIcon />
            {item?.country.name}
          </LocationWrapper>
          <ReviewWrapper isMobile={isMobile}>
            <KanokIcon style={{ display: 'initial' }} />
            <Rate>{'7.9 '}</Rate>
            (2,909)
          </ReviewWrapper>
        </ContentDetailWrapper>
        <PriceWrapper height={isMobile ? '42px' : '69px'}>
          {test % 3 === 2 ? (
            <SaleWrapper
              width={isMobile ? '90px' : '141px'}
              height={isMobile ? '16px' : '25px'}
              p={isMobile ? '0px 4px' : '1px 6px'}
              mb={isMobile ? '3px' : '10px'}
              arrowHeight={isMobile ? 6 : 12}
              arrowRight={isMobile ? '8px' : '9px'}
            >
              <Sale isMobile={isMobile}>
                ประหยัดได้อีก 10%{' '}
                <ErrorRoundedIcon
                  {...(isMobile ? { fontSize: 'small' } : {})}
                />
              </Sale>
            </SaleWrapper>
          ) : (
            <Discount
              mb={isMobile ? '2px' : '8px'}
              {...(isMobile ? { fontSize: '1.5625rem' } : {})}
            >
              {(1000).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </Discount>
          )}
          <a href={`/package/activity/detail/${item?.code}`} target="_blank">
            <Amount {...(isMobile ? { fontSize: '1.5625rem' } : {})}>
              {item?.currency || 'THB'}{' '}
              {_.find(item.amountsFrom, {
                paxType: 'ADULT',
              })?.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </Amount>
          </a>
        </PriceWrapper>
      </ContentWrapper>
    </NearbyDestinationItemWrapper>
  );
};

export default Item;
