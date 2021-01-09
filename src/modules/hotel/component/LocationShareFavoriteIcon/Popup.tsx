import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import Modal from 'modules/hotel/component/ModalSlide/Modal'
import BtnClose from 'modules/hotel/component/ModalSlide/BtnClose'
import _ from 'lodash';

import ColorManager from 'common/Manager/ColorManager';


const containerStyle = { backgroundColor: ColorManager.default.black, padding: '0.5rem' };

const Popup = (props: any) => {
    const {handleClose, open} = props;

    return (
        <Modal
            handleClose={handleClose}
            open={open}
        >
            <Box width={'90%'}
                maxWidth={'1200px'}
                marginTop={'-50px'}
            >
                <BtnClose
                    onClick={handleClose}
                />
                <Grid container={true} style={containerStyle} spacing={4}>
                    <Grid item={true} xs={12}>
                        <Box style={{ height: '600px' }}>
                            {props.children}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default Popup;