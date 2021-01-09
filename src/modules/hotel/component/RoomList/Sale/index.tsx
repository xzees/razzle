import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import {
    MText,
    boxStyle,
    iconStyle
} from 'modules/hotel/component/RoomList/Sale/Style';
import i18n from 'utilities/I18n';

const index = (props: any) => {
    return (
        <Box style={{ ...boxStyle }} >
            <MText>
                <a href={'/'}>
                    <span className={'tooltiptext'} >
                        {i18n.t('hotel.components.roomlist.sale.lblsalemore')} 10%
                        <ErrorRoundedIcon
                            style={iconStyle}
                        />
                    </span>
                </a>
            </MText>
        </Box>
    );
};

export default index;