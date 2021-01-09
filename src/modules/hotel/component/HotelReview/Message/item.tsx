import React from 'react';
import styled from "styled-components";
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import _ from 'lodash';
import i18n from 'utilities/I18n';

interface IMessage {
    reviewer: string;
    photo: string;
    country: string;
    date: string;
    scroll: number;
    roomtype: string;
    title: string;
    message: string;
    reply: IReply[];
  }
  interface IReply {
    replyer: string;
    date: string;
    message: string;
  }

const styles = {
    MyBadge : styled<any>(Badge)`
        align-self: center;
        .MuiBadge-badge{
            left: 50%;
        }
    `,
    MyDivider : styled<any>(Divider)`
        &.MuiDivider-root{
            background-color: transparent;
            height: 0;
            border-bottom: 1px dashed ${ColorManager.default.greyColor};
            margin-top: 25px;
            margin-bottom: 25px;
        }
    `,
    MyDividerMobile : styled<any>(Divider)`
        &.MuiDivider-root{
            background-color: transparent;
            height: 0;
            border-bottom: 1px dashed ${ColorManager.default.greyColor};
            margin-top: 0;
            margin-bottom: 25px;
        }
    `,
}

export default function item(props: any) {
    //const { messageItem } = props;
    const { isMobile } = props; 
    const messageItem:IMessage =  props.messageItem;

    const SmallAvatar = withStyles((theme: Theme) =>
        createStyles({
        root: {
            width: 24,
            height: 19,
            borderRadius: 3,
        },
        }),
        )(Avatar);

    const replyMessage = (reply:IReply[]) => {
        const replyRes:any[] = [];
        reply.map((replyItem) => {
            replyRes.push (
                <>
                    <Grid container spacing={3} style={{backgroundColor: ColorManager.default.greyColor, padding: 25, marginTop: 25, borderRadius: 5, justifyContent: 'flex-end'}}>
                        <div style={{width: 0,height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '10px solid ' + ColorManager.default.greyColor, marginTop: -35, marginRight: 15 }}></div>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom  style={{fontSize: FontManager.default.TEXT_20, marginBottom: 25}}>
                                {replyItem.message}
                            </Typography>
                            <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, lineHeight: FontManager.default.TEXT_MEDIUM_22, fontFamily: FontManager.default.secondaryFont,}}>
                                {replyItem.replyer}
                            </Typography>
                            <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, lineHeight: FontManager.default.TEXT_MEDIUM_22, color: ColorManager.default.fourthColor}}>
                                {i18n.t('hotel.components.hotelreview.message.item.replydate')} {replyItem.date}
                            </Typography>
                        </Grid>
                    </Grid>
            </>)
        });
        return replyRes;
    }

    return (
        <>
        { isMobile ? (
            <Paper elevation={2} style={{marginTop: 25, padding: 15}}>
                <Grid container spacing={3}>
                    <Grid item xs={4} style={{display:'flex', flexFlow: 'column'}}>
                        <styles.MyBadge
                            overlap="rectangle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            badgeContent={<SmallAvatar alt="Remy Sharp" src={messageItem.country} />}
                        >
                            <Avatar alt={messageItem.reviewer} src={messageItem.photo} style={{width:75, height:75,}}/>
                        </styles.MyBadge>
                        <Typography variant="h3" gutterBottom style={{fontSize: FontManager.default.LARGE_MEDIUM_30, color: ColorManager.default.fifthColor, fontFamily: FontManager.default.secondaryFont, marginTop: 15, textAlign:'center'}}>
                            {messageItem.scroll}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, fontFamily: FontManager.default.secondaryFont, lineHeight: FontManager.default.TEXT_20, marginTop: 10,}}>
                            {messageItem.reviewer}
                        </Typography>
                        <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, color: ColorManager.default.fourthColor, lineHeight: FontManager.default.TEXT_20}}>
                            {i18n.t('hotel.components.hotelreview.message.item.reviewdate')} {messageItem.date}
                        </Typography>
                        <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, color: ColorManager.default.fourthColor, lineHeight: FontManager.default.TEXT_20}}>
                            {i18n.t('hotel.components.hotelreview.message.item.room')} : 
                            <span style={{color: ColorManager.default.black}}> {messageItem.roomtype} </span>
                        </Typography>
                    </Grid>
                </Grid>
                <styles.MyDividerMobile/>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom style={{fontSize: FontManager.default.TEXT_EXTRA_24, fontFamily: FontManager.default.secondaryFont,}}>
                            {messageItem.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom  style={{fontSize: FontManager.default.TEXT_20}}>
                            {messageItem.message}
                        </Typography>
                        { replyMessage(messageItem.reply) }
                    </Grid>
                </Grid>
            </Paper>
            ) : (
                <Paper elevation={2} style={{marginTop: 25, paddingTop: 35, paddingBottom: 35,}}>
                <Grid container spacing={3}>
                    <Grid item xs={3} style={{display:'flex', flexFlow: 'column'}}>
                        <styles.MyBadge
                            overlap="rectangle"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            badgeContent={<SmallAvatar alt="Remy Sharp" src={messageItem.country} />}
                        >
                            <Avatar alt={messageItem.reviewer} src={messageItem.photo} style={{width:100, height:100,}}/>
                        </styles.MyBadge>
                        <Typography variant="h3" gutterBottom style={{fontSize: FontManager.default.LARGE_ULTRA_50, color: ColorManager.default.fifthColor, fontFamily: FontManager.default.secondaryFont,marginTop: 25,textAlign:'center'}}>
                            {messageItem.scroll}
                        </Typography>
                    </Grid>
                    <Grid item xs={9} style={{paddingRight: 40,}}>
                        <Typography variant="h3" gutterBottom style={{fontSize: FontManager.default.LARGE_MEDIUM_30, fontFamily: FontManager.default.secondaryFont,}}>
                            {messageItem.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom  style={{fontSize: FontManager.default.TEXT_20}}>
                            {messageItem.message}
                        </Typography>
                        <styles.MyDivider/>
                        <Grid container spacing={3}>
                            <Grid item xs={6} style={{alignItems: 'flex-end', display: 'flex',}}>
                                <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, color: ColorManager.default.fourthColor}}>
                                    {i18n.t('hotel.components.hotelreview.message.item.room')} : 
                                    <span style={{color: ColorManager.default.black}}> {messageItem.roomtype} </span>
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, fontFamily: FontManager.default.secondaryFont}} align="right">
                                    {messageItem.reviewer}
                                </Typography>
                                <Typography variant="body1" style={{fontSize: FontManager.default.TEXT_20, color: ColorManager.default.fourthColor}} align="right">
                                    {i18n.t('hotel.components.hotelreview.message.item.reviewdate')} {messageItem.date}
                                </Typography>
                            </Grid>
                        </Grid>
                        { replyMessage(messageItem.reply) }
                    </Grid>
                </Grid>
            </Paper>
            )}
        </>
    );
}