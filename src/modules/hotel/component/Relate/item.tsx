import React, {MouseEvent} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import RibbonDesktop from 'modules/hotel/component/SearchHotel/Ribbon/Desktop';
import RibbonMobile from 'modules/hotel/component/SearchHotel/Ribbon/Mobile';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';
import Remain from './remain';
import qs from 'query-string'
import { 
    KanokOrange,
} from 'modules/hotel/component/Icon';
import NavigationManager from 'common/Manager/NavigationManager';


const item = (props: any) => {
    const hotel: HotelListModelInterface = props.hotel;
    const isMobile = props.isMobile;
    const remain:number = hotel.blockDetail.numRoomsAvailable;
    // const locationSearch = new URLSearchParams(props.location.search)
    // locationSearch.delete('hotelId')
    const linkRoomList = NavigationManager.ROUTES.ROOM_LIST;

    const fnClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // window.location.href = linkRoomList;
        NavigationManager.goTo(
            linkRoomList,
            {
                ...qs.parse(props.location.search), 
                hotelId: hotel.hotelId
            }
        );
        window.scrollTo(0, 0);
    };

    return (
        <div style={{paddingLeft: 8, paddingRight: 8}}>
            <Link underline='none' component={RouterLink} to={linkRoomList}  onClick={fnClick}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            image={hotel.hotelMainPhoto.urlMax300}
                            title={hotel.name}
                            style={{height: (isMobile) ? 135 : 170 }}
                        >
                            { (isMobile) ? <RibbonMobile {...{...props, ...hotel, size:'xs'}} /> : <RibbonDesktop {...{...props, ...hotel}} /> }
                            
                        </CardMedia>
                        <CardContent>
                            <Box component="div" style={{height:(isMobile) ? 53 : 77}}>
                                <Typography component="h2" style={{color: ColorManager.default.thirdColor, 
                                    fontSize: (isMobile) ? FontManager.default.TEXT_TINY_18 : FontManager.default.TEXT_MEDIUM_22, 
                                    lineHeight: (isMobile) ? FontManager.default.TEXT_TINY_EXTRA_17 : FontManager.default.TEXT_20, 
                                    fontFamily: FontManager.default.secondaryFont, 
                                    display: '-webkit-box', 
                                    WebkitLineClamp: 2, 
                                    WebkitBoxOrient: 'vertical', 
                                    overflow: 'hidden'}}>
                                    {hotel.name}
                                </Typography>
                                <Box component="div" style={{marginTop:5, marginBottom:5}}>
                                    {[...Array(hotel.class)].map((x, i) =>
                                        <StarIcon key={i} fontSize="small" style={{color: ColorManager.default.yellowColor, fontSize: (isMobile) ? FontManager.default.SMALL_12 : FontManager.default.TEXT_TINY_18, lineHeight: (isMobile) ? FontManager.default.SMALL_12 : FontManager.default.TEXT_TINY_18}} />
                                    )}
                                </Box>
                            </Box>
                            <Box component="div" style={{display:'flex',alignItems:'center'}}>
                                <LocationOnIcon fontSize="small" style={{color: ColorManager.default.fourthColor}}/>
                                <Typography component="span" align="left" style={{color: ColorManager.default.fourthColor,fontSize: (isMobile) ? FontManager.default.SMALL_MEDIUM_14 : FontManager.default.TEXT_TINY_18, lineHeight: (isMobile) ? FontManager.default.SMALL_MEDIUM_14 : FontManager.default.TEXT_TINY_18}}>
                                    {hotel.cityName}
                                </Typography>
                            </Box>
                            <Box component="div" style={{display:'flex',alignItems:'center'}}>
                                <KanokOrange fontSize="small" style={{color: ColorManager.default.orangeColor}}/>
                                <Typography component="span" align="left" style={{color: ColorManager.default.orangeColor,fontSize: (isMobile) ? FontManager.default.SMALL_MEDIUM_14 : FontManager.default.TEXT_TINY_18, lineHeight: (isMobile) ? FontManager.default.SMALL_MEDIUM_14 : FontManager.default.TEXT_TINY_18}}>
                                    {/* {hotel.rating}&nbsp; */}{5 + ((Math.random() * 50)/10).toFixed(2)}
                                </Typography>
                                <Typography component="span" align="left" style={{color: ColorManager.default.fourthColor,fontSize: (isMobile) ? FontManager.default.SMALL_MEDIUM_14 : FontManager.default.TEXT_TINY_18, lineHeight: (isMobile) ? FontManager.default.SMALL_MEDIUM_14 : FontManager.default.TEXT_TINY_18}}>
                                    {/* ({hotel.rating_count.toLocaleString()}) */} &nbsp;({Math.floor(500 + Math.random() * Math.floor(500))})
                                </Typography>
                            </Box>
                            <Divider style={{backgroundColor: ColorManager.default.greyColor, marginTop: (isMobile) ? 5 : 10, marginBottom: (isMobile) ? 5 : 10}} />
                            <Box component="div"> 
                                {(remain < 3) ? 
                                <Remain hotelRemain={remain} isMobile={isMobile}/> : 
                                <Typography component="h3"  align="right" style={{color: ColorManager.default.fourthColor, fontSize: (isMobile) ? FontManager.default.TEXT_EXTRA_24 : FontManager.default.LARGE_EXTRA_40, lineHeight: (isMobile) ? '27px' : FontManager.default.LARGE_MEDIUM_30, textDecorationLine: 'line-through',}}>
                                    {Math.floor(hotel.price + Math.random() * Math.floor(hotel.price*2)).toLocaleString()}
                                </Typography> 
                                }
                                <Typography component="h3"  align="right" style={{color: ColorManager.default.primaryColor, fontSize: (isMobile) ? FontManager.default.TEXT_EXTRA_24 : FontManager.default.LARGE_EXTRA_40, lineHeight: (isMobile) ? FontManager.default.TEXT_MEDIUM_22 : FontManager.default.LARGE_MEDIUM_30, fontFamily: FontManager.default.secondaryFont}}>
                                    THB {hotel.price?.toLocaleString()}
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    );
}

export default item;