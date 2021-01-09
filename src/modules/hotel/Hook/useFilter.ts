import React, { useEffect } from 'react';
import _ from 'lodash';
import Scroll from 'react-scroll';
import ListStoresInterface from 'modules/hotel/interface/Component/ListStores';

const useFilter = (props: ListStoresInterface) => {
    const {
        uiStore
    } = props;
    let delayDebounceFn: any;
    const [state , setState] = React.useState<any[]>([])
    
    const fnsearchModel = () => {
        return () => {
            const fn = () => {
                setState(reloadItem());
            };
            setTimeout(fn, 500);
        };
    };

    const fnRow = () => {
        return () => {
            setState(reloadItem());
        };
    };

    const fnForCheckReload = async () => {
        setState(reloadItem());
        uiStore.setCheckReload(false);
    };

    const fnFilterSort = () => {
        return () => {
            Scroll.scroller.scrollTo('beginItem',{
                duration: 0,
                delay: 0,
                smooth: true,
                offset: -100,
            });
            clearTimeout(delayDebounceFn);
            uiStore.setCheckReload(true);
            uiStore.setRow(10);
            delayDebounceFn = setTimeout(fnForCheckReload, 500);
        };
    };

    useEffect(fnsearchModel, [uiStore.searchModel]);
    useEffect(fnRow, [uiStore.Row]);
    useEffect(fnFilterSort, [uiStore.filter, uiStore.sort]);
    
    const reloadItem = () => {
        const filterHotel = filterSort(
            filterPayment(
                filterPrice(
                    filterStar(
                        uiStore.returnSearchModel
                    )
                )
            )
        );
        if (uiStore.returnRow >= filterHotel.length) {
            uiStore.setHasLoadmore(true);
        } else {
            uiStore.setHasLoadmore(false);
        }
        return paginate(filterHotel, uiStore.returnRow , 1);
    };

    const paginate = (array: any[], pageSize: number, pageNumber: number) => {
        return _.slice(array, (pageNumber - 1) * pageSize, pageNumber * pageSize);
    };

    const filterStar = (value: any) => {
        if (uiStore.filter.star.length > 0) {
            const star = uiStore.filter.star;
            return _.filter(value, (hotelitem) => { 
                return _.includes(star, hotelitem.class);
            });
        }
        return value;
    };

    const filterPrice = (value: any) => {
        if (uiStore.filter.price.length > 0) {
            const filterPriceHotel: any[] = [];      
            uiStore.filter.price.map((item: any) => {
            const filterPrice: any = _.filter(value, ({price}) => price >= item.start && price <= item.end);
                filterPriceHotel.push(...filterPrice);
            });
            return filterPriceHotel;
        }
        return value;
    };

    const filterSort = (value: any) => {
        return _.orderBy(value, uiStore.sort.name, uiStore.sort.ordering);
    };

    const filterPayment = (value: any) => {
        
        if (uiStore.filter.payment.pay_at_property) {
            return _.filter(value, {'blockDetail.pocilities.payAtProperty': uiStore.filter.payment.pay_at_property });
        }

        if (uiStore.filter.payment.no_require_credit_card) {
            return _.filter(value, {'creditcardRequired': uiStore.filter.payment.no_require_credit_card });
        }
        
        return value;
    };

    return {
        items: state
    };
};

export default useFilter;