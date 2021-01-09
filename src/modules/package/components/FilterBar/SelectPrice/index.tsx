import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { FormControl } from '@material-ui/core';
import { Select, MenuItem } from './Style';

type Props = {
  value: string;
  onChange?: (event: React.ChangeEvent<any>) => void;
};

const SelectPrice: FunctionComponent<Props> = ({ value, onChange }) => {
  const items = [
    { value: 'all', label: 'เลือก' },
    { value: 'price_include_vat', label: 'ราคา (รวมภาษีและค่าธรรมเนียม)' },
    {
      value: 'price_not_include_vat',
      label: 'ราคา (ไม่รวมภาษีและค่าธรรมเนียม)',
    },
  ];

  return (
    <>
      <FormControl fullWidth {...{ component: 'fieldset' }}>
        <Select
          name="priceType"
          value={value}
          disableUnderline
          onChange={onChange}
        >
          {_.map(items, (item: any) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectPrice;
