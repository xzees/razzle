import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import i18n from 'utilities/I18n';
import ColorManager from 'common/Manager/ColorManager';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import { BeatLoader } from 'react-spinners';

const TextTotalSearchComp = styled.div<any>`
  border: none;
  float: right; 
  flex-direction: ${(props: any) => props.flexDirection ? props.flexDirection : ''};
  font-size: 1.3rem;
  font-family: "DBHeaventRoundedMedv32";
  align-items: center;
  text-align: right !important;
  height: 40px;
  padding: 0;
  display: inline-flex;
  color: ${ColorManager.default.black};
  line-height: 0.7;
`;

interface Iprops {
    stores?: RootStore;
}

const index = inject('stores')(
    observer((props: Iprops) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;

    return (
        <TextTotalSearchComp flexDirection={ !uiStore.dataComplete ? 'column' : 'initial' }>
            {!uiStore.dataComplete && <BeatLoader size={8} color={ColorManager.default.secondaryColor} />}
            {i18n.t('hotel.components.filterbar.lblfound')} {uiStore.returnSearchModel.length == 0 ? '0' : uiStore.returnSearchModel.length} {i18n.t('common.hotel')}
        </TextTotalSearchComp>
    );
}));


export default index;