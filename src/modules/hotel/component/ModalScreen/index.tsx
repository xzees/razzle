import React from 'react'; 
import { Dialog, Slide, TextField , Grid , Box  } from '@material-ui/core'; 
import { TransitionProps } from '@material-ui/core/transitions'; 
import ColorManager from 'common/Manager/ColorManager';
import {
  IconButtons,
  Labels,
  styles
} from './Style';

interface Props {
    [key: string]: any;
    open: boolean;
    setOpen: any;
    title: string;
    closeBtnIcon: any;
    handleClose: any;
    inputLabel?: any;
} 

const Transition = React.forwardRef((
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) => {
  return <Slide direction={'up'} ref={ref} {...props} />; 
}); 

const index = (props: Props) => {

  const styleHeader = {
    backgroundColor: ColorManager.default.fifthColor
  };
  
  return (
    <>
      {props.inputLabel}
      <styles.Dialogs
        open={props.open}
        TransitionComponent={Transition}
        fullScreen={true}
      > 
        <styles.header style={{...styleHeader}}>
          <Grid container={true} alignItems={'center'}>
            <Grid item={true} xs={3} >
              <IconButtons onClick={props.handleClose} >{props.closeBtnIcon}</IconButtons>
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
        {props.children}
      </styles.Dialogs>
    </>
  ); 
};

export default index; 
