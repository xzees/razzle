import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
    SectionDesktop,
    Containers
} from 'modules/hotel/component/Banner/List/Style'
import _ from 'lodash';
import Header from './Header/Desktop';
import { Link, Events} from "react-scroll";
import { Box, styles, backgroungWhiteStyle} from '../Layout/Content/Desktop/styles';
import{ default as HotelHeader }  from './Content/Desktop/Header';
import{ default as HotelPhotoGallery }  from './Content/Desktop/PhotoGallery';
import{ default as HotelDescription }  from './Content/Desktop/Description';
import{ default as HotelFacilityPopular }  from './Content/Desktop/FacilityPopular';
import{ default as HotelNearBy }  from './Content/Desktop/NearBy';
import{ default as HotelRoomList }  from './Content/Desktop/RoomList';
import{ default as HotelFacilityAll }  from './Content/Desktop/FacilityAll';
import{ default as HotelPolicy }  from './Content/Desktop/Policy';
import{ default as HotelReview }  from './Content/Desktop/Review';
import{ default as HotelRelate }  from './Content/Desktop/Relate';
import CartFooter  from 'modules/hotel/component/Cart/Footer';
import i18n from 'utilities/I18n';
import { inject, observer } from 'mobx-react';
import Loading from 'modules/hotel/component/Loading';

