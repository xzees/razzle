import React from 'react';
import { Grid, Box } from '@material-ui/core';
import {
    Style
} from './Style';
import Container from 'modules/hotel/component/ModalScreen/Container';
import CircleAdd from './BtnCircle/CircleAdd'
import CircleRemove from './BtnCircle/CircleRemove'
import FontManager from 'modules/hotel/Manager/FontManager';
import i18n from 'utilities/I18n';

const Child = (props: any) => {

    const {
        value,
        map,
        childHandleChange
    } = props;

    return (
        <>
        {map > 0 && 
            <>
                <Container style={{ 
                    paddingLeft: 25,
                    paddingRight: 25,
                    paddingBottom: 10,
                    paddingTop: 10, 
                    position: 'relative', 
                    width: '100%',
                    lineHeight: '0.9',
                    fontSize: FontManager.default.TEXT_TINY_18
                }}>
                    <Box m={0}>
                        {props.text}
                    </Box>
                </Container>

                {[...Array(map).keys()].map((v,k)=>{

                    const value_child = (value[v]?.value ? value[v]?.value : 2)
                    const CircleRemoveClick = () => {
                            childHandleChange({
                                target: {
                                    name:v,
                                    value: value_child - 1
                                }
                            } as any)
                        return undefined
                    }
                    const CircleAddClick = () => {
                        childHandleChange({
                            target: {
                                name:v,
                                value: value_child + 1
                            }
                        } as any)
                        return undefined
                    }
                    return (
                        <Container key={k} index={k} style={Style.childOldContainer}>
                            <Grid container={true}  alignItems={'center'} > 
                                <Grid item={true} xs={6} sm={6} md={6} >
                                    <Box {...Style.BoxDefault}>
                                        <Box m={0} {...Style.BoxTextRoom}>
                                            <Box {...Style.TextRoom}  >
                                                {value_child}
                                            </Box>
                                        </Box>
                                        <Box {...Style.BoxThree}>
                                            <Box {...Style.BoxDay}>{i18n.t('hotel.components.guest.child.year')}</Box>
                                            <Box {...Style.BoxMY}>{i18n.t('hotel.components.guest.child.age')}</Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item={true} xs={6} sm={6} md={6} >
                                    <Box {...Style.BoxDefaultRight}>
                                        <Box m={0}>
                                            <Box m={0} {...Style.BoxTextIcon}>
                                                <CircleRemove 
                                                    value={value_child} 
                                                    minusChk={2} 
                                                    CircleRemoveClick={CircleRemoveClick} 
                                                />
                                            </Box>
                                        </Box>
                                        <Box m={0}>
                                            <Box m={0} {...Style.BoxTextIcon}>
                                                <CircleAdd 
                                                    value={value_child} 
                                                    minusChk={12} 
                                                    CircleRemoveClick={CircleAddClick} 
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    )
                })}
            </>}
        </>
    );
};

export default Child;