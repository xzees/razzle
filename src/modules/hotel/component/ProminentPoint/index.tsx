import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

interface IDataList { title: string, icon: any, id: any , isShow: boolean }
    
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    prominentPoint: {
        width: '100%',
        fontSize: FontManager.default.text,
        color: ColorManager.default.greenColor,
        borderColor: ColorManager.default.greenColor,
        backgroundColor: '#F2FEF2',
        marginTop: '5px',
        marginBottom: '5px',
        '& .MuiButton-label': {
            justifyContent: 'flex-start'
        },
    },
  }),
);

export default function index(props: any) {
    const { data } = props;
    
    const classes = useStyles();

    const btnComponent = (dataBtns: IDataList[]) => {
        let btnRes:any[] = [];
        // console.log("hotelFacilityComponent -> hotelInfo?.facility", hotelInfo?.facility[0].hotel_facility)
        _.forEach(dataBtns, function(btnItem, index) {
          //console.log(btnItem.isShow);
            if (btnItem.isShow) {
              btnRes.push(
                  <Button variant="outlined" size="large" className={classes.prominentPoint} startIcon={btnItem.icon} key={btnItem.id}>
                      {btnItem.title}
                  </Button>
              )
            }
          });
        return btnRes;
    }

    return (
        <>
        {btnComponent(data)}
      </>
    );
}