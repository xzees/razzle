import React from 'react';
import styled from "styled-components";
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const styles = {
    MyContainer: styled.div<any>`
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 10px;
    `,
    MyCircularProgress: styled<any>(CircularProgress )`
        &.MuiCircularProgress-colorPrimary{
            color: ${ColorManager.default.fifthColor};
        }
    `,
    MyCircularTypography: styled<any>(Typography)`
        &.MuiTypography-caption{
            font-family: ${FontManager.default.secondaryFont};
            color: ${ColorManager.default.fifthColor};
            font-size: ${FontManager.default.LARGE_ULTRA_50};
        }
        span {
            color: ${ColorManager.default.fourthColor};
            font-size: ${FontManager.default.TEXT_EXTRA_24};
            font-family: ${FontManager.default.primaryFont};
        }
    `,
    MyTitleTypography: styled<any>(Typography)`
        &.MuiTypography-body1{
            margin-top: 10px;
            font-size: ${FontManager.default.LARGE_28};
            line-height: ${FontManager.default.LARGE_28};
            color: ${ColorManager.default.black};
            text-align: center;
        }
    `,
    MyDescriptionTypography: styled<any>(Typography)`
        &.MuiTypography-body1{
            font-size: ${FontManager.default.TEXT_20};
            line-height: ${FontManager.default.TEXT_20};
            color: ${ColorManager.default.fourthColor};
            text-align: center;
        }
    `,
    MyBoxText: styled.div<any>`
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `,
}

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
      <Box position="relative" display="inline-flex">
        <styles.MyCircularProgress variant="static" {...props} size={140} thickness={3.6} />
        <styles.MyBoxText>
          <styles.MyCircularTypography variant="caption" component="div">{props.value/10}<span>/10</span></styles.MyCircularTypography>
        </styles.MyBoxText>
      </Box>
    );
  }

export default function index(props: any) {

    const [progress, setProgress] = React.useState(78);

    return (
        <styles.MyContainer>
           <CircularProgressWithLabel value={progress} />
           <styles.MyTitleTypography>{i18n.t('hotel.components.hotelreview.scrollline.title006')}</styles.MyTitleTypography>
           <styles.MyDescriptionTypography>{i18n.t('hotel.components.hotelreview.scrollsummary.desctypo')}</styles.MyDescriptionTypography>
        </styles.MyContainer>
    );
}