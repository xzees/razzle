import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const ChevronLeftIcon = withStyles({
  root: {
    color: ColorManager.default.white,
  },
})(ChevronLeft);

export const ModalHeader = styled.div`
  background-color: ${ColorManager.default.fifthColor};
  height: 56px;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Label = styled.label`
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.medium};
  font-weight: normal;
  line-height: 1;
`;
