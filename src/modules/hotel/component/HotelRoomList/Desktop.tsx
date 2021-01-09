import React from 'react';
import _ from 'lodash';
import { StoreContext } from 'modules/hotel/pages/room_list/index'
import RoomList from 'modules/hotel/component/RoomList'
import ColorManager from 'common/Manager/ColorManager';
import styled from 'styled-components';
import FontManager from 'modules/hotel/Manager/FontManager';
import { Grid, Box } from '@material-ui/core'
import { inject, observer } from 'mobx-react';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import i18n from 'utilities/I18n';
import BlockModel from 'modules/hotel/models/BlockModel';
import HotelRoomListInterface from 'modules/hotel/component/HotelRoomList/HotelRoomListInterface';

const ViewButton = styled.a<any>`
  border: 2px solid ${ColorManager.default.fifthColor};
  border-radius: 4px;
  color: ${ColorManager.default.fifthColor};
  display: table-cell;
  font-size: ${FontManager.default.text};
  height: 2.8125rem;
  justify-content: center;
  background-color: ${ColorManager.default.white};
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  cursor: pointer;
  padding: 8px 18px;
  font-family: "DBHeaventRoundedMedv32";
  :hover {
    background-color: ${ColorManager.default.fifthColor};
    color: ${ColorManager.default.white};
  }
`;

const DisableButton = styled.a<any>`
  border: 2px solid ${ColorManager.default.fourthColor};
  border-radius: 4px;
  color: ${ColorManager.default.fourthColor};
  display: table-cell;
  font-size: ${FontManager.default.text};
  height: 2.8125rem;
  justify-content: center;
  background-color: ${ColorManager.default.white};
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  cursor: pointer;
  padding: 8px 18px;
  font-family: "DBHeaventRoundedMedv32";
 
`;

function difference(object: any, base: any) {
	return _.transform(object, (result: any, value: any, key: any) => {
		if (!_.isEqual(value, base[key])) {
			result[key] = _.isObject(value) && _.isObject(base[key]) ? difference(value, base[key]) : value;
		}
	},{});
}

const Desktop = inject('stores')(
  observer((props: HotelRoomListInterface) => {
    
    const uiStore = props.stores!.HotelRootStore;
    const block = uiStore.RoomlistStore.returnFilterBlock;

    const boxStyle = {
      marginRight: '7px',
      marginBottom: '7px',
      padding: 0,
    };

    const isClient = typeof window === 'object';

    const item = () => {
      return (
        <>
          <Box 
            display={'flex'} 
            flexWrap={'wrap'} 
            style={{
              paddingTop: '20px',
              paddingBottom: '30px'
            }}
          >   
            {uiStore.RoomlistStore.getfilterBtn.map((v) => {
              return (
                <Box style={boxStyle}>
                  {(!isNaN(v.number) && v.number > 0) ? <ViewButton
                    style={{
                      backgroundColor: v.active && ColorManager.default.fifthColor,
                      color: v.active && ColorManager.default.white
                    }}
                    onClick={v.onClick}
                  >{v.text} ({v.number})</ViewButton> : <DisableButton>{v.text} (0)</DisableButton>}
                </Box>
              )
            })} 
            
              <Box style={boxStyle}> 
                <DisableButton>{i18n.t('hotel.components.desktop.ready2confirm')} (0)</DisableButton>
              </Box>

              <Box style={boxStyle}> 
                <DisableButton>{i18n.t('hotel.components.desktop.onebed')} 2 {i18n.t('hotel.components.desktop.bed')} (1)</DisableButton>
              </Box>

              <Box style={boxStyle}> 
                <DisableButton>{i18n.t('hotel.components.desktop.onebed')} (0)</DisableButton>
              </Box>

              <Box style={boxStyle}> 
                <DisableButton>{i18n.t('hotel.components.desktop.multibed')} (1)</DisableButton>
              </Box>
            
          </Box>
          {block.map((v: any, index: number)=> {
            return (
              <RoomList key={index} isMobile={false} block={v} {...props} />
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

export default Desktop;