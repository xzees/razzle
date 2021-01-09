import React, { useState } from 'react';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { ToggleButton } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";


const styles = {
  MyFormControlStyle: styled<any>(FormControl)`
      &.MuiFormControl-root {
          width: 100%;
          margin-bottom: 16px;
          padding: 0;
          height: auto;
      },
      .MuiListItem-gutters {
          padding-left: 16px;
      },
      .MuiListItemSecondaryAction-root {
          right: 8px;
      },
  `,
}

const useStyles = makeStyles({
  mySortingContainerStyle: {
      padding: '0rem 0.5rem',
  },
  myToggleButtonStyle: {
    '&.MuiToggleButton-root': {
      width: '100%',
      color: ColorManager.default.black,
      backgroundColor: ColorManager.default.greyColor,
      border: 1,
      borderStyle: 'solid',
      borderColor: ColorManager.default.greyColor,
      fontSize: FontManager.default.text,
      padding: 0,
      "&.Mui-selected": {
          backgroundColor: ColorManager.default.fifthColor,
          color: ColorManager.default.white,
          "&:hover": {
              backgroundColor: ColorManager.default.fifthColor,
            },
        },
    },
  },
  myTypo: {
    '&.MuiTypography-root': {
      fontSize: FontManager.default.text,
    }
  }
}
);

interface Iprops {
  onReset: boolean;
}

const index = (props: Iprops) => {
  const myclasses = useStyles();
  interface IScroll { label: string; value: boolean }
  const [order, setOrder] = useState<IScroll[]>(
      [
          {label: '2 +', value: false },
          {label: '3 +', value: false },
          {label: '4 +', value: false },
          {label: '5', value: false },
      ]
  );

  const handleOrder = (indexScrollSelected: number) => {
      let newOrderArr:IScroll[] = new Array();
      order.map((elm, index) => {
          const newOrder:IScroll = {label: elm.label, value: (index == indexScrollSelected)?!elm.value:elm.value}
          newOrderArr.push(newOrder);
      });
      setOrder(newOrderArr);
  }

  return (
    <styles.MyFormControlStyle component="fieldset">
      <Grid container spacing={2}
            className={myclasses.mySortingContainerStyle}>
        {
            order.map((elm, index) => {
                return (<Grid item xs={3} key={index}>
                    <ToggleButton
                        value={elm.label}
                        selected={elm.value}
                        onChange={() => {
                          handleOrder(index);
                        }}
                        className={myclasses.myToggleButtonStyle}
                        >
                        <Typography className={myclasses.myTypo}>{elm.label}</Typography>
                    </ToggleButton>
                </Grid>);
            })
        }
      </Grid>
    </styles.MyFormControlStyle>
  );
};

export default index;