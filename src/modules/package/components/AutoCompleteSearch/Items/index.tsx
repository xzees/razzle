import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Skeleton } from '@material-ui/lab';
import PopularCountryItem from '../PopularCountryItem';
import DestinationItem from '../DestinationItem';
import HistoryItem from '../HistoryItem';
import {
  ContainerListItem,
  ListBox,
  ListItemBoxLoading,
  ListItem,
  SkeletonLoadingCountryIcon,
  ListItemHeader,
  ListItemLoading,
  CityPopularButton,
} from './Style';

type Props = {
  inputValue: string;
  groupedOptions: any[];
  histories: any[];
  loading: boolean;
  isMobile: boolean;
  getListboxProps: () => {};
  getOptionProps: ({ option, index }: { option: any; index: number }) => {};
};

const Items: FunctionComponent<Props> = (props: Props) => {
  const {
    inputValue,
    groupedOptions,
    histories,
    loading,
    isMobile,
    getListboxProps,
    getOptionProps,
  } = props;

  const citiesPopularsItems = [
    'ฮ่องกง',
    'มาเก๊า',
    'กรุงเทพๆ',
    'เชียงใหม่',
    'ภูเก็ต',
    'โซล',
    'โตเกียว',
    'โอซาก้า',
    'เกียวโต',
    'ฮอกไกโด',
  ];

  const popularItems = [
    {
      destination: {
        country: {
          code: 'th',
          name: 'ไทย',
        },
        city: {
          code: 'pu',
          name: 'ภูเก็ต',
        },
        zone: {
          code: 'pu',
          name: 'ภูเก็ต',
        },
      },
      count: 199,
    },
    {
      destination: {
        country: {
          code: 'ja',
          name: 'ญี่ปุ่น',
        },
        city: {
          code: 'to',
          name: 'โตเกียว',
        },
        zone: {
          code: 'to',
          name: 'โตเกียว',
        },
      },
      count: 225,
    },
  ];

  if (loading || (inputValue.length && groupedOptions.length)) {
    return (
      <ListBox {...getListboxProps()}>
        <ListItemHeader>
          พิมพ์เพิ่มเติม เพื่อการค้นหาที่ละเอียดขึ้น
        </ListItemHeader>
        {loading ? (
          <ListItemBoxLoading>
            <ListItemLoading inline>
              <SkeletonLoadingCountryIcon
                height={40}
                width={40}
                animation="wave"
              />
              <Skeleton height={29} width="30%" animation="wave" />
            </ListItemLoading>
            <ListItemLoading>
              <Skeleton height={29} width="100%" animation="wave" />
              <Skeleton height={29} width="30%" animation="wave" />
            </ListItemLoading>
            <ListItemLoading>
              <Skeleton height={29} width="100%" animation="wave" />
              <Skeleton height={29} width="30%" animation="wave" />
            </ListItemLoading>
          </ListItemBoxLoading>
        ) : (
          <ContainerListItem isMobile={isMobile}>
            {_.map(groupedOptions, (option: any, index: number) => {
              return (
                <DestinationItem
                  item={option}
                  optionProps={getOptionProps({ option, index })}
                />
              );
            })}
          </ContainerListItem>
        )}
      </ListBox>
    );
  } else if (inputValue.length) {
    return (
      <ListBox>
        <ListItemHeader>ไม่พบข้อมูล</ListItemHeader>
      </ListBox>
    );
  }

  return (
    <ListBox {...getListboxProps()}>
      {!!histories.length && (
        <>
          <ListItemHeader>การค้นหาที่ผ่านมา</ListItemHeader>
          {_.map(groupedOptions, (option: any, index: number) => {
            return (
              <HistoryItem
                item={option}
                optionProps={getOptionProps({ option, index })}
              />
            );
          })}
        </>
      )}
      {!!popularItems.length && (
        <>
          <ListItemHeader>เมืองที่ยอดนิยม</ListItemHeader>
          {isMobile ? (
            _.map(popularItems, (item: any) => {
              return <PopularCountryItem item={item} />;
            })
          ) : (
            <ListItem>
              {_.map(citiesPopularsItems, (item: any) => {
                return <CityPopularButton>{item}</CityPopularButton>;
              })}
            </ListItem>
          )}
        </>
      )}
    </ListBox>
  );
};

export default Items;