const LayoutDesktop = inject('stores')(
    observer((props: any) => {
    const uiStore = props.stores!.HotelRootStore;
    const jumpNavigation = useRef<HTMLElement | null>(null);
    const mainContent = useRef<HTMLElement | null>(null);

    const detailContent = useRef<HTMLElement | null>(null);
    const nearbyContent = useRef<HTMLElement | null>(null);
    const roomListContent = useRef<HTMLElement | null>(null);
    const facilityContent = useRef<HTMLElement | null>(null);
    const policyContent = useRef<HTMLElement | null>(null);
    const reviewContent = useRef<HTMLElement | null>(null);
    const relateContent = useRef<HTMLElement | null>(null);

    const jumpNavigationData = [{title:i18n.t('hotel.pages.roomlist.layoutdesktop.overall'), offsetTop: 0, element: 'detailContent', refElm: detailContent  },
        {title:i18n.t('hotel.pages.roomlist.desktop.nearby.nearby'), offsetTop: 0, element: 'nearbyContent', refElm:nearbyContent },
        {title:i18n.t('hotel.components.hotelreview.message.filterbutton.roomtype'), offsetTop: 0, element: 'roomListContent', refElm:roomListContent },
        {title:i18n.t('hotel.pages.roomlist.desktop.facilities.hdservices'), offsetTop: 0, element: 'facilityContent', refElm:facilityContent },
        {title:i18n.t('hotel.pages.roomlist.desktop.policy.header'), offsetTop: 0, element: 'policyContent', refElm:policyContent },
        {title:i18n.t('hotel.pages.roomlist.desktop.review.header'), offsetTop: 0, element: 'reviewContent', refElm:reviewContent },
        {title:i18n.t('hotel.pages.roomlist.desktop.relate.header'), offsetTop: 0, element: 'relateContent', refElm:relateContent }];
    const [jumpNavigationLink, setJumpNavigationLink] = useState<any[]>(jumpNavigationData);
    const [jumpNavigationActive, setJumpNavigationActive] = useState<number>(0);


    const handleScroll = () => {
        const windowsScrollTop:number = window.pageYOffset;
        const jn = jumpNavigation.current;
        const mc = mainContent.current;
        if (windowsScrollTop >= 100) {
            if (jn) {
                jn.style.visibility = 'visible';
                jn.style.opacity = '1';
                jn.style.height = 'auto';
            }
            if (mc) {
                mc.style.marginTop = '70px';
            }
        } else {
            if (jn) {
                jn.style.visibility = 'hidden';
                jn.style.opacity = '0';
                jn.style.height = '0';
                jn.style.transition = 'visibility 0s, opacity 0.3s linear';
            }
            if (mc) {
                mc.style.marginTop = '0';
                mc.style.transition = 'all 0.3s';
            }
        }
        jumpNavigationLink.map((item:any, index:number) => {
            const offset = 175;
            if(index == 0){
                if(windowsScrollTop < jumpNavigationLink[index+1].offsetTop-offset)
                {
                    setJumpNavigationActive(index);
                }
            }else if(index > 0 && index < jumpNavigationLink.length-1){
                if(windowsScrollTop > item.offsetTop-offset && windowsScrollTop < jumpNavigationLink[index+1].offsetTop-offset)
                {
                    setJumpNavigationActive(index);
                }
            } else {
                if(windowsScrollTop > item.offsetTop-offset)
                {
                    setJumpNavigationActive(index);
                }
            }
        });
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        if(jumpNavigationLink[jumpNavigationLink.length-1].offsetTop == 0 && jumpNavigationLink[jumpNavigationLink.length-1].refElm.current){
            let tempJumpNavigate: any[] = [];
            const windowsScrollTop:number = window.pageYOffset;
            jumpNavigationLink.map((item:any, index:number) => {
                if(item.offsetTop == 0 && item.refElm.current){
                    const elTop = Math.round(item.refElm.current.getBoundingClientRect().top+windowsScrollTop);
                    tempJumpNavigate.push({...item, offsetTop: elTop });
                }
            });
            setJumpNavigationLink(tempJumpNavigate);
        }

        Events.scrollEvent.register('begin', function () {
            jumpNavigationLink.map((item:any, index:number) => {
                if(item.element==arguments[0]) {
                    setJumpNavigationActive(index);
                }
            });
        });
    
        Events.scrollEvent.register('end', function () {
            //console.log("end", arguments);
        });

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        }
    },[])
    return (
        <>
            <Header {...props}/>
            {_.values(uiStore.RoomlistStore.data).length == 0 && <Loading />}
            {_.values(uiStore.RoomlistStore.data).length > 0 && <>
            <styles.MyJumpNavigationContainer ref={jumpNavigation}> 
                    <Containers>
                        <Box px={6} py={2}>  
                        <styles.MyBreadcrumbs aria-label="breadcrumb">
                            {
                                jumpNavigationLink.map((item:any, index:number) => {
                                    return (
                                        <Link className={`${(index == jumpNavigationActive) ? 'active': ''}`} to={item.element} spy={true} smooth={true} duration={500} offset={-180}>
                                            {item.title}
                                        </Link>
                                    )
                                })
                            }
                        </styles.MyBreadcrumbs>
                        </Box>
                    </Containers>  
            </styles.MyJumpNavigationContainer>
            
            <SectionDesktop ref={mainContent}> 
                <Containers>
                    <HotelHeader {...props} refName="detailContent" refComp={detailContent}/>
                    <HotelPhotoGallery {...props} refName="" refComp={null}/>
                    <HotelDescription {...props} refName="" refComp={null}/>
                    <HotelFacilityPopular {...props} refName="" refComp={null}/>
                    <Box component="div" p={6} style={backgroungWhiteStyle}>
                        <styles.HotelDetailDivider/>
                    </Box>
                    <HotelNearBy {...props} refName="nearbyContent" refComp={nearbyContent}/>
                    <HotelRoomList {...props} refName="roomListContent" refComp={roomListContent}/>
                    <HotelFacilityAll {...props} refName="facilityContent" refComp={facilityContent}/>
                    <HotelPolicy {...props} refName="policyContent" refComp={policyContent}/>
                    <HotelReview {...props} refName="reviewContent" refComp={reviewContent}/>
                    <HotelRelate {...props} refName="relateContent" refComp={relateContent}/>
                </Containers>    
            </SectionDesktop>
            <CartFooter {...props} isMobile={false}/>
            </>}
        </>
    );
}));

export default LayoutDesktop;