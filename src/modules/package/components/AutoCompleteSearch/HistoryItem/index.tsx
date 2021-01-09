import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import {
  Name,
  ListItem,
  NameWrapper,
  CountryWrapper,
  CountryIcon,
} from './Style';

type Props = {
  item: any;
  optionProps: any;
};

const HistoryItem: FunctionComponent<Props> = ({ item, optionProps }) => {
  return (
    <ListItem {...optionProps}>
      <NameWrapper>
        {_.get(item, 'type') === 'country' && <CountryIcon />}
        <Name>{_.get(item, 'name')}</Name>
      </NameWrapper>
      {_.get(item, 'type') === 'activity' && (
        <CountryWrapper>{_.get(item, 'countryName')}</CountryWrapper>
      )}
    </ListItem>
  );
};

export default HistoryItem;
