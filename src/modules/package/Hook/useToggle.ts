import { useState } from 'react';

interface Output {
  toggle: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const useToggle = (): Output => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleOpen = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return {
    toggle,
    handleOpen,
    handleClose,
  };
};

export default useToggle;
