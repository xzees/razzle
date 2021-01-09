import React, { createRef } from 'react';
import ColorManager from 'common/Manager/ColorManager';
import ModalScreen from 'modules/hotel/component/ModalScreen'
import {
    Style, 
    ViewButton ,
    CalendarScrollContainer
} from './Style';
import RootStore from 'stores';
import { inject, observer } from 'mobx-react';
import Autocomplete from './Section/Autocomplete';
import Calendar from './Section/Calendar';
import Adult from 'modules/hotel/component/Guest/Adult';
import Child from 'modules/hotel/component/Guest/Child';
import i18n from 'utilities/I18n';
import useGuest from 'modules/hotel/Hook/useGuest';

interface IsearchToggleModel {
    setOpen: any;
    closeBtnIcon: any;
    open: boolean;
    stores?: RootStore;
    [key: string]: any;
}

const index = inject('stores')(
    observer((props: IsearchToggleModel) => {
    
    const uiRootStore = props.stores!.HotelRootStore;
    const {
        _handleChange,
        ChildText,
      } = useGuest(uiRootStore);

    const btnClick = () => {
        props.setOpen((!props.open));
    };

    
    const handleClose = () => {
        props.setOpen(false);
    };
     
    const MInputProps = {
        style: {
            fontSize: 21,
            color: ColorManager.default.fourthColor
        },
        readOnly: true,
        value: uiRootStore.vAutocomplete!.tag || ''
    };
    
    const containerRef = createRef<HTMLDivElement>();
    const isClient = typeof window === 'object';
    
    return (
        <>
            {!props.children && <ViewButton onClick={btnClick} >
                {i18n.t('hotel.components.guest.guest.lblmodel')}
            </ViewButton>}
            {props.children}
            <ModalScreen 
                closeBtnIcon={props.closeBtnIcon}
                title={i18n.t('hotel.components.guest.guest.lblmodel')}
                open={props.open}
                setOpen={props.setOpen}
                handleClose={handleClose}
            >
                    <Autocomplete 
                        MInputProps={MInputProps}
                    />
                    <Calendar 
                        isMobile={true}
                        startDates={uiRootStore.vDatepicker.startDate}
                        endDates={uiRootStore.vDatepicker.endDate}
                        stores={props.stores}
                    />
                <CalendarScrollContainer 
                    ref={containerRef} 
                    windowinnerheight={isClient ? window.innerHeight : 0} 
                    style={{ 
                        position: 'relative', 
                        overflow: 'scroll' 
                    }}
                >
                    <Adult  
                        minusChk={1}
                        value={uiRootStore.vRoom}
                        CircleAddClick={()=>{
                            uiRootStore.setvRoom(uiRootStore.vRoom+1);
                        }}
                        CircleRemoveClick={()=>{
                            uiRootStore.setvRoom(uiRootStore.vRoom-1);
                        }}
                        text={i18n.t('hotel.search.room')}
                    />
                    <Adult  
                        minusChk={1}
                        value={uiRootStore.vAdult}
                        CircleAddClick={()=>{
                            uiRootStore.setvAdult(uiRootStore.vAdult+1);
                        }}
                        CircleRemoveClick={()=>{
                            uiRootStore.setvAdult(uiRootStore.vAdult-1);
                        }}
                        text={i18n.t('hotel.search.adult')}
                    />
                    <Adult  
                        minusChk={0}
                        value={uiRootStore.vChild}
                        CircleAddClick={()=>{
                            uiRootStore.setvChild(uiRootStore.vChild+1);
                        }}
                        CircleRemoveClick={()=>{
                            uiRootStore.setvChild(uiRootStore.vChild-1);
                        }}
                        text={i18n.t('hotel.search.child')}
                    />
                    <Child  
                        value={uiRootStore.vChildOld}
                        map={uiRootStore.vChild}
                        btnClickAC={()=>{
                            
                        }}
                        text={ChildText()}
                        childHandleChange={_handleChange}
                    />
                    <div style={{height:100}}>
                    </div>
                </CalendarScrollContainer>
                 <Style.FooterButtonContainer>
                    <Style.FooterButton onClick={uiRootStore.btnSearch} buttontype="submit" > 
                    {i18n.t('hotel.components.seachtoggle.modal.agree')} 
                    </Style.FooterButton>
                </Style.FooterButtonContainer>

            </ModalScreen>
        </>
    );
}));

export default index;