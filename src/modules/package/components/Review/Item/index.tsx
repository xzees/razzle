import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import ReplyItem from '../ReplyItem';
import {
  ItemWrapper,
  ItemLayoutWrapper,
  ItemAvartarRatingWrapper,
  ItemContentWrapper,
  DetailWrapper,
  RepliesWrapper,
  ReviewDetailWrapper,
  ImageWrapper,
  TextWrapper,
  ImageAvatar,
  FlagImage,
  ScoreText,
  TitleText,
  MessageText,
  Divider,
  ReviewerText,
  CaptionText,
} from './Style';

type Props = {
  item: any;
  isMobile: boolean;
};

const Item: FunctionComponent<Props> = ({ item, isMobile }) => {
  if (isMobile) {
    return (
      <ItemWrapper mb="19px" p="19px 19px 31px">
        <ItemLayoutWrapper columnGap="25px" mb="20px">
          <ItemAvartarRatingWrapper>
            <ImageWrapper>
              <ImageAvatar src={item?.photo} alt="" size="70px" />
              <FlagImage src={item?.country} alt="" />
            </ImageWrapper>
            <TextWrapper mt="22px">
              <ScoreText fontSize="30px" lineHeight="12.5px">
                {item?.score}
              </ScoreText>
            </TextWrapper>
          </ItemAvartarRatingWrapper>
          <ReviewDetailWrapper>
            <ReviewerText>{item?.reviewer}</ReviewerText>
            <CaptionText>{`รีวิวเมื่อ ${item?.date}`}</CaptionText>
            <CaptionText>
              กิจกรรม : <span>{item?.activityType}</span>
            </CaptionText>
          </ReviewDetailWrapper>
        </ItemLayoutWrapper>
        <Divider />
        <ItemContentWrapper mt="18px">
          <TextWrapper mb="18px">
            <TitleText>{item?.title}</TitleText>
          </TextWrapper>
          <TextWrapper>
            <MessageText>{item?.message}</MessageText>
          </TextWrapper>
          {(item?.replies || []).length > 0 && (
            <RepliesWrapper mt="20px">
              {_.map(item.replies, (item: any) => {
                return <ReplyItem item={item} />;
              })}
            </RepliesWrapper>
          )}
        </ItemContentWrapper>
      </ItemWrapper>
    );
  }

  return (
    <ItemWrapper mb="23px" p="32px 41px 31px 54px">
      <ItemLayoutWrapper columnGap="91px">
        <ItemAvartarRatingWrapper>
          <ImageWrapper>
            <ImageAvatar src={item?.photo} alt="" size="97px" />
            <FlagImage src={item?.country} alt="" />
          </ImageWrapper>
          <TextWrapper mt="42px">
            <ScoreText fontSize="50px" lineHeight="25px">
              {item?.score}
            </ScoreText>
          </TextWrapper>
        </ItemAvartarRatingWrapper>
        <ItemContentWrapper>
          <TextWrapper mb="28px">
            <TitleText>{item?.title}</TitleText>
          </TextWrapper>
          <TextWrapper mb="30px">
            <MessageText>{item?.message}</MessageText>
          </TextWrapper>
          <Divider />
          <DetailWrapper>
            <CaptionText>
              กิจกรรม : <span>{item?.activityType}</span>
            </CaptionText>
            <ReviewDetailWrapper textAlign="right">
              <ReviewerText>{item?.reviewer}</ReviewerText>
              <CaptionText>{`รีวิวเมื่อ ${item?.date}`}</CaptionText>
            </ReviewDetailWrapper>
          </DetailWrapper>
          {(item?.replies || []).length > 0 && (
            <RepliesWrapper mt="24px">
              {_.map(item.replies, (item: any) => {
                return <ReplyItem item={item} />;
              })}
            </RepliesWrapper>
          )}
        </ItemContentWrapper>
      </ItemLayoutWrapper>
    </ItemWrapper>
  );
};

export default Item;
