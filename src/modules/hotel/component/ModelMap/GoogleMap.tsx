
import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import HotelListModel from 'modules/hotel/models/HotelListModel';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';

import supercluster from 'points-cluster';
import RoomIcon from '@material-ui/icons/Room';

import Marker from './Marker';
import MyClusterMarker from './MyClusterMarker';

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

interface IGoogleMap {
  children: JSX.Element[]
  isMobile: boolean,
  mapCenter: any,
  mapZoom: number,
  hotelLists: HotelListModel[],
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
  id: string,
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
  const { mapCenter, mapZoom, hotelLists } = props;
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

  const markersData: IMarkersData[] = hotelLists.map((hotel) => { return { id: hotel.hotelId, name: hotel.name, lat: hotel.location.latitude, lng: hotel.location.longitude, address: hotel.address, photo: hotel.hotelMainPhoto.urlMax300 } });

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
      {clusters.map(item => {
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
              index={item.id}
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
            {/* <Badge badgeContent={item.numPoints} /> */}
          </MyClusterMarker>
        );
      })}
    </GoogleMapReact>
  )
}

export default GoogleMap;