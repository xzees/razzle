import React, { FunctionComponent } from 'react';
import {
  ReplyItemWrapper,
  TextWrapper,
  MessageText,
  ReplyerText,
  ReplyDateText,
} from './Style';

type Props = {
  item: any;
};

const ReplyItem: FunctionComponent<Props> = ({ item }) => {
  return (
    <ReplyItemWrapper>
      <TextWrapper mb="39px">
        <MessageText>{`"${item?.message}"`}</MessageText>
      </TextWrapper>
      <ReplyerText>{item?.replyer}</ReplyerText>
      <ReplyDateText>{item?.date}</ReplyDateText>
    </ReplyItemWrapper>
  );
};

export default ReplyItem;
