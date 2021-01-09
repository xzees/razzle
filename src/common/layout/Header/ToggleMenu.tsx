import React from "react";
import ImageManager from "common/Manager/ImageManager";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps, Grid, Button, IconButton, Drawer, List, ListItem, Box, Backdrop } from "@material-ui/core";
import { AppImage } from "common/components";
import { Label } from "common/components/Label";
import Close from '@material-ui/icons/CloseRounded';
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import styles from "./style";
import NavMenu from "./NavMenu";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

export default function ToggleMenu(props: any) {
  const classes = useStyles({} as StyledProps);
  const {
    handleDeskToggle,
    deskOpen,
    isMobile
  } = props;

  return (
    <div className={classes.appResponsive}>
      <List className={classes.list}>
        {/* <ListItem className={classes.MenulistItem}>
          <Grid container style={{ paddingTop: 23, paddingBottom: 25 }}>
            <div style={{ width: '50%', display: 'inherit' }}>
              <AppImage src={ImageManager.default.images.common.header.Avatar} alt="Avatar" className={classes.MenuPicAvatar} />
              <div style={{ display: 'inline-block', paddingLeft: 15 }}>
                <span className={classes.MenuNameAvatar}>สวัสดี</span>
                <span className={classes.MenuNameAvatarBold}>Bright</span>
              </div>
            </div>
            <div style={{ width: '50%' }} className={classes.TextR}>
              <Button className={classes.btnEditProfile} >แก้ไขโปรไฟล์</Button>
            </div>
          </Grid>
        </ListItem> */}
        <ListItem className={`${classes.MenulistItem} ${classes.MenulistNoBorder}`}>
          <Grid container style={{ paddingTop: 13, paddingBottom: 13 }}>
            <Grid item xs={12} style={{ display: 'flex', paddingTop: 13, paddingBottom: 13 }}>
              <div style={{ width: '50%', display: 'inherit' }}>
                <AppImage src={ImageManager.default.images.common.header.ThaiFlag} alt="Flag" className={classes.MenuFlag} />
                <Label style={{ fontSize: '1.5625rem' }}>ภาษา</Label>
              </div>
              <div style={{ width: '50%' }} className={classes.TextR}>
                <Label style={{ fontSize: '1.5625rem' }} className={classes.MenuFlagTXT}>ภาษาไทย</Label>
              </div>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', paddingTop: 13, paddingBottom: 13 }}>
              <div style={{ width: '50%', display: 'inherit' }}>
                <AppImage src={ImageManager.default.images.common.header.currencyIcon} alt="Currency" className={classes.MenuCurrency} />
                <Label style={{ fontSize: '1.5625rem' }}>สกุลเงิน</Label>
              </div>
              <div style={{ width: '50%' }} className={classes.TextR}>
                <Label style={{ fontSize: '1.5625rem' }} className={classes.MenuCurrencyTXT}>THB - บาทไทย</Label>
              </div>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <NavMenu {...props} toggleMenu={true} />
      <Grid container className={classes.list} style={{ background: "#f3f2fa" }}>
        <Grid item xs={12}>
          <Box pt={6.75} pb={1.75}>
            <Label style={{ color: '#440099', fontSize: '1.3125rem' }}>ศูนย์บริการช่วยเหลือลูกค้า<br />เปิดให้บริการ <span style={{ fontFamily: 'DBHeaventRoundedMedv32' }}>06.30 - 21.00 น.</span> ทุกวัน</Label>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pt={3} pb={4.5}>
            <Box py={1.5}>
              <Button
                fullWidth
                variant="contained"
                className={`${classes.socialButton} ${classes.callButton}`}
                startIcon={<HeadsetMicIcon />}
                href="tel:021719999"
              >
                02 171 9999
                  </Button>
            </Box>
            <Box py={1.5}>
              <Button
                fullWidth
                variant="contained"
                className={`${classes.socialButton} ${classes.lineButton}`}
                startIcon={<AppImage src={ImageManager.default.images.common.toggleMenu.lineIcon} />}
                href="http://line.me/ti/p/@thaitravelcenter"
              >
                @ThaitravelCenter
                  </Button>
            </Box>
            <Box py={1.5}>
              <Button
                fullWidth
                variant="contained"
                className={`${classes.socialButton} ${classes.messengerButton}`}
                startIcon={<AppImage src={ImageManager.default.images.common.toggleMenu.messengerIcon} />}
                href="http://m.me/thaitravelcenter"
              >
                Messenger
                  </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pt={4} pb={6}>
            <Box pb={3}>
              <Label style={{ color: '#440099', display: 'block', fontSize: '1.9375rem', fontFamily: 'DBHeaventRoundedMedv32' }}>แอปท่องเที่ยวดีดี</Label>
              <Label style={{ color: '#888aaa', display: 'block', fontSize: '1.3125rem' }}>จองตั๋ว ทัวร์ โรงแรม ครบที่สุด ดาวน์โหลดเลย</Label>
            </Box>
            <Box pt={3} pb={5}>
              <Grid container >
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                  <a href="https://apps.apple.com/th/app/thai-travel-center/id1489160398">
                    <AppImage
                      src={ImageManager.default.images.common.toggleMenu.appstoreImage}
                      className={classes.appButton}
                      style={{ marginRight: 12 }}
                    />
                  </a>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'right' }}>
                  <a href="https://play.google.com/store/apps/details?id=com.thaitravelcenter.app">
                    <AppImage
                      src={ImageManager.default.images.common.toggleMenu.playstoreImage}
                      className={classes.appButton}
                      style={{ marginLeft: 12 }}
                    />
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}