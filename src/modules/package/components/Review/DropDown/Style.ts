import styled from 'styled-components';
import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  withStyles,
} from '@material-ui/core';
import {
  FilterList,
  KeyboardArrowDown,
  LocalActivityOutlined,
} from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const toggleButtonGroupStyle = {
  width: '100%',
  borderRadius: '4px',
  border: `1px solid ${ColorManager.default.greyColor}`,
  backgroundColor: ColorManager.default.white,
};

export const toggleButtonStyle = {
  width: '100%',
  border: 'none',
  padding: '9px 12px',
};

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

export const LocalActivityOutlinedIcon = withStyles({
  root: {
    color: ColorManager.default.fourthColor,
  },
})(LocalActivityOutlined);

export const FilterListIcon = withStyles({
  root: {
    color: ColorManager.default.fourthColor,
  },
})(FilterList);

export const KeyboardArrowDownIcon = withStyles({
  root: {
    color: ColorManager.default.fifthColor,
  },
})(KeyboardArrowDown);

export const ListItemTextWrapper = styled.div`
  width: 100%;
  margin-left: 12px;
  text-align: left;
`;

export const PrimaryText = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 15px;
`;

export const SecondaryText = styled.p`
  color: ${ColorManager.default.fifthColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
  line-height: 15px;
  margin: 0px;
`;
