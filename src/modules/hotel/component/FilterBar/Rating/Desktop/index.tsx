import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import RatingListItem from './item';
import List from '@material-ui/core/List';
import styled from "styled-components";
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Loading from 'modules/hotel/component/Loading';

interface IRating {
    label: string; 
    star: number;
    count: number;
}

const styles = {
    MyFormControlStyle: styled<any>(FormControl)`
        &.MuiFormControl-root {
            width: 100%;
            margin-bottom: 16px;
            padding: 0;
            height: auto;
        },
        .MuiListItem-gutters {
            padding-left: 16px;
        },
        .MuiListItemSecondaryAction-root {
            right: 8px;
        },
    `,
}

interface Iprops {
    stores?: RootStore;
    onReset: boolean;
}

const index = inject('stores')(
    observer((props: Iprops) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const starFilterSelected = uiStore.filter.star;
    const { onReset } = props;

    const [ratingData, setRatingData] = useState<IRating[]>([]);

    const [countHotelClass, setCountHotelClass] = useState<any>();

    const onRatingItemChange = (ratingItem: IRating) => {
        if(_.includes(starFilterSelected, ratingItem.star)){
            const filterStar = _.filter(starFilterSelected, (star) => { return ratingItem.star != star; });
            uiStore.setFilter({star: [...filterStar]});
        }else{
            uiStore.setFilter({star: [...starFilterSelected, ratingItem.star]});
        }
    }

    useEffect(() => {
        if(uiStore.dataComplete){
            if(!(_.isEqual(countHotelClass, uiStore.returnCountHotelClass))){
                setCountHotelClass(uiStore.returnCountHotelClass);
                let tempDataArr:IRating[] = [];
                for (let i=5;i>=2;i--){
                    try {
                        if(uiStore.returnCountHotelClass[i] > 0){
                            tempDataArr.push({label:i.toString(),star:i,count:uiStore.returnCountHotelClass[i]});
                        }
                    ​​} catch (error) {
                        ​​  console.log("Error. : " + error);
                    ​​}
                }
                setRatingData(tempDataArr);
            }
        }else{
            setRatingData([])
        }
    },[uiStore.returnCountHotelClass , uiStore.dataComplete , uiStore.priceControl]);

    return (
        <styles.MyFormControlStyle component="fieldset">
            <List>
            {
                ratingData.map((itemData: IRating, i: number) => { 
                        return (<RatingListItem key={i} inx={i} itemData={itemData} isChecked={_.includes(starFilterSelected, itemData.star)} ratingItemChange={(item:IRating) => onRatingItemChange(item)}/>) 
                })
            }
            {ratingData.length == 0 && <Loading />}
            </List>
        </styles.MyFormControlStyle>
    );
}));

export default index;