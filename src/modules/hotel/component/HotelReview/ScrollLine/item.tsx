import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';

const styles = {
    MyGridContainer: styled<any>(Grid)`
        margin-bottom: 10px;
    `,
    MyLinearProgress: styled<any>(LinearProgress)`
        .MuiLinearProgress-colorPrimary{
            background-color: ${ColorManager.default.greyColor};
            heigth: 5px;
        }
        .MuiLinearProgress-barColorPrimary{
            background-color: ${ColorManager.default.fifthColor};
        }
    `,
    MyTitleTypography: styled<any>(Typography)`
        &.MuiTypography-body1{
            font-size: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.black};
        }
    `,
    MyScrollTypography: styled<any>(Typography)`
        &.MuiTypography-body1{
            font-size: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.fifthColor};
            text-align: right;
        }
    `,
}

export default function index(props: any) {
    const { title, scroll, displayscroll} = props;
    
    return (
        <styles.MyGridContainer container spacing={1}>
            <Grid item xs={12}>
                <styles.MyLinearProgress variant="determinate" value={scroll}/>
            </Grid>
            <Grid item xs={6}>
                <styles.MyTitleTypography>{title}</styles.MyTitleTypography>
            </Grid>
            <Grid item xs={6}>
                <styles.MyScrollTypography>{displayscroll}</styles.MyScrollTypography>
            </Grid>
        </styles.MyGridContainer>
    );
}