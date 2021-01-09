import React from 'react';
import Loadable from 'react-loadable';
import HotelList from '../pages/hotel_list';
import Roomlist from '../pages/room_list';
import Reservation from '../pages/reservation'

function renderLoadableComponents(component: any) {
  return Loadable({
    loader: () => component,
    loading: () => null,
  });
}
const isClient = typeof window === 'object';

export default [
  {
    path: '/',
    component:  renderLoadableComponents(
      import(/* webpackChunkName: "hotel home page" */'../pages/landingpage')
    ),
  },
  {
    path: '/roomlist',
    component: renderLoadableComponents(
      import(/* webpackChunkName: "hotel room list" */'../pages/room_list')
    ),
  },
  {
    path: '/search',
    component: renderLoadableComponents(
      import(/* webpackChunkName: "hotel list" */'../pages/hotel_list')
    ),
  },
  // {
  //   path: '/component',
  //   component:  test
  // },
  
  {
    path: '/reservation',
    // component: Reservation
    component: renderLoadableComponents(
      import(/* webpackChunkName: "hotel list" */'../pages/reservation')
    ),
  },
];
