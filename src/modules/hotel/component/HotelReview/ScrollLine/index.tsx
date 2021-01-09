import React from 'react';
import styled from "styled-components";
import Item from './item'
import _ from 'lodash';
import i18n from 'utilities/I18n';

interface IDataReview { title: string, scroll: number, displayscroll: string}
const styles = {
    MyContainer: styled.div<any>`
        margin-bottom: 10px;
    `,
}
export default function index(props: any) {
    const { displaytype } =  props;
    let reviewItemScroll:IDataReview[] = [];
    if(displaytype == 1){
        reviewItemScroll = [
                { title: i18n.t('hotel.components.hotelreview.scrollline.title001'), scroll: 72, displayscroll: '7.2' },
                { title: i18n.t('hotel.components.hotelreview.scrollline.title002'), scroll: 70, displayscroll: '7.0'  },
                { title: i18n.t('hotel.components.hotelreview.scrollline.title003'), scroll: 86, displayscroll: '8.6' },
                { title: i18n.t('hotel.components.hotelreview.scrollline.title004'), scroll: 75, displayscroll: '7.5' },
                { title: i18n.t('hotel.components.hotelreview.scrollline.title005'), scroll: 80, displayscroll: '8.0' },
        ]
    }else if(displaytype == 2){
        reviewItemScroll = [
            { title: i18n.t('hotel.components.hotelreview.scrollline.title006'), scroll: 80, displayscroll: '11' },
            { title: i18n.t('hotel.components.hotelreview.scrollline.title007'), scroll: 45, displayscroll: '5'  },
            { title: i18n.t('hotel.components.hotelreview.scrollline.title008'), scroll: 20, displayscroll: '2' },
            { title: i18n.t('hotel.components.hotelreview.scrollline.title009'), scroll: 7, displayscroll: '1' },
            { title: i18n.t('hotel.components.hotelreview.scrollline.title010'), scroll: 0, displayscroll: '0' },
        ]
    }

    const item = (dataLists: IDataReview[]) => {
        let listsRes:any[] = [];
        // console.log("hotelFacilityComponent -> hotelInfo?.facility", hotelInfo?.facility[0].hotel_facility)
        _.forEach(dataLists, function(listItem, index) {
            listsRes.push(
                <Item {...listItem} key={index}/>
            )
        });
        return listsRes;
    }

    return (
        <styles.MyContainer>
           {item(reviewItemScroll)}
        </styles.MyContainer>
    );
}