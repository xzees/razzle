import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import {
  LinearProgress,
  ScoreLineWrapper,
  DetailWrapper,
  TitleText,
  DisplayScoreText,
} from './Style';

type Props = {
  items: any[];
  mb?: string | number;
};

const ScoreLine: FunctionComponent<Props> = ({ items, mb }) => {
  return (
    <ScoreLineWrapper mb={mb}>
      {_.map(items, (item: any) => {
        return (
          <>
            <LinearProgress variant="determinate" value={item?.score} />
            <DetailWrapper>
              <TitleText>{item?.title}</TitleText>
              <DisplayScoreText>{item?.displayScore}</DisplayScoreText>
            </DetailWrapper>
          </>
        );
      })}
    </ScoreLineWrapper>
  );
};

export default ScoreLine;
