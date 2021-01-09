import React, { useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import Image from '../Image';
import Layout from '../Layout';
import Title from '../Title';
import Price from '../Price';
import _ from 'lodash';
import Guest from '../Guest'
import Bed from '../Bed';
import Select from '../Select'
import Rerv from '../Resv'
import Option from '../Option'
import BlockModel from 'modules/hotel/models/BlockModel';
import { inject, observer } from 'mobx-react';
import HotelRoomListInterface from 'modules/hotel/component/HotelRoomList/HotelRoomListInterface';
import ReservationModel from 'modules/hotel/models/ReservationModel';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const index = (props: any) => {
    // const uiStore = props.stores!.HotelRootStore;
    // const hotelData = uiStore.RoomlistStore.data;
    // const reservation = uiStore.ReservationStore.reservation;
    //const [amountRoomSelect, setamountRoomSelect] = useState<number>(0);
    const textHeaderStyle = { fontSize: FontManager.default.TEXT_20, fontFamily: FontManager.default.secondaryFont, color: ColorManager.default.redColor, };
    const textBoldStyle = { fontSize: FontManager.default.TEXT_TINY_18, fontFamily: FontManager.default.secondaryFont };
    const textnormalStyle = { fontSize: FontManager.default.TEXT_TINY_18 };
    return (
        <Layout isMobile={props.isMobile}>
            {_.values(props.block) 
            .filter(v=> v!=undefined)
            .map((v: BlockModel, k: number) => {
                //v.setSelectedAmount(123);
                return (
                    <Grid container>
                        <Grid item xs={12}>
                            {k==0 && 
                                <Image 
                                parent_props={v}
                                room_photos={v.roomPhotos}
                                check={0}
                                title={v.name}
                                isMobile={props.isMobile}
                                coverImage={v.roomPhotos.length > 0 ? v.roomPhotos[0].urlOriginal : ''}/>
                            }               
                        </Grid> 
                        <Box p={4}> 
                            <Grid container style={{marginBottom: '-10px'}}>
                                <Grid item={true} xs={12} style={{marginBottom: '10px'}}>
                                    {k == 0 && <Title propName={v.roomName} />}
                                </Grid>
                                <Grid item={true} xs={12} 
                                style={{marginBottom: '10px', 
                                    borderBottom: '1px solid #e0e0e0 !important',
                                    paddingBottom: '20px'}}>
                                    <Grid container={true} spacing={0}>
                                        <Option {...props} parent_props={v} />
                                    </Grid>        
                                </Grid>
                                <Grid item={true} xs={6} 
                                    style={{marginBottom: '15px', 
                                        borderRight: '1px solid #e0e0e0 !important',
                                        marginTop: '10px'
                                    }}>
                                    <Bed {...props}></Bed>
                                </Grid>
                                <Grid item={true} xs={6} style={{marginBottom: '15px', marginTop: '10px'}}>
                                    <Guest {...props}></Guest>
                                </Grid>
                                <Grid item={true} xs={4} 
                                    style={{
                                        alignItems: 'flex-end',
                                        display: 'flex',
                                        borderTop: '1px solid #e0e0e0 !important',
                                    }}>
                                    <Select 
                                        parent_props={v}
                                        {...props}
                                        color={''}
                                    />
                                </Grid>
                                <Grid item={true} xs={8} style={{borderTop: '1px solid #e0e0e0 !important', paddingTop: '20px'}}>
                                    { 
                                    (v.incrementalPrice) && <Price 
                                        isMobile={true}
                                        href={''}
                                        title={''}
                                        discount
                                        block={v}
                                    />
                                    }
                                    
                                </Grid>
                            </Grid>
                            
                            {/* <Grid container spacing={0}>
                                        <Grid item xs={12}>
                                            <Accordion>
                                                <AccordionSummary>
                                                    <Typography style={textHeaderStyle}>{v.paymentTerms.name}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Box component="span" p={0}>
                                                        <Typography style={textBoldStyle}>เงื่อนไขการการจอง</Typography>
                                                        <Typography style={textnormalStyle}>- {v.paymentTerms.prepaymentDescription}</Typography>
                                                        <Typography style={textBoldStyle}>เงื่อนไขการยกเลิกการจอง</Typography>
                                                        <Typography style={textnormalStyle}>- {v.paymentTerms.cancellationDescription}</Typography>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Grid>
                                    </Grid> */}
                        </Box>
                        {/* <Grid container>
                            <Grid item={true} xs={12}>
                                <Rerv {...props} >
                                </Rerv>
                            </Grid>
                        </Grid>                       */}
                    </Grid>
                )
            })}
        </Layout>
    ); 
};

export default index;