import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import RootStore from 'stores';

export interface IHooksAutocompleteProps {
  id: string,
  options: any[],
  getOptionLabel: any,
  autoSelect: boolean,
  clearOnBlur: boolean,
  data: any,
  stores?: RootStore,
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {},
  notfind: boolean,
  loading: boolean,
  placeholder: string,
  renderLoading?: () => {},
  renderNotfind?: () => {},
  onChange: (value: any) => {},
  modelLabel?: any,
  modelTitle?: any,
  isMobile?: boolean,
  debug?: boolean,
  filterSelectedOptions?: boolean,
  filterOptions?: (options: any) => {}
}

type useAutocompleteProps = Omit<IHooksAutocompleteProps, 'data' | 'stores' | 'onKeyUp' | 'notfind' | 'loading' | 'renderLoading' | 'renderNotfind'>

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    let data = useAutocomplete({
      ...(props as useAutocompleteProps),
      filterOptions: (options: any) => options
    })
    return <Component {...props} data={data} />
  }
}