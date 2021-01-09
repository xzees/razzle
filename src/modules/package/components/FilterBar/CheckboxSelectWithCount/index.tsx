import React, { FunctionComponent } from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  makeStyles,
} from '@material-ui/core';
import { FormControlLabel, Checkbox } from './Style';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

const useStyles = makeStyles({
  listItemContainerStyle: {
    '&:not(:first-child)': {
      marginTop: '13px',
    },
  },
  listItemStyle: {
    padding: '0px 28px 0px 0px',
    '& .MuiListItem-container': {
      backgroundColor: 'red',
    },
  },
  listItemSecondaryActionStyle: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    fontSize: FontManager.default.text,
    color: ColorManager.default.fourthColor,
    lineHeight: 1.3,
  },
});

export interface Item {
  label: any;
  value: any;
  count: number;
}

type Props = {
  item: Item;
  checked?: boolean;
  labelColor?: 'primary' | 'fifth' | 'yellow' | 'green';
  checkedColor?: 'primary' | 'fifth' | 'yellow' | 'green';
  onChange?: (
    event: React.ChangeEvent<any>,
    { value, checked }: { value: any; checked: boolean }
  ) => void;
};

const CheckboxSelectWithCount: FunctionComponent<Props> = (props: Props) => {
  const { item, checked, labelColor, checkedColor, onChange } = props;

  const classes = useStyles();

  return (
    <ListItem
      className={classes.listItemStyle}
      classes={{ container: classes.listItemContainerStyle }}
    >
      <FormControlLabel
        control={
          <Checkbox
            value={item.value}
            size="small"
            checked={checked}
            {...{ checkedColor }}
            onChange={(event: any, checked: boolean) => {
              if (onChange) onChange(event, { value: item.value, checked });
            }}
          />
        }
        label={item.label}
        {...{ labelColor }}
      />
      <ListItemSecondaryAction className={classes.listItemSecondaryActionStyle}>
        {item.count}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CheckboxSelectWithCount;
