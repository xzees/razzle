
import React from 'react';
import Promo from 'modules/hotel/component/SearchHotel/Promo';
import _ from 'lodash';
import styled from 'styled-components';
import LoadingForFilterAction from './LoadingForFilterAction';
import RenderItem from './RenderItem';
import LoadingForLoadMoreAction from './LoadingForLoadMoreAction';
import LoadMoreButton from './LoadMoreButton';
import ItemInterface from 'modules/hotel/pages/hotel_list/Layout/Items/ItemInterface';

const List = styled.ul`
  list-style: none
  margin: 0
`;

type ItemInterfaces = Omit<ItemInterface, 'stores'>

const Items = (props: ItemInterfaces) => {
    return (
        <>
            <List >
                <Promo {...props} /> 
                <LoadingForFilterAction {...props} />
                <RenderItem {...props} />
                <LoadingForLoadMoreAction {...props} />
                <LoadMoreButton {...props} />
            </List> 
        </>
    );
};

export default Items;