import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import LayoutOption, {
    Coin as LayoutCoin,
    Bottom as LayoutBottom
} from 'modules/hotel/component/RoomList/Option/Layout/Desktop';
import Image from 'modules/hotel/component/RoomList/Image';
import LayoutImage from 'modules/hotel/component/RoomList/Image/Layout/Desktop';
import Layout from 'modules/hotel/component/RoomList/Layout';
import Title from 'modules/hotel/component/RoomList/Title';
import LayoutTitle from 'modules/hotel/component/RoomList/Title/Layout/Desktop';
import Option from 'modules/hotel/component/RoomList/Option';
import Bed from 'modules/hotel/component/RoomList/Bed';
import TextImg from 'modules/hotel/component/RoomList/TextImg';
import LayoutPrice from 'modules/hotel/component/RoomList/Price/Layout/Desktop';
import LayoutBed from 'modules/hotel/component/RoomList/Bed/Layout/Desktop';
import Guest from 'modules/hotel/component/RoomList/Guest';
import Detail from 'modules/hotel/component/RoomList/Detail';
import LayoutGuest from 'modules/hotel/component/RoomList/Guest/Layout/Desktop';
import LayoutSelect from 'modules/hotel/component/RoomList/Select/Layout/Desktop';
import Select from 'modules/hotel/component/RoomList/Select';
import Price from 'modules/hotel/component/RoomList/Price';
import _ from 'lodash';
import ModalSlide from 'modules/hotel/component/ModalSlide';
import BlockModel from 'modules/hotel/models/BlockModel';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';

const index = (props: any) => {

    const boxDetailContainerStyle = {
        flexGrow: 0,
        maxWidth: '58%',
        flexBasis: '58%',
    };

    const boxBedGuestContainerStyle = {
        flexGrow: 0,
        maxWidth: '50%',
        flexBasis: '50%',
    };

    return (
        <Layout isMobile={props.isMobile}>
            {_.values(props.block)
                .filter(v => v != undefined)
                .map((v: BlockModel, k: number) => {
                    return (
                        <>
                            <LayoutImage>
                                {k == 0 && <Image
                                    parent_props={v}
                                    room_photos={v.roomPhotos}
                                    check={0}
                                    title={v.roomName}
                                    isMobile={props.isMobile}
                                    coverImage={v.roomPhotos.length > 0 ? v.roomPhotos[0].urlMax300 : ''}
                                />}
                            </LayoutImage>
                            <Box style={boxDetailContainerStyle}>
                                <Grid container>
                                    <LayoutTitle>
                                        {k == 0 && <Title propName={v.roomName} />}
                                    </LayoutTitle>
                                    <LayoutOption>
                                        <Option parent_props={v} />
                                    </LayoutOption>
                                    <Box style={boxBedGuestContainerStyle}>
                                        <Grid container={true} spacing={0} >
                                            <LayoutBed>
                                                <Bed  {...props} />
                                            </LayoutBed>
                                            <LayoutGuest>
                                                <Guest {...props} />
                                            </LayoutGuest>
                                        </Grid>
                                    </Box>
                                    <LayoutCoin>
                                        {/* <Coin {...props} />  */}
                                    </LayoutCoin>
                                    <Grid container={true} spacing={0} >
                                        <Box
                                            style={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                            }}
                                        >
                                            <LayoutBottom>
                                                {k == 0 && <ModalSlide data={v.roomPhotos} content={<Detail {...v} />}>
                                                    <TextImg {...props} />
                                                </ModalSlide>}
                                            </LayoutBottom>
                                            <LayoutSelect>
                                                <div>
                                                    <Select
                                                        parent_props={v}
                                                        {...props}
                                                        color={''}
                                                    />
                                                </div>
                                            </LayoutSelect>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <LayoutPrice>
                                <Price
                                    block={v}
                                    isMobile={false}
                                    href={''}
                                    title={''}
                                    discount
                                />
                            </LayoutPrice>
                        </>
                    )
                })}
        </Layout>
    );
};

export default index;