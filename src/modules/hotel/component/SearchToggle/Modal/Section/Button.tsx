import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { 
    DivOutsideBtn,
    ContainerBtn,
    BoxBtn
} from './Style';
import Container from 'modules/hotel/component/ModalScreen/Container';

interface Iprops {
    btnClickAC: any;
    value: any;
    text: any;
}

const Button = (props: Iprops) => {

    const {
        value
    } = props;

    return ( 
        <>
        <div style={{...DivOutsideBtn}}>
            <Container style={ContainerBtn}>
                <Grid container={true}  alignItems={'center'} > 
                    <Box m={0} style={BoxBtn} >{props.text}</Box>
                </Grid>
            </Container>
        </div>
        </>
    );
};

export default Button;