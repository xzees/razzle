import React from 'react';
import {
  UlDivInSideMobile,
  MLabel,
} from 'modules/hotel/component/Autocomplete/Style';
import i18n from 'utilities/I18n';
import GetItem from 'modules/hotel/component/Autocomplete/Items/GetItem';
import HistoryInterface from 'modules/hotel/component/Autocomplete/History/HistoryInterface';

const Mobile = (props: HistoryInterface) => {

    const {
        radius,
        obj
    } = props;

    return (
        <>
            <MLabel radius="false">
                {i18n.t('hotel.search.history')}
            </MLabel>
            <UlDivInSideMobile>
                <GetItem {...obj} {...props} groupedOptions={props.history} getPropsItem={props.propsHistory} />
            </UlDivInSideMobile>
        </>
    );
};

export default Mobile;