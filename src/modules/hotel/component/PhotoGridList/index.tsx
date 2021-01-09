import React, {useState} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import _ from 'lodash';
import HotelPhotoModelInterface from 'modules/hotel/models/HotelPhotoModel/HotelPhotoModelInterface';
import i18n from 'utilities/I18n';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridLayout: {
        display: 'grid',
        gridTemplateColumns: 'repeat(18, minmax(20px, 100px))',
        gridGap: '3px',
        gridAutoRows: 'minmax(30px, auto)',
        gridAutoFlow: 'dense',
    },
    gridLayoutM: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, minmax(30px, 100px))',
        gridGap: '3px',
        gridAutoRows: 'minmax(30px, auto)',
        gridAutoFlow: 'dense',
    },
    gridItem:{    
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#929796',
        backgroundColor: '#333',
        '&:nth-child(odd)': {
            backgroundColor: '#424242',
        }
    },
    itemType1:{
        gridColumnEnd: 'span 6',
        gridRowEnd: 'span 10',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemType2:{
        gridColumnEnd: 'span 6',
        gridRowEnd: 'span 6',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemType3:{
        gridColumnEnd: 'span 3',
        gridRowEnd: 'span 4',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemType4:{
        gridColumnEnd: 'span 6',
        gridRowEnd: 'span 4',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemType5:{
        gridColumnEnd: 'span 12',
        gridRowEnd: 'span 10',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemType6:{
        gridColumnEnd: 'span 18',
        gridRowEnd: 'span 10',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemType7:{
        gridColumnEnd: 'span 6',
        gridRowEnd: 'span 5',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemTypeM1:{
        gridColumnEnd: 'span 6',
        gridRowEnd: 'span 6',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemTypeM2:{
        gridColumnEnd: 'span 3',
        gridRowEnd: 'span 6',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemTypeM3:{
        gridColumnEnd: 'span 4',
        gridRowEnd: 'span 6',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    itemTypeM4:{
        gridColumnEnd: 'span 2',
        gridRowEnd: 'span 3',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: ColorManager.default.white,
        textDecoration: 'none',
    },
    viewMoreBox: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        transition: 'opacity 0.3s linear',
        opacity: 1,
    },
    viewMoreBoxActive: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        transition: 'opacity 0.3s linear',
        opacity: 0,
    },
    viewMoreTxt: {
        width: '100%',
        fontSize: FontManager.default.TEXT_TINY_18,
        lineHeight: '0.9em',
        textAlign: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
    }
  }),
);

export default function index(props: any) {
    const { limit,  isMobile } = props;
    const photoData:HotelPhotoModelInterface[] = props.photoData;
    const classes = useStyles();
    const [isShow, setIsShow] = useState<number>(limit);
    const patten = (isMobile)?
                    [[classes.itemTypeM1], 
                    [classes.itemTypeM2, classes.itemTypeM2], 
                    [classes.itemTypeM3, classes.itemTypeM4, classes.itemTypeM4]]
                    :
                    [[classes.itemType6], 
                    [classes.itemType5, classes.itemType1], 
                    [classes.itemType5, classes.itemType7, classes.itemType7], 
                    [classes.itemType5, classes.itemType2, classes.itemType3, classes.itemType3], 
                    [classes.itemType1, classes.itemType1, classes.itemType2, classes.itemType3, classes.itemType3], 
                    [classes.itemType1, classes.itemType2, classes.itemType2, classes.itemType4, classes.itemType3, classes.itemType3],
                    [classes.itemType1, classes.itemType2, classes.itemType2, classes.itemType3, classes.itemType3, classes.itemType3, classes.itemType3] ];
    return (
        <>
            <div className={(isMobile)?classes.gridLayoutM:classes.gridLayout} onMouseLeave={() => setIsShow(limit)}>
                {_.take(photoData, limit).map((tile:HotelPhotoModelInterface, inx:number) => {
                    let className = (isShow == inx || isShow == limit) ? classes.viewMoreBoxActive : classes.viewMoreBox;
                    if(inx == limit-1 && isShow == limit){
                        className = classes.viewMoreBox;
                    }
                    return (<Link href="#" key={inx} onClick={ () => { return false;} } onMouseEnter={() => setIsShow(inx)} className={patten[limit-1][inx]} style={{ backgroundImage: `url(${tile.urlOriginal})` }}>
                            <Box component="div" className={className}>
                            { (inx == limit-1) && 
                                <Typography className={classes.viewMoreTxt}>
                                    {i18n.t('hotel.components.photogridlist.viewallphotos')} ({photoData.length})
                                </Typography>    
                            }   
                            </Box>
                    </Link>
                )})
            }
            </div>
        </>
    );
}