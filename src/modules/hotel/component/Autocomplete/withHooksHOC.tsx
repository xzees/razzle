import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import Store from 'modules/hotel/interface/Component/Store';

export interface HooksAutocompleteProps extends Store {
  id?: string | undefined;
  options: any[] ;
  getOptionLabel: any;
  autoSelect: boolean;
  clearOnBlur: boolean;
  data: any;
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {};
  notfind: boolean;
  loading: boolean;
  placeholder: string;
  setOpen?: any;
  renderLoading?: () => {};
  renderNotfind?: () => {};
  onChange: (value: any) => {};
  modelLabel?: any;
  modelTitle?: any;
  setOption?: any;
  isMobile: boolean;
  freeSolo?: boolean;
  debug?: boolean;
  filterSelectedOptions ?: boolean;
  filterOptions?: (options: any) => {};
  value?: any | undefined;
  setValue: any;
  showHistory?: boolean;
  setShowHistory?: any;
  setHistory?: any;
  history?: any;
  propsItem: any;
  propsHistory: any;
  autocompleteUI: any;
}

type useAutocompleteProps = Omit<HooksAutocompleteProps, 'data' | 'stores' | 'onKeyUp' | 'notfind' | 'loading' | 'renderLoading' | 'renderNotfind'
| 'showHistory' | 'setShowHistory' | 'setHistory' | 'history' | 'setOption' | 'setOpen' | 'autocompleteUI' | 'setValue'
>;

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    const data = useAutocomplete({
      ...(props as useAutocompleteProps),
      filterOptions: (val: any) => val
    });
    return <Component {...props} data={data} /> ;
  };
};