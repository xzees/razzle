import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { 
    Style
} from './Style';
import Container from 'modules/hotel/component/ModalScreen/Container';
import ColorManager from 'common/Manager/ColorManager';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CircleRemove from './BtnCircle/CircleRemove';

const Adult = (props: any) => {

    const {
        value,
        minusChk,
        CircleRemoveClick,
        CircleAddClick
    } = props;

    const containerStyle = { 
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 10,
        paddingTop: 10, 
        position: 'relative', 
        width: '100%',
        borderBottom: '1px solid ' + ColorManager.default.greyColor
    };

    return ( 
        <Container style={containerStyle}>
            <Grid container={true}  alignItems={'center'} > 
                <Grid item={true} xs={6} sm={6} md={6} >
                    <Box {...Style.BoxDefault}>
                        <Box m={0} {...Style.BoxTextRoom}>
                            <Box {...Style.TextRoom}  >{props.value}</Box>
                        </Box>
                        <Box {...Style.BoxThree}>
                            <Box {...Style.BoxRoom}>
                                {props.text}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item={true} xs={6} sm={6} md={6} >
                    <Box {...Style.BoxDefaultRight}>
                        <CircleRemove value={value} minusChk={minusChk} CircleRemoveClick={CircleRemoveClick} />
                        <Box onClick={CircleAddClick}  m={0}>
                            <Box m={0} {...Style.BoxTextIcon}>
                                <AddCircleOutlineRoundedIcon {...Style.IconPlus} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Adult;