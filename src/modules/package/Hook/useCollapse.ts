import { useState } from 'react';

interface Output {
  expanded: string | false;
  handleChange: (panel: string | false) => void;
}

const useCollapse = (): Output => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string | false) => {
    setExpanded(panel);
  };

  return {
    expanded,
    handleChange,
  };
};

export default useCollapse;
