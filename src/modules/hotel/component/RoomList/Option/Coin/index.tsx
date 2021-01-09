import React from 'react';
import { Grid , Box } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';
import { 
    Coin
} from 'modules/hotel/component/Icon';
import {
    TextAndIcon,
} from 'modules/hotel/component/RoomList/Option/Style';
import FontManager from 'modules/hotel/Manager/FontManager';
import i18n from 'utilities/I18n';

const index = (props: any) => {

    const gridStyle = {
        padding: 0
    };

    return (
        <>
            <Box >
                <Grid container={true} spacing={0} >          
                    <Grid
                        className={'option2'} 
                        style={gridStyle}
                        item={true} 
                        xs={12} 
                        sm={12} 
                        md={12} 
                        lg={12}
                    >  
                        <TextAndIcon
                            className={'BoxOption11'}
                            fontSize={FontManager.default.TEXT_20}
                            color={ColorManager.default.brown}
                        >
                            <Coin />
                            {i18n.t('hotel.components.roomlist.option.coin.lblregister')}
                        </TextAndIcon>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default index;