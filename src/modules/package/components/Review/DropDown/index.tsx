import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import useMenu, { Option } from 'modules/package/Hook/useMenu';
import {
  Menu,
  MenuItem,
  LocalActivityOutlinedIcon,
  FilterListIcon,
  KeyboardArrowDownIcon,
  toggleButtonGroupStyle,
  toggleButtonStyle,
  ListItemTextWrapper,
  PrimaryText,
  SecondaryText,
} from './Style';

const useStyles = makeStyles({
  toggleButtonGroupStyle,
  toggleButtonStyle,
});

type Props = {
  value: any;
  label: string;
  items: any[];
  type?: 'sorting' | 'filter';
};

const DropDown: FunctionComponent<Props> = (props: Props) => {
  const { value, label, items, type = 'filter' } = props;

  const { options, anchorEl, handleClick, handleClose } = useMenu({ items });

  const classes = useStyles();

  return (
    <>
      <ToggleButtonGroup className={classes.toggleButtonGroupStyle}>
        <ToggleButton
          className={classes.toggleButtonStyle}
          onClick={handleClick}
        >
          {type === 'sorting' ? (
            <FilterListIcon />
          ) : (
            <LocalActivityOutlinedIcon />
          )}
          <ListItemTextWrapper>
            <PrimaryText>
              {type === 'sorting' ? 'จัดเรียงตาม' : 'ประเภทกิจกรรม'}
            </PrimaryText>
            <SecondaryText>
              {type === 'sorting' ? 'รีวิวล่าสุด' : 'ทุกประเภท'}
            </SecondaryText>
          </ListItemTextWrapper>
          <KeyboardArrowDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {_.map(options, (option: Option) => {
          return <MenuItem>{option.label}</MenuItem>;
        })}
      </Menu>
    </>
  );
};

export default DropDown;
