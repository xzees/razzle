import styled from 'styled-components';
import {
  AddCircleOutlineRounded,
  RemoveCircleOutlineRounded,
} from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface IconProps {
  disabled?: boolean;
}

export const RemoveCircleOutlineRoundedIcon = styled(
  RemoveCircleOutlineRounded
)<IconProps>`
  ${(props: IconProps) => (props.disabled ? 'pointer-events: none;' : '')}
  color: ${(props: IconProps) =>
    props.disabled
      ? ColorManager.default.fourthColor
      : ColorManager.default.primaryColor};
  font-size: 34px !important;
  ${(props: IconProps) => (props.disabled ? '' : 'cursor: pointer;')}
`;

export const AddCircleOutlineRoundedIcon = styled(
  AddCircleOutlineRounded
)<IconProps>`
  color: ${(props: IconProps) =>
    props.disabled
      ? ColorManager.default.fourthColor
      : ColorManager.default.primaryColor};
  font-size: 34px !important;
  ${(props: IconProps) => (props.disabled ? '' : 'cursor: pointer;')}
`;

export const ButtonSelectQuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 96px;
`;

export const CountText = styled.span`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
`;
