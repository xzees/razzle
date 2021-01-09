import { createContext } from 'react';

interface SortAndFilterContext {
  filter: Filter;
  handleChangeFilter: (filter: Filter) => void;
}

const sortAndFilterContextDefaultValue: SortAndFilterContext = {
  filter: { priceRange: { from: 1 } },
  handleChangeFilter: (filter: Filter) => {},
};

export default createContext(sortAndFilterContextDefaultValue);
