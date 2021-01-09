import { createContext } from 'react';

interface PaxesContext {
  paxes: Pax[];
  handleChangeQuantity: (pax: Pax) => void;
  clearQuantities: () => void;
}

const paxesContextDefaultValue: PaxesContext = {
  paxes: [],
  handleChangeQuantity: (pax: Pax) => {},
  clearQuantities: () => {},
};

export default createContext(paxesContextDefaultValue);
