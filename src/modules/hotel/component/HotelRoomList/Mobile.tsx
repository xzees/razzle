import React from 'react';
import _ from 'lodash';
import RoomList from 'modules/hotel/component/RoomList/Mobile'
import BlockModel from 'modules/hotel/models/BlockModel';
import { inject, observer } from 'mobx-react';
    
const Mobile = inject('stores')(
  observer((props: any) => {
    const uiStore = props.stores!.HotelRootStore;
    const block = uiStore.RoomlistStore.returnData.block;

    const item = () => {
      return (
        <>
          {block.map((v: any, index:number)=>{
            return (
              <RoomList isMobile={props.isMobile} block={v} key={index} />
            )
          })}
        </>
      )
    }

    return (
        <>
            {item()}
        </>
    );
}));

export default Mobile;
