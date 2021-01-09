import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import {
  CityWrapper,
  CountWrapper,
  UnitWrapper,
  ZoneWrapper,
  ListItem,
} from './Style';

type Props = {
  item: any;
  index?: number;
  getOptionProps?: ({ option, index }: { option: any; index: number }) => {};
};

const PopularCountryItem: FunctionComponent<Props> = ({
  item,
  index,
  getOptionProps,
}) => {
  return (
    <ListItem
      {...(getOptionProps && !_.isUndefined(index)
        ? getOptionProps({ option: item, index })
        : {})}
    >
      <Grid container>
        <Grid item xs={7}>
          <ZoneWrapper>{_.get(item, 'destination.zone.name')}</ZoneWrapper>
        </Grid>
        <Grid item xs={5}>
          <CountWrapper>{_.get(item, 'count')}</CountWrapper>
        </Grid>
        <Grid item xs={7}>
          <CityWrapper>
            {`เมือง : ${_.get(item, 'destination.city.name')}, ${_.get(
              item,
              'destination.country.name'
            )}`}
          </CityWrapper>
        </Grid>
        <Grid item xs={5}>
          <UnitWrapper>กิจกรรม</UnitWrapper>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default PopularCountryItem;
