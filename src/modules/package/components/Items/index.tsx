import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import Heading from 'common/src/components/Heading';
import SearchItem from 'modules/package/components/SearchItem';
import SearchItemLoading from '../SearchItem/Loading';
import Promotion from './Promotion';
import { List, title } from './Style';

type Props = {
  items: any[];
  isLoading: boolean;
  isMobile: boolean;
};

const Items: FunctionComponent<Props> = (props: Props) => {
  const { items, isLoading, isMobile } = props;

  return (
    <>
      <List>
        <Promotion isMobile={isMobile} />
        {!isLoading && items.length === 0 && (
          <Heading content={'ไม่พบข้อมูล'} {...title} />
        )}
        {items.length > 0 &&
          _.map(items, (item: any, index: number) => {
            return <SearchItem item={item} index={index} isMobile={isMobile} key={index}/>;
          })}
        {isLoading && <SearchItemLoading isMobile={isMobile} />}
      </List>
    </>
  );
};

export default Items;
