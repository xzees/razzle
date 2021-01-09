import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { FormControl } from '@material-ui/core';
import CheckboxSelectWithCount, { Item } from '../CheckboxSelectWithCount';

type Props = {
  selectedValues: any;
  items: Item[];
  labelColor?: 'primary' | 'fifth' | 'yellow' | 'green';
  checkedColor?: 'primary' | 'fifth' | 'yellow' | 'green';
  onSelectedValue?: (
    event: React.ChangeEvent<any>,
    selectedValues: any
  ) => void;
};

const CheckboxGroupSelectWithCount: FunctionComponent<Props> = (
  props: Props
) => {
  const {
    selectedValues,
    items,
    labelColor,
    checkedColor,
    onSelectedValue,
  } = props;

  const getChecked = (item: Item): boolean => {
    if (_.isArray(selectedValues)) {
      return _.includes(selectedValues, item.value);
    } else if (
      _.has(selectedValues, 'from') &&
      _.has(item.value, 'from') &&
      typeof selectedValues.from === 'number' &&
      typeof item.value.from === 'number'
    ) {
      if (
        selectedValues.to &&
        _.has(selectedValues, 'to') &&
        _.has(item.value, 'to') &&
        typeof selectedValues.to === 'number' &&
        typeof item.value.to === 'number'
      )
        return (
          _.inRange(
            item.value.from,
            selectedValues.from,
            selectedValues.to + 1
          ) ||
          _.inRange(item.value.to, selectedValues.from, selectedValues.to + 1)
        );
      else if (selectedValues.to && typeof selectedValues.to === 'number')
        return _.inRange(
          item.value.from,
          selectedValues.from,
          selectedValues.to
        );
      return item.value.from >= selectedValues.from;
    }
    return false;
  };

  const handleChange = (
    event: React.ChangeEvent<any>,
    { value, checked }: { value: any; checked: boolean }
  ) => {
    let values = selectedValues;
    if (onSelectedValue) {
      if (_.isArray(values)) {
        if (checked) values.push(value);
        else _.remove(values, (item: any) => item === value);
      } else if (
        _.has(values, 'from') &&
        _.has(value, 'from') &&
        typeof values.from === 'number' &&
        typeof value.from === 'number'
      ) {
        if (checked) {
          if (_.isUndefined(value.to))
            values = { from: values.from, to: undefined } as PriceRange;
          else
            values = {
              from: _.min([value.from, values.from]),
              to: _.isUndefined(values.to)
                ? undefined
                : _.max([value.to, values.to]),
            } as PriceRange;
        } else {
          if (value.from === values.from)
            values = { ...values, from: value.to + 1 } as PriceRange;
          else if (
            (_.isUndefined(value.to) && _.isUndefined(values.to)) ||
            value.to === values.to
          )
            values = { ...values, to: value.from - 1 } as PriceRange;
          if (values.from > values.to)
            values = { from: 0, to: 0 } as PriceRange;
        }
      }
      onSelectedValue(event, values);
    }
  };

  return (
    <FormControl component="fieldset" fullWidth>
      {_.map(items, (item: Item) => {
        return (
          <CheckboxSelectWithCount
            item={item}
            checked={getChecked(item)}
            labelColor={labelColor}
            checkedColor={checkedColor}
            onChange={handleChange}
          />
        );
      })}
    </FormControl>
  );
};

export default CheckboxGroupSelectWithCount;
