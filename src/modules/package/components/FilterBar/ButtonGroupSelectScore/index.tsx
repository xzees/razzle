import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

const useStyles = makeStyles({
  toggleButtonGroupStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  toggleButtonDesktopStyle: {
    '&.MuiToggleButton-root': {
      width: '100%',
      height: '34px',
      color: ColorManager.default.text,
      fontFamily: `'${FontManager.default.primaryFont}'`,
      fontSize: FontManager.default.text,
      lineHeight: 1.3,
      padding: 0,
      backgroundColor: ColorManager.default.greyColor,
      border: `1px solid ${ColorManager.default.greyColor}`,
      borderRadius: '4px',
      '&:not(:first-child)': {
        marginLeft: '7px',
      },
      '&:hover': {
        backgroundColor: ColorManager.default.fifthColor,
        color: ColorManager.default.white,
      },
      '&.Mui-selected': {
        backgroundColor: ColorManager.default.fifthColor,
        color: ColorManager.default.white,
      },
    },
  },
  toggleButtonMobileStyle: {
    '&.MuiToggleButton-root': {
      width: '100%',
      height: '41px',
      color: ColorManager.default.text,
      fontFamily: `'${FontManager.default.primaryFont}'`,
      fontSize: FontManager.default.text,
      lineHeight: 1.3,
      padding: 0,
      backgroundColor: ColorManager.default.greyColor,
      border: `1px solid ${ColorManager.default.greyColor}`,
      borderRadius: '4px',
      '&:not(:first-child)': {
        marginLeft: '18px',
      },
      '&:hover': {
        backgroundColor: ColorManager.default.fifthColor,
        color: ColorManager.default.white,
      },
      '&.Mui-selected': {
        backgroundColor: ColorManager.default.fifthColor,
        color: ColorManager.default.white,
      },
    },
  },
});

type Props = {
  value: number;
  isMobile: boolean;
  onChange: (event: React.ChangeEvent<any>, newValue: number) => void;
};

const ButtonGroupSelectScore: FunctionComponent<Props> = ({
  value,
  isMobile,
  onChange,
}) => {
  const items = [
    { label: '6+', value: 6 },
    { label: '7+', value: 7 },
    { label: '8+', value: 8 },
    { label: '9+', value: 9 },
  ];

  const classes = useStyles();

  return (
    <FormControl component="fieldset" fullWidth>
      <ToggleButtonGroup
        value={value}
        className={classes.toggleButtonGroupStyle}
        onChange={onChange}
        exclusive
      >
        {_.map(items, (item: any) => {
          return (
            <ToggleButton
              value={item.value}
              className={
                isMobile
                  ? classes.toggleButtonMobileStyle
                  : classes.toggleButtonDesktopStyle
              }
            >
              {item.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default ButtonGroupSelectScore;
