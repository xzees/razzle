
import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import HotelListModel from 'modules/hotel/models/HotelListModel';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';

import supercluster from 'points-cluster';
import RoomIcon from '@material-ui/icons/Room';

import Marker from 'modules/hotel/component/ModelMap/Marker';
import MyClusterMarker from 'modules/hotel/component/ModelMap/MyClusterMarker';

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import RoomlistModel from 'modules/hotel/models/RoomlistModel';
import RoomList from 'modules/hotel/pages/room_list/Layout/Content/Desktop/RoomList';


interface IGoogleMap {
  isMobile: boolean,
  mapCenter: any,
  mapZoom: number,
  roomList: RoomlistModel,
}

interface IGoogleMapOptions {
  center: {
    lat: number,
    lng: number,
  },
  zoom: number,
  bounds: any,
  gestureHandling: string,
  fullscreenControl: boolean,
}

interface IMarkersData {
  id: number,
  name: string,
  address: string,
  lat: number,
  lng: number,
  photo: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatarGroup: {
      '& > .MuiAvatarGroup-avatar': {
        width: '30px',
        height: '30px',
        fontSize: FontManager.default.SMALL_MEDIUM_14,
        backgroundColor: ColorManager.default.fifthColor,
        borderColor: ColorManager.default.fifthColor,
        zIndex: '100 !important',
      },
    },
    avatar: {
      border: '4px solid ' + ColorManager.default.fifthColor,
      position: 'absolute',
    },
    roomIcon: {
      color: ColorManager.default.fifthColor,
      width: '40px',
      height: '35px',
      position: 'absolute',
      top: '15px',
    }
  }),
);

const GoogleMap = (props: IGoogleMap) => {
  const classes = useStyles();
  const { mapCenter, mapZoom, } = props;
  const hotel:RoomlistModel = props.roomList;
  
  const [clusters, setClusters] = useState<any[]>([]);
  const [showMarker, setShowMarker] = React.useState<string>('');
  const defaultMapOptions: IGoogleMapOptions = {
    center: mapCenter,
    zoom: mapZoom,
    bounds: null,
    gestureHandling: 'greedy',
    fullscreenControl: false,
  }

  const [mapOptions, setMapOptions] = useState(defaultMapOptions);

  const markersData: IMarkersData[] = [{ id: hotel.hotelId, name: hotel.hotelInfo.name, lat: hotel.hotelInfo.location.latitude, lng: hotel.hotelInfo.location.longitude, address: hotel.hotelInfo.address, photo: hotel.hotelInfo.hotelPhotos[0].urlMax300 }];

  const getClusters = (markersData: IMarkersData[]) => {
    const clusters = supercluster(markersData, {
      minZoom: 0,
      maxZoom: 16,
      radius: 100,
    });
    return clusters(mapOptions);
  };

  const createClusters = (markersData: IMarkersData[]) => {
    setClusters((mapOptions.bounds) ? getClusters(markersData).map(({ wx, wy, numPoints, points }: { wx: any, wy: any, numPoints: any, points: any }) => ({
      lat: wy,
      lng: wx,
      numPoints,
      id: `${numPoints}_${points[0].id}`,
      points,
    }))
      : []);
  };
  const handleMapChange = ({ center, zoom, bounds }: { center: any, zoom: any, bounds: any }) => {
    setMapOptions({ ...mapOptions, center, zoom, bounds });
  };

  useEffect(() => {
    createClusters(markersData);
  }, [mapOptions]);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDMCTfemEKm_49XKN2jllS5iocsEEmCBhw' }}
      center={mapOptions.center}
      zoom={mapOptions.zoom}
      options={mapOptions}
      onChange={handleMapChange}
    >
      {clusters.map((item, index) => {
        if (item.numPoints === 1) {
          return (
            <Marker
              {...props}
              lat={item.points[0].lat}
              lng={item.points[0].lng}
              name={item.points[0].name}
              photo={item.points[0].photo}
              address={item.points[0].address}
              id={item.points[0].id}
              key={item.id}
              index={index}
              isShowContent={item.id == showMarker}
              onMarkerClick={() => {
                setShowMarker(item.id);
                setMapOptions({
                  ...mapOptions, center: {
                    lat: item.points[0].lat,
                    lng: item.points[0].lng,
                  }
                });
              }}
            >
              <RoomIcon className={classes.roomIcon} />
              <Avatar alt={item.points[0].name} src={item.points[0].photo} className={classes.avatar} />
            </Marker>
          );
        }

        return (
          <MyClusterMarker
            key={item.id}
            lat={item.lat}
            lng={item.lng}
            points={item.points}>
            <AvatarGroup max={4} className={classes.avatarGroup}>
              {item.points.map((p: IMarkersData) => {
                return (
                  <Avatar key={p.id} alt={p.name} src={p.photo} />
                )
              })}
            </AvatarGroup>
          </MyClusterMarker>
        );
      })}
    </GoogleMapReact>
  )
}

export default GoogleMap;