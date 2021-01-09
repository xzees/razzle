import React from 'react'; 
import { Dialog, Slide, IconButton, TextField, Grid , Box} from '@material-ui/core'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { TransitionProps } from '@material-ui/core/transitions'; 
import styled from 'styled-components';
import ColorManager from "common/Manager/ColorManager";
import { Label } from "common/components/Label";
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon'
import useModel from 'modules/hotel/Hook/useModel';
import {
  IconButtons,
  Labels,
  styles
} from 'modules/hotel/component/ModalScreen/Style';

interface Props {
  children?: any; 
  label: string; 
  fullscreen?: boolean;
  closeBtnAign?: 'left' | 'right';
  closeBtnIcon?: any;
  title?: any;
  onChange?: any;
  headerColor?: any;
  value?: any;
  buttonOpenModel: any;
  handleClickOpen: any;
  stateModel: any;
  setStateModel: any;
  handleClose: any;
} 

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction={'up'} ref={ref} {...props} />; 
}); 

const ModalScreen = (props: Props) => {
  const { fullscreen, label, handleClickOpen, stateModel, setStateModel, handleClose  } = props; 
  const [value, setValue] = React.useState(''); 
  

  const styleHeader = {
    backgroundColor: ColorManager.default.fifthColor
  };

  const ButtonOpenModel = props.buttonOpenModel;
  
  return (
    <>
      <ButtonOpenModel onClick={handleClickOpen} />
      <Dialog
        open={stateModel}
        TransitionComponent={Transition}
        fullScreen={fullscreen ? true : false}
      >
        <styles.header style={{...styleHeader}}>
          <Grid container={true} alignItems={'center'}>
            <Grid item={true} xs={3} >
              <IconButtons onClick={handleClose} >
                <ChevronLeftIcon fontSize="large" style={{ color: '#ffffff' }}></ChevronLeftIcon>
              </IconButtons>
            </Grid>
            <Grid item={true} xs={6} >
              <Box textAlign={'center'}>
                <Labels>{props.title}</Labels>
              </Box>
            </Grid>
            <Grid item={true} xs={3} >
              <></>
            </Grid>
          </Grid>
        </styles.header>
        <div>
            {props.children}
        </div>
      </Dialog>
    </>
  ); 
};

export default React.memo(ModalScreen); 
