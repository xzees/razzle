import { Divider as MuiDivider, withStyles } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';

export const Divider = withStyles({
  root: {
    width: '2px',
    height: '14px',
    margin: '13px 0px 14px!important',
    backgroundColor: ColorManager.default.greyColor,
  },
})(MuiDivider);
