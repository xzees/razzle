import React from 'react';
import { Dialog, Slide, IconButton, TextField } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import styled from 'styled-components';
import ColorManager from "common/Manager/ColorManager";
import { Label } from "common/components/Label";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

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
}

const ExpandMoreIconCss = {
  color: ColorManager.default.white
};

const RenderExpandMoreIcon = () => {
  return (
    <ExpandMoreIcon fontSize={'large'} style={ExpandMoreIconCss} />
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction={'up'} ref={ref} {...props} />;
});

const ModalScreen = (props: Props) => {
  const { fullscreen, label } = props;
  const [state, setState] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleClickOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };


  const styleHeader = {
    backgroundColor: (props.headerColor ? props.headerColor : ColorManager.default.primaryColor)
  };

  const ButtonOpenModel = props.buttonOpenModel

  return (
    <>
      <ButtonOpenModel onClick={handleClickOpen} />
      <Dialog
        open={state}
        TransitionComponent={Transition}
        style={{ zIndex: 99999 }}
        fullScreen={fullscreen ? true : false}
      >
        <styles.header style={{ ...styleHeader, position: 'sticky', top: 0, zIndex: 1 }}>
          <styles.divInHeaderLeft>
            <Label style={{ color: ColorManager.default.white }}>{props.title}</Label>
          </styles.divInHeaderLeft>
          <styles.divInHeaderRight>
            <IconButton onClick={handleClose} >
              <RenderExpandMoreIcon />
            </IconButton>
          </styles.divInHeaderRight>
        </styles.header>
        <styles.divFilter>
          {props.children}
        </styles.divFilter>
      </Dialog>
    </>
  );
};

const styles = {
  header: styled.div`
    display: flex;
  `,
  divInHeaderLeft: styled.div`
    flex: 1;
    align-self: center;
    margin-left: 1rem!important;
  `,
  divInHeaderRight: styled.div`
    align-self: center;
  `,
  TextField: styled(TextField)`
    background:white;
    width:100%;
    border-radius: 5px !important;
  `,
  divFilter: styled.div`
    margin-bottom: 70px;
  `,
};

export default ModalScreen; 
