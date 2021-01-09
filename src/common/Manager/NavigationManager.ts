import _ from 'lodash';
import history, { BASENAME } from 'common/history';
import qs from 'query-string';
import NavigationStore from 'stores/Navigation/NavigationStore';
import RootStore from 'stores';

class NavigationManager {

  public static NavigationStore: NavigationStore;

  public static ROUTES = {
    
    HOTEL_SEARCH_LIST: '/hotel/search',
    HOTEL_SEARCH_LIST_TEST: '/hotel/test/search',
    ROOM_LIST: '/hotel/roomlist',
    HOTEL_DETAIL: '/hotel/hoteldetail',
    HOTEL_PASSENGERFORM: '/hotel/hotelpassenger',
    HOTEL_PAYMENTFORM: '/hotel/hotelpayment',
    HOTEL_PAYMENTFAIL: '/hotel/hotelpayment/fail',
    HOTEL_PAYMENTSUCCESS: '/hotel/hotelpayment/success',
    HOTEL_MAPVIEW: '/hotel/search/MapViewlist_hotel',
    HOTEL_HOME: '/hotel',
    HOTEL_RESERVATION: '/hotel/reservation',
  };

  public static getRoute(routeName: string) {
    return BASENAME + routeName;
  }

  public static goTo(route: string, params?: any, replace: boolean = false) {
    if (RootStore.isServer) { return; }
    const validParams = !!params ? (typeof params == 'string' ? params : `?${qs.stringify(params)}`) : ''
    NavigationManager.NavigationStore.currentPath = NavigationManager.getRoute(route)
    if (replace) {
      history.replace(`${route}${validParams}`);
      return;
    }
    history.push(`${route}${validParams}`);
  }

  public static goBack() {
    if (RootStore.isServer) { return; }
    history.goBack();
  }

  public static redirectTo(url: string, params?: any) {
    const validParams = !!params ? (typeof params === 'string' ? params : `?${qs.stringify(params)}`) : '';

    if (RootStore.isServer) {
      return;
    }
    window.location.href = `${url}${validParams}`;
  }

  public static refresh() {
    if (RootStore.isServer) {
      return;
    }
    location.reload();
  }
}

export default NavigationManager;