import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Star } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

const useStyles = makeStyles({
  toggleButtonGroupStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  toggleButtonStyle: {
    '&.MuiToggleButton-root': {
      width: '100%',
      color: ColorManager.default.thirdColor,
      fontFamily: `'${FontManager.default.primaryFont}'`,
      fontSize: FontManager.default.text,
      lineHeight: 0.9,
      padding: 0,
      height: '41px',
      backgroundColor: ColorManager.default.transparent,
      border: `1px solid ${ColorManager.default.fourthColor}!important`,
      borderRadius: '4px',
      '& .MuiSvgIcon-root': {
        color: ColorManager.default.fourthColor,
      },
      '&:not(:first-child)': {
        marginLeft: '18px!important',
      },
      '&.Mui-selected': {
        backgroundColor: ColorManager.default.yellowColor,
        color: ColorManager.default.white,
        border: `1px solid ${ColorManager.default.yellowColor}!important`,
        '& .MuiSvgIcon-root': {
          color: ColorManager.default.white,
        },
      },
    },
  },
  starIconStyle: {
    fontSize: FontManager.default.small,
  },
});

type Props = {
  value: any[];
  onChange?: (event: React.ChangeEvent<any>, newValue: any[]) => void;
};

const ButtonGroupSelectStarRating: FunctionComponent<Props> = ({
  value,
  onChange,
}) => {
  const items = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ];

  const classes = useStyles();

  return (
    <FormControl component="fieldset" fullWidth>
      <ToggleButtonGroup
        value={value}
        onChange={onChange}
        className={classes.toggleButtonGroupStyle}
      >
        {_.map(items, (item: any) => {
          return (
            <ToggleButton
              value={item.value}
              className={classes.toggleButtonStyle}
            >
              {item.label} <Star className={classes.starIconStyle} />
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default ButtonGroupSelectStarRating;
