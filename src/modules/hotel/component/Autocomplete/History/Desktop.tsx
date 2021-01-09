import React from 'react';
import {
  UlDivInSideMobile,
  MLabel,
  UlDivInSideHistory
} from 'modules/hotel/component/Autocomplete/Style';
import i18n from 'utilities/I18n';
import GetItem from 'modules/hotel/component/Autocomplete/Items/GetItem';
import HistoryInterface from 'modules/hotel/component/Autocomplete/History/HistoryInterface';

const Items = (props: HistoryInterface) => {

    const {
        radius,
        obj
    } = props;

    return (
        <>
            <MLabel radius="true">
                {i18n.t('hotel.search.history')}
            </MLabel>
            <UlDivInSideHistory radius={radius}>
                <UlDivInSideMobile>
                    <GetItem {...obj} {...props} groupedOptions={props.history} getPropsItem={props.propsHistory} />
                </UlDivInSideMobile>
            </UlDivInSideHistory>
        </>
    );
    
};

export default Items;