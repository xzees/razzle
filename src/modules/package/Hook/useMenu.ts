import { useState } from 'react';

export interface Option {
  label: string;
  value: string;
}

interface Props {
  items: Option[];
}

interface Output {
  options: Option[];
  anchorEl: HTMLElement | null;
  selectedItem: Option | null | undefined;
  setSelectedItem: (selectedItem: Option | null | undefined) => void;
  handleClick: (event: React.MouseEvent<any>) => void;
  handleClickItem: (event: React.MouseEvent<any>, item: Option) => void;
  handleClose: () => void;
}

const useMenu = ({ items }: Props): Output => {
  const [options, setOptions] = useState<Option[]>(items);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<Option | null>();

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickItem = (
    event: React.MouseEvent<HTMLElement>,
    item: Option
  ) => {
    setSelectedItem(item);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    options,
    anchorEl,
    selectedItem,
    setSelectedItem,
    handleClick,
    handleClickItem,
    handleClose,
  };
};

export default useMenu;
