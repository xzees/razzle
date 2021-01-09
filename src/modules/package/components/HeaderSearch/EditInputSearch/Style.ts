import styled from 'styled-components';
import { TextField as MuiTextField, withStyles } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const TextField = withStyles({
  root: {
    '& .MuiOutlinedInput': {
      '&-root': {
        height: '44px',
        backgroundColor: ColorManager.default.greyColor,
        '& .MuiInputBase-input': {
          color: ColorManager.default.fourthColor,
          fontFamily: `'${FontManager.default.primaryFont}'`,
          fontSize: FontManager.default.header,
          lineHeight: 1.09,
        },
      },
      '&-input': {
        padding: '13px 24px 16px',
      },
      '&-notchedOutline': {
        border: 'none',
      },
    },
  },
})(MuiTextField);

export const InputWrapper = styled.div`
  padding: 15px 20px 16px;
`;
