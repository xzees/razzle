import React, { FunctionComponent } from 'react';
import {
  CircularProgress,
  ScoreSummaryWrapper,
  CircularProgressWithLabelWrapper,
  ScoreSummaryTextWrapper,
  ScoreSummaryText,
  SummaryText,
  DescriptionText,
} from './Style';

type Props = {
  isMobile: boolean;
};

const ScoreSummary: FunctionComponent<Props> = ({ isMobile }) => {
  return (
    <ScoreSummaryWrapper
      pb={isMobile ? '0px' : '18px'}
      mb={isMobile ? '42px' : '11px'}
    >
      <CircularProgressWithLabelWrapper>
        <CircularProgress
          variant="static"
          size={140}
          value={78}
          thickness={3.8}
        />
        <ScoreSummaryTextWrapper>
          <ScoreSummaryText>
            7.8
            <span>/10</span>
          </ScoreSummaryText>
        </ScoreSummaryTextWrapper>
      </CircularProgressWithLabelWrapper>
      <SummaryText>ดีเยี่ยม</SummaryText>
      <DescriptionText>จาก 2,909 ผู้จองผ่านไทยทราเวลจริง</DescriptionText>
    </ScoreSummaryWrapper>
  );
};

export default ScoreSummary;
