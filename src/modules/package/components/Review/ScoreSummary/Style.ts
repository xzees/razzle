import styled from 'styled-components';
import {
  CircularProgress as MuiCircularProgress,
  withStyles,
} from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ScoreSummaryWrapperProps {
  pb?: string | number;
  mb?: string | number;
}

export const CircularProgress = withStyles({
  colorPrimary: {
    color: ColorManager.default.fifthColor,
  },
})(MuiCircularProgress);

export const ScoreSummaryWrapper = styled.div<ScoreSummaryWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  ${(props: ScoreSummaryWrapperProps) =>
    props.pb ? `padding-bottom: ${props.pb};` : ''}
  ${(props: ScoreSummaryWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
`;

export const CircularProgressWithLabelWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const ScoreSummaryTextWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

export const ScoreSummaryText = styled.label`
  color: ${ColorManager.default.fifthColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: 40px;
  font-weight: normal;
  & > span {
    color: ${ColorManager.default.fourthColor};
    font-family: '${FontManager.default.primaryFont}';
    font-size: 25px;
    line-height: 12.5px;
  }
`;

export const SummaryText = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.large};
  line-height: 15px;
`;

export const DescriptionText = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 15px;
`;
