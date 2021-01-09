import React from 'react';
import {
    CoverBtn,
} from './Style'

import ColorManager from 'common/Manager/ColorManager';
import {
  Slide,
  Tumbnail
} from './Slide/index'
import { Box, Grid } from '@material-ui/core';
import Modal from './Modal'
import BtnClose from './BtnClose'

interface IModelSlide {
  children?: any
  data: any
  content?: any;
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
    <div>
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
                <div
                  style={{
                      backgroundColor: ColorManager.default.black,
                      width: '100%',
                      height: 'auto'
                  }}
                >
                  <Grid container={true}>
                    <Grid item={true} xs={!props.content ? 12 : 8}>
                      <Grid container={true} spacing={4} style={{
                            padding: '0.5rem'
                          }}>
                        <Grid item={true} xs={12}>
                          <Box style={{
                            padding: '0px 30px'
                          }}>
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
                          <Box >
                            <Tumbnail 
                              nav1={nav1}
                              nav2={nav2}
                              setNav1={setNav1}
                              setNav2={setNav2}
                              data={props.data} 
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    {props.content && <Grid item={true} xs={4}>
                        {props.content}
                    </Grid>}
                  </Grid>
                </div>
            </Box>
      </Modal>
    </div>
  );
}

export default index