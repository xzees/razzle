import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  withStyles,
} from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';

export const Menu = withStyles({
  paper: {
    minWidth: 165,
    marginTop: 50,
    '& .MuiListItem-root': {
      fontSize: FontManager.default.text,
      color: ColorManager.default.fourthColor,
      '& .MuiListItem-button:hover': {
        color: ColorManager.default.primaryColor,
      },
    },
  },
})(MuiMenu);

export const MenuItem = withStyles({})(MuiMenuItem);
