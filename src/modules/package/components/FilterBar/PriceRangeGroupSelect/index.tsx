import _ from 'lodash';
import React, { FunctionComponent, useContext } from 'react';
import { Grid, InputAdornment, Typography } from '@material-ui/core';
import numeral from 'numeral';
import SortAndFilterContext from 'modules/package/contexts/sortAndFilter';
import CheckboxGroupSelectWithCount from '../CheckboxGroupSelectWithCount';
import { FormControl, Slider, TextField, SliderContainer } from './Style';

type Props = {};

const PriceRangeGroupSelect: FunctionComponent<Props> = () => {
  const { filter, handleChangeFilter } = useContext(SortAndFilterContext);

  const items = [
    {
      label: 'THB 1 - 2,000',
      value: { from: 1, to: 2000 } as PriceRange,
      count: 383,
      isChecked: true,
    },
    {
      label: 'THB 2,001 - 4,000',
      value: { from: 2001, to: 4000 } as PriceRange,
      count: 345,
      isChecked: true,
    },
    {
      label: 'THB 4,001 - 6,000',
      value: { from: 4001, to: 6000 } as PriceRange,
      count: 534,
      isChecked: true,
    },
    {
      label: 'THB 6,001 - 8,000',
      value: { from: 6001, to: 8000 } as PriceRange,
      count: 684,
      isChecked: true,
    },
    {
      label: 'THB 8,000 +',
      value: { from: 8001 },
      count: 125,
      isChecked: true,
    },
  ];

  const handleChangeSlider = (
    event: React.ChangeEvent<any>,
    newValue: number | number[]
  ) => {
    // if (onChangeFilter)
    //   onChangeFilter(event, {
    //     ...filter,
    //     priceRange: { from: newValue[0], to: newValue[1] } as Range,
    //   });
  };

  const handleChangeFromPrice = (event: React.ChangeEvent<any>) => {
    // if (onChangeFilter) {
    //   onChangeFilter(event, {
    //     ...filter,
    //     priceRange: {
    //       ..._.get(filter, 'priceRange', {}),
    //       from: Number(event.target.value),
    //     },
    //   });
    // }
  };

  const handleChangeToPrice = (event: React.ChangeEvent<any>) => {
    // if (onChangeFilter) {
    //   onChangeFilter(event, {
    //     ...filter,
    //     priceRange: {
    //       ..._.get(filter, 'priceRange', {}),
    //       to: Number(event.target.value),
    //     },
    //   });
    // }
  };

  return (
    <>
      <CheckboxGroupSelectWithCount
        selectedValues={
          {
            from: filter.priceRange.from,
            to: filter.priceRange.to,
          } as PriceRange
        }
        items={items}
        checkedColor="green"
        onSelectedValue={(event: any, selectedValues: PriceRange) => {
          handleChangeFilter({ ...filter, priceRange: selectedValues });
        }}
      />
      <FormControl {...{ component: 'fieldset' }}>
        <SliderContainer>
          <Slider
            step={100}
            min={1}
            max={8000}
            value={[
              _.get(filter, 'priceRange.from', 1),
              _.get(filter, 'priceRange.to', 8000),
            ]}
            valueLabelDisplay="auto"
            onChange={handleChangeSlider}
          />
        </SliderContainer>
      </FormControl>
      <FormControl {...{ component: 'fieldset' }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={5}>
            <TextField
              value={numeral(_.get(filter, 'priceRange.from', 1)).format('0,0')}
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">฿</InputAdornment>
                ),
              }}
              onChange={handleChangeFromPrice}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography align="center">-</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              value={numeral(_.get(filter, 'priceRange.to', 8000)).format(
                '0,0'
              )}
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">฿</InputAdornment>
                ),
              }}
              onChange={handleChangeToPrice}
            />
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
};

export default PriceRangeGroupSelect;
