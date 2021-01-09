import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
    Modals,
} from '../Style'

interface IModal {
    children?: any;
    handleClose: () => void
    open: boolean;
}

const index = (props: IModal) => {
    const {
        handleClose,
        open
    } = props

    return (
        <Modals
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                {props!.children}
            </Fade>
        </Modals>
    );
}

export default index