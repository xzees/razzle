import React, { FunctionComponent } from 'react';
import Heading from 'common/src/components/Heading';
import SortingBar from '../SortingBar';
import { SearchDetailWrapper, TitleWrapper, Detail, h1Style } from './Style';

type Props = {
  title: string;
  sorting: Sorting;
  onChangeSorting: (event: React.ChangeEvent<any>, newValue: Sorting) => void;
};

const SearchDetail: FunctionComponent<Props> = ({
  title,
  sorting,
  onChangeSorting,
}) => {
  return (
    <SearchDetailWrapper>
      <TitleWrapper>
        <Heading content={`ผลการค้นหา : ${title}`} {...h1Style} />
        <Detail>
          พบกิจกรรม 999 กิจกรรม และแสดงผลตามการแนะนำที่เหมาะสมกับคุณ
        </Detail>
      </TitleWrapper>
      <SortingBar sorting={sorting} onChangeSorting={onChangeSorting} />
    </SearchDetailWrapper>
  );
};

export default SearchDetail;
