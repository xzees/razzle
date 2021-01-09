import {
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  withStyles,
} from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const Select = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '34px',
    backgroundColor: ColorManager.default.greyColor,
    textIndent: 9,
    padding: '0px',
    textAlign: 'left',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: ColorManager.default.thirdColor,
    fontFamily: FontManager.default.primaryFont,
    fontSize: FontManager.default.small,
    lineHeight: 1.33,
  },
  icon: {
    color: ColorManager.default.thirdColor,
  },
})(MuiSelect);

export const MenuItem = withStyles({
  root: {
    color: ColorManager.default.fourthColor,
    fontFamily: FontManager.default.primaryFont,
    fontSize: FontManager.default.small,
  },
  selected: {
    color: ColorManager.default.thirdColor,
    fontFamily: FontManager.default.secondaryFont,
  },
})(MuiMenuItem);
