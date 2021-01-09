import React, { MouseEvent } from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ColorManager from 'common/Manager/ColorManager';
import Grid from '@material-ui/core/Grid';
import FontManager from 'modules/hotel/Manager/FontManager';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import NavigationManager from 'common/Manager/NavigationManager';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    contentContainer: {
        zIndex: 1001,
    },
    root: {
      display: 'flex',
      height: 'auto',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      width: '200px',
    },
    cover: {
      width: '140px',
    },
    marker:{
        width: '30px',
        height: '30px',
        color: ColorManager.default.fifthColor,
    },
    hotelNameText: {
        fontSize: FontManager.default.TEXT_MEDIUM_22,
        lineHeight: FontManager.default.TEXT_MEDIUM_22,
        color: ColorManager.default.black,
    },
    hotelAddressText: {
        fontSize: FontManager.default.TEXT_TINY_18,
        lineHeight: FontManager.default.TEXT_TINY_18,
        color: ColorManager.default.black,
    },
    arrowDropDownIcon: {
        color: '#fff',
        display: 'flex',
        margin: 'auto',
        marginTop: '-15px',
        marginBottom: '-10px',
    },
    gridItemMarker: {
      position: 'relative',
      display: 'block',
      height: '55px',
      width: '40px',
    }
  }),
);

const Marker = (props:any) => {
  const { id, name, lat, lng, index, photo, address, isShowContent, onMarkerClick } = props;
  const classes = useStyles();
  const theme = useTheme();
  const locationSearch = new URLSearchParams(props.location.search);
  const linkRoomList = NavigationManager.ROUTES.ROOM_LIST + '?' +locationSearch + '&hotelId=' + id;

  const fnClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      NavigationManager.goTo(linkRoomList);
      //window.open(linkRoomList, '_blank');
  };

  return (
    <Grid container className={classes.container} onMouseEnter={onMarkerClick}>
        { isShowContent &&
        <Grid item className={classes.contentContainer} >
          <Link underline='none' component={RouterLink} to={linkRoomList}  onClick={fnClick}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={photo}
                    title={name}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" className={classes.hotelNameText}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.hotelAddressText}>
                        {address} 
                        {/* ({hData.location.latitude}, {hData.location.longitude}) */}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
          </Link>
          <ArrowDropDownIcon fontSize="large" className={classes.arrowDropDownIcon}/>
        </Grid>
        }
        <Grid item>
            <div className={classes.gridItemMarker}>{props.children}</div>
        </Grid>
    </Grid>
  );
}

export default Marker;
