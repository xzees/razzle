import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { ToggleButton } from '@material-ui/lab';
import { ArrowDropDown } from '@material-ui/icons';
import useMenu, { Option } from 'modules/package/Hook/useMenu';
import { Menu, MenuItem } from './Style';

type Props = {
  label: string;
  items: any[];
  selected?: boolean;
  className?: string;
  onClickItem?: (event: React.MouseEvent<any>, item: Option) => void;
};

const ToggleButtonMenu: FunctionComponent<Props> = (props: Props) => {
  const { label, items, selected, className, onClickItem } = props;

  const {
    options,
    anchorEl,
    selectedItem,
    setSelectedItem,
    handleClick,
    handleClickItem,
    handleClose,
  } = useMenu({ items });

  if (!selected && selectedItem) setSelectedItem(null);

  return (
    <>
      <ToggleButton
        value={'แนะนำ'}
        selected={selected}
        className={className}
        onClick={handleClick}
      >
        {`${selectedItem ? selectedItem.label : label} `}
        <ArrowDropDown />
      </ToggleButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem disabled>เลือก</MenuItem>
        {_.map(options, (option: Option) => {
          return (
            <MenuItem
              selected={_.isEqual(option, selectedItem)}
              onClick={(event) => {
                handleClickItem(event, option);
                if (onClickItem) onClickItem(event, option);
              }}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ToggleButtonMenu;
