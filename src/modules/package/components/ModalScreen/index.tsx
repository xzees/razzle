import React, { cloneElement, forwardRef, FunctionComponent } from 'react';
import { Dialog, Slide, Grid } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import useToggle from 'modules/package/Hook/useToggle';
import { IconButton } from '../FilterBar/Style';
import { ModalHeader, LabelWrapper, ChevronLeftIcon, Label } from './Style';

type Props = {
  children?: any;
  title: string;
  fullscreen?: boolean;
  buttonOpenModal?: any;
};

const Transition = forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction={'up'} ref={ref} {...props} />;
  }
);

const ModalScreen: FunctionComponent<Props> = (props: Props) => {
  const { children, title, fullscreen, buttonOpenModal } = props;

  const { toggle, handleOpen, handleClose } = useToggle();

  const ButtonOpenModal = buttonOpenModal;

  return (
    <>
      <ButtonOpenModal onClick={handleOpen} />
      <Dialog
        open={toggle}
        TransitionComponent={Transition}
        fullScreen={fullscreen}
      >
        <ModalHeader>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <IconButton onClick={handleClose}>
                <ChevronLeftIcon fontSize="large"></ChevronLeftIcon>
              </IconButton>
            </Grid>
            <Grid item xs={6}>
              <LabelWrapper>
                <Label>{title}</Label>
              </LabelWrapper>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </ModalHeader>
        {cloneElement(children, { handleCloseModal: handleClose })}
      </Dialog>
    </>
  );
};

export default ModalScreen;
