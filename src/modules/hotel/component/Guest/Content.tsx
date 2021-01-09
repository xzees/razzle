import React from 'react';
import {
    Style,
    ViewButton,
    CalendarScrollContainer,
    FooterButtonContainer,
    FooterButton
} from './Style';
import { Grid, Box } from '@material-ui/core';
import Layout from './Layout';
import Container from 'modules/hotel/component/ModalScreen/Container';
import ToolTip from 'modules/hotel/component/ToolTip';
import i18n from 'utilities/I18n';

const Content = (props: any) => {

    const {
        setOpen,
        isMobile,
        handleClose
    } = props;

    const containerRef = React.createRef<HTMLDivElement>();
    const isClient = typeof window === 'object';
    

    return (
        <>
            <ToolTip isMobile={isMobile}>
                {!isMobile && <>
                    <Container style={Style.childOldContainerDesktop}>
                        <Box m={0} 
                            display={'flex'}
                            justifyContent={'space-between !important'}
                        >
                            <Box alignSelf={'center'}>
                                {i18n.t('hotel.components.guest.content.lblguest')}
                            </Box>
                            <Box>
                                <ViewButton onClick={()=>{
                                    setOpen(false)
                                }}>{i18n.t('hotel.components.guest.content.lbldone')}</ViewButton>
                            </Box>
                        </Box>
                    </Container>
                    <Layout 
                        {...props}
                    />
                </>
                }
                {isMobile && <>
                    <CalendarScrollContainer 
                        ref={containerRef}
                        windowinnerheight={isClient ? window.innerHeight : 0} 
                        style={{ 
                            position: 'relative', 
                            overflow: 'scroll' 
                        }}
                    >
                    <Layout 
                        {...props}
                    />
                    <div style={{height:100}}>
                    </div>
                    </CalendarScrollContainer>
                
                 <FooterButtonContainer>
                    <FooterButton onClick={handleClose} buttontype="submit" > 
                    {i18n.t('hotel.components.seachtoggle.modal.agree')} 
                    </FooterButton>
                </FooterButtonContainer>
                </>}
            </ToolTip>
        </>
    )
}

export default Content;