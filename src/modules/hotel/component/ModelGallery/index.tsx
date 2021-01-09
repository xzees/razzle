import React from 'react';
import {
    CoverBtn,
} from 'modules/hotel/component/ModalSlide/Style'
import ColorManager from 'common/Manager/ColorManager';
import {
  Slide,
  Tumbnail
} from 'modules/hotel/component/ModalSlide/Slide/index'
import { Box, Grid } from '@material-ui/core';
import Modal from 'modules/hotel/component/ModalSlide/Modal'
import BtnClose from 'modules/hotel/component/ModalSlide/BtnClose'
import HotelPhotoModelInterface from 'modules/hotel/models/HotelPhotoModel/HotelPhotoModelInterface';

interface IModelSlide {
  children?: any
  data: HotelPhotoModelInterface[]
}

const index = (props: IModelSlide) => {
    const [open, setOpen] = React.useState(false);
    const [nav1, setNav1] = React.useState<any>(null);
    const [nav2, setNav2] = React.useState<any>(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
      <>
        <CoverBtn type="button" onClick={handleOpen}>
            {props.children}
        </CoverBtn>
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
                <Grid container={true} style={{backgroundColor: ColorManager.default.black, padding: '0.5rem'}} spacing={4}>
                    <Grid item={true} xs={12}>
                        <Box style={{padding: '0px 50px 0px 50px'}}>
                            <Slide 
                                nav1={nav1}
                                nav2={nav2}
                                setNav1={setNav1}
                                setNav2={setNav2}
                                data={props.data} 
                            />
                        </Box>
                    </Grid>
                    
                    <Grid item={true} xs={12}>
                        <Tumbnail 
                            nav1={nav1}
                            nav2={nav2}
                            setNav1={setNav1}
                            setNav2={setNav2}
                            data={props.data} 
                        />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
      </>
    );
}

export default index