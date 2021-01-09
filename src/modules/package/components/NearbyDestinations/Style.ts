import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';

interface ItemWrapperProps {
  pl?: string | number;
  pr?: string | number;
}

interface ArrowButtonProps {
  top?: string | number;
  right?: string | number;
  disabled?: boolean;
}

export const KeyboardArrowLeftIcon = withStyles({
  root: {
    height: '100%',
  },
})(KeyboardArrowLeft);

export const KeyboardArrowRightIcon = withStyles({
  root: {
    height: '100%',
  },
})(KeyboardArrowRight);

export const ItemWrapper = styled.div<ItemWrapperProps>`
  ${(props: ItemWrapperProps) => (props.pl ? `padding-left: ${props.pl};` : '')}
  ${(props: ItemWrapperProps) =>
    props.pr ? `padding-right: ${props.pr};` : ''}
`;

export const ArrowButton = styled.button<ArrowButtonProps>`
  position: absolute;
  ${(props: ArrowButtonProps) => (props.top ? `top: ${props.top};` : '')}
  ${(props: ArrowButtonProps) => (props.right ? `right: ${props.right};` : '')}
  padding: 6px;
  border: none;
  border-radius: 4px;
  width: 41px;
  height: 40px;
  ${(props: ArrowButtonProps) => (props.disabled ? '' : 'cursor: pointer;')}
  background-color: ${ColorManager.default.white};
  & svg {
    color: ${(props: ArrowButtonProps) =>
      props.disabled
        ? ColorManager.default.fourthColor
        : ColorManager.default.fifthColor};
  }
`;
