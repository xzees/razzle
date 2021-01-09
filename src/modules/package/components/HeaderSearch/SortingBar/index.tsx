import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { FormControl, makeStyles } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import { Option } from 'modules/package/Hook/useMenu';
import FontManager from 'modules/package/Manager/FontManager';
import ToggleButtonMenu from '../ToggleButtonMenu';
import { Divider } from './Style';

interface Item {
  label: string;
  sortBy: string;
  sortDirection?: 'asc' | 'desc';
  menuItems?: Option[];
}

const useStyles = makeStyles({
  toggleButtonGroupStyle: {
    height: '41px',
    boxShadow: '0px 3px 3px 0 rgba(0, 0, 0, 0.03)',
    backgroundColor: ColorManager.default.white,
  },
  toggleButtonStyle: {
    '&.MuiToggleButton-root': {
      width: '100%',
      color: ColorManager.default.fourthColor,
      fontSize: FontManager.default.header,
      backgroundColor: ColorManager.default.white,
      border: 'none',
      '&:hover': {
        color: ColorManager.default.secondaryColor,
      },
      '&.Mui-selected': {
        color: ColorManager.default.secondaryColor,
        '&:hover': {
          backgroundColor: ColorManager.default.white,
        },
      },
    },
  },
});

type Props = {
  sorting: Sorting;
  onChangeSorting: (event: React.ChangeEvent<any>, newValue: Sorting) => void;
};

const SortingBar: FunctionComponent<Props> = ({ sorting, onChangeSorting }) => {
  const items: Item[] = [
    {
      label: 'แนะนำ',
      sortBy: 'recommend',
      sortDirection: 'asc',
    },
    {
      label: 'ราคา',
      sortBy: 'price',
      menuItems: [
        { value: 'asc', label: 'ราคา (น้อยไปมาก)' },
        { value: 'desc', label: 'ราคา (มากไปน้อย)' },
      ],
    },
    {
      label: 'ระดับดาว',
      sortBy: 'rating',
      menuItems: [
        { value: 'desc', label: 'ระดับดาว (มากไปน้อย)' },
        { value: 'asc', label: 'ระดับดาว (น้อยไปมาก)' },
      ],
    },
    {
      label: 'คะแนนสูงสุด',
      sortBy: 'score',
      sortDirection: 'desc',
    },
  ];

  const classes = useStyles();

  return (
    <FormControl component="fieldset" fullWidth>
      <ToggleButtonGroup
        value={sorting.sortBy}
        className={classes.toggleButtonGroupStyle}
        exclusive
      >
        {_.map(items, (item: Item, index: number) => {
          return [
            item.menuItems ? (
              <ToggleButtonMenu
                label={item.label}
                items={item.menuItems}
                selected={sorting.sortBy === item.sortBy}
                className={classes.toggleButtonStyle}
                onClickItem={(event: any, option: Option) =>
                  onChangeSorting(event, {
                    sortBy: item.sortBy,
                    sortDirection: option.value,
                  } as Sorting)
                }
              />
            ) : (
              <ToggleButton
                value={item.sortBy}
                className={classes.toggleButtonStyle}
                onClick={(event: any) =>
                  onChangeSorting(event, {
                    sortBy: item.sortBy,
                    sortDirection: item.sortDirection,
                  } as Sorting)
                }
              >
                {item.label}
              </ToggleButton>
            ),
            index !== items.length - 1 && (
              <Divider orientation="vertical" flexItem />
            ),
          ];
        })}
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default SortingBar;
