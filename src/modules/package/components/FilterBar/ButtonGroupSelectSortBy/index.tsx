import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

const useStyles = makeStyles({
  toggleButtonGroupStyle: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '16px 22px',
  },
  toggleButtonStyle: {
    '&.MuiToggleButton-root': {
      color: ColorManager.default.fourthColor,
      fontFamily: `'${FontManager.default.primaryFont}'`,
      fontSize: FontManager.default.small,
      lineHeight: 0.9,
      padding: 3,
      minWidth: '157px',
      height: '44px',
      backgroundColor: ColorManager.default.transparent,
      border: `1px solid ${ColorManager.default.fourthColor}`,
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: ColorManager.default.white,
        color: ColorManager.default.secondaryColor,
        border: `1px solid ${ColorManager.default.secondaryColor}`,
      },
      '&.Mui-selected': {
        backgroundColor: ColorManager.default.secondaryColor,
        color: ColorManager.default.white,
        border: `1px solid ${ColorManager.default.secondaryColor}`,
      },
    },
  },
});

type Props = {
  sorting?: Sorting;
  onChangeSorting?: (
    event: React.MouseEvent<HTMLElement>,
    newValue: Sorting
  ) => void;
};

const ButtonSelectSortBy: FunctionComponent<Props> = ({
  sorting,
  onChangeSorting,
}) => {
  const items = [
    { sortBy: 'recommend', sortDirection: 'asc', label: 'แนะนำ' },
    { sortBy: 'score', sortDirection: 'desc', label: 'คะแนนสูงสุด' },
    { sortBy: 'price', sortDirection: 'asc', label: 'ราคา (น้อยไปมาก)' },
    { sortBy: 'price', sortDirection: 'desc', label: 'ราคา (มากไปน้อย)' },
  ];

  const classes = useStyles();

  return (
    <FormControl component="fieldset" fullWidth>
      <ToggleButtonGroup
        value={`${sorting?.sortBy}_${sorting?.sortDirection}`}
        className={classes.toggleButtonGroupStyle}
        exclusive
      >
        {_.map(items, (item: any) => {
          return (
            <ToggleButton
              value={`${item.sortBy}_${item.sortDirection}`}
              className={classes.toggleButtonStyle}
              onClick={(event: any) => {
                if (onChangeSorting)
                  onChangeSorting(event, {
                    sortBy: item.sortBy,
                    sortDirection: item.sortDirection,
                  } as Sorting);
              }}
            >
              {item.label}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default ButtonSelectSortBy;
