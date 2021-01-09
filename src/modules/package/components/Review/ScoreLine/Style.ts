import styled from 'styled-components';
import {
  LinearProgress as MuiLinearProgress,
  withStyles,
} from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ScoreLineWrapperProps {
  mb?: string | number;
}

export const LinearProgress = withStyles({
  root: {
    height: '5px',
    marginBottom: '10px',
  },
  colorPrimary: {
    backgroundColor: ColorManager.default.greyColor,
  },
  bar: {
    backgroundColor: ColorManager.default.fifthColor,
  },
})(MuiLinearProgress);

export const ScoreLineWrapper = styled.div<ScoreLineWrapperProps>`
  ${(props: ScoreLineWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const TitleText = styled.span`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 15px;
`;

export const DisplayScoreText = styled.span`
  color: ${ColorManager.default.fifthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 15px;
`;
