import { BASENAME } from "common/history";

const PROD_API_GATEWAY_DOMAIN = "https://dev-services.travizgo.com";
const DEV_API_GATEWAY_DOMAIN = "https://dev-services.travizgo.com";
const DEV_DOMAIN = "http://localhost:3000";
const DEV_FRONTEND = "https://dev-web.thaitravelcenter.com";
// const DEV_FRONTEND = "http://http://localhost:3000";

// const PROD_TTC_API_GATEWAY_DOMAIN = "https://services.thaitravelcenter.com";
const PROD_TTC_API_GATEWAY_DOMAIN = "https://www.thaitravelcenter.com";

const HOSTNAME = "travizgo.com";

const PROD = {
  app: `${PROD_API_GATEWAY_DOMAIN}/app/api`,
  web: `https://staging.travizgo.site` + BASENAME,
  assets: `https://assets.${HOSTNAME}/production/web`,
  flight: {
    apiStandardSocket: `https://api-flight.${HOSTNAME}`,
    apiStandard: `${PROD_API_GATEWAY_DOMAIN}/flight/api`,
    creditCardFormPostUrl: `https://payment.${HOSTNAME}/Api/AllPayment/form_checkout3`,
    qrCreditAPI: `https://www.travizgo.com/api/payment/gateway/gb/qrcredit/`,
    invoice: `https://payment.${HOSTNAME}/Api/RenderFile/CreateReceipt`,
  },
  hotel: {
    hotel_proxy: `${PROD_API_GATEWAY_DOMAIN}/hotel/api/`,
    hotel_Payment: `https://dev-vm.travizgo.site/Travizgo/AllPayment/form_checkout3`,
    hotel_standard: `https://dev-hotel-backoffice.travizgo.site/`,
    hotel_CMS: `${PROD_API_GATEWAY_DOMAIN}/cms/hotel/content/`,
    autoComplete: `${PROD_API_GATEWAY_DOMAIN}/hotel-standard/api/v1/hotel/autocomplete`,
    search: `${PROD_API_GATEWAY_DOMAIN}/hotel-standard/api/search`,
    // search: `http://172.16.30.4:5000/search`,
    roomlist: `${PROD_API_GATEWAY_DOMAIN}/hotel-standard/api/v1/hotel/rooms/list`,
    // roomlist: `http://172.16.30.4:5000/v1/hotel/rooms/list`,
    hotelListSocket: 'https://socket-hotel-service.travizgo.dev',
    // hotelListSocket: 'http://172.16.30.4:5000',
    label: `https://dev-label-translation.ttcglobal.network/fetch`,
    order: `${PROD_API_GATEWAY_DOMAIN}/hotel-standard/api/reservation`,
    // order: `http://172.16.30.4:5000/reservation`,
    paymentChanel: `https://dev-api.sabuypay.com/payment/list`,
    getReservationOrder: `http://172.16.30.4:5000/reservation`,
  },
  package: {
    cms: `${PROD_API_GATEWAY_DOMAIN}/cms/sightseeing`,
    creditCardFormPostUrl: `https://payment.${HOSTNAME}/Api/AllPayment/form_checkout3`,
    langUrl: `${PROD_API_GATEWAY_DOMAIN}/sightseeing/backoffice/api`,
    apiStandard: `${PROD_API_GATEWAY_DOMAIN}/sightseeing/backoffice/api`,
  },
  collective: {
    // autoComplete: `${PROD_TTC_API_GATEWAY_DOMAIN}/package/collective/api/tours/collective/search`,
    autoComplete: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/search.php`,
    autoCompleteDev: `http://localhost:3000/collective/autocomplete`,
    tourSEO: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/seo.php`,
    tourCategory: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/category.php`,
    tourList: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/list.php`,
    tourListDev: `http://localhost:3000/collective/tourlist`,
    tourListFilter: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/filter.php`,
    tourListRelated: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/related.php`,
    // tour_details: `${PROD_TTC_API_GATEWAY_DOMAIN}/package/collective/api/tours/collective/details`,
    tourDetail: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/detail.php`,
    tourDetailDev: `http://localhost:3000/collective/tourdetail`,
  },
  landingPage: `${PROD_API_GATEWAY_DOMAIN}/cms/landing`,
  assetsModules: {
    flight: "flight",
    hotel: "hotel",
    landingPage: "landing_page",
    payment: "payment",
    common: "common",
    package: "package",
    account: "account",
    collectiveTour: "collective_tour",
  },
};

const DEV = {
  app: `${DEV_API_GATEWAY_DOMAIN}/app/api`,
  frontend: `${DEV_FRONTEND}`,
  web: `https://dev-for-cms.travizgo.site` + BASENAME,
  assets: `https://assets.thaitravelcenter.com/development/web-v2`,
  apiservice: `${DEV_API_GATEWAY_DOMAIN}`,
  flight: {
    apiStandardSocket: `https://dev-api-flight.thaitravelcenter.com`,
    apiStandard: `https://dev-services.thaitravelcenter.com/flight/api`,
    // apiStandardSocket: `https://dev-api-flight.${HOSTNAME}`,
    // apiStandard: `${DEV_API_GATEWAY_DOMAIN}/flight/api`,
    // creditCardFormPostUrl: 'https://www.travizgo.com/api_test/payment/gateway/gb/pay/',
    creditCardFormPostUrl: `https://dev-vm2.travizgo.site/ThaiTravelCenter/AllPayment/form_checkout3`,
    qrCreditAPI: `https://www.travizgo.com/api_test/payment/gateway/gb/qrcredit/`,
    invoice: "https://dev-vm2.travizgo.site/Travizgo/RenderFile/CreateReceipt",
  },
  hotel: {
    hotel_proxy: `${DEV_API_GATEWAY_DOMAIN}/hotel/api/`,
    hotel_Payment: `https://payment.${HOSTNAME}/Api/AllPayment/form_checkout3`,
    hotel_standard: `https://hotel-backoffice.travizgo.com/`,
    hotel_CMS: `${DEV_API_GATEWAY_DOMAIN}/cms/hotel/content/`,
    autoComplete: `${DEV_API_GATEWAY_DOMAIN}/hotel-standard/api/v1/hotel/autocomplete`,
    search: `${DEV_API_GATEWAY_DOMAIN}/hotel-standard/api/search`,
    // search: `http://172.16.30.4:5000/search`,
    roomlist: `${DEV_API_GATEWAY_DOMAIN}/hotel-standard/api/v1/hotel/rooms/list`,
    // roomlist: `http://172.16.30.4:5000/v1/hotel/rooms/list`,
    hotelListSocket: 'https://socket-hotel-service.travizgo.dev',
    // hotelListSocket: 'http://172.16.30.4:5000',
    popular_city: 'https://demo1659663.mockable.io/popular',
    label: `https://dev-label-translation.ttcglobal.network/fetch`,
    order: `${DEV_API_GATEWAY_DOMAIN}/hotel-standard/api/reservation`,
    // order: `http://172.16.30.4:5000/reservation`,
    paymentChanel: `https://dev-api.sabuypay.com/payment/list`,
  },
  package: {
    //`https://dev-vm.travizgo.site/Api/AllPayment/form_checkout3`,
    cms: `${DEV_API_GATEWAY_DOMAIN}/cms/sightseeing`,
    creditCardFormPostUrl: `https://dev-vm2.travizgo.site/Travizgo/AllPayment/form_checkout3`,
    langUrl: `${DEV_API_GATEWAY_DOMAIN}/sightseeing/api`,
    apiStandard: `${DEV_API_GATEWAY_DOMAIN}/sightseeing/api`,
  },
  collective: { 
    // autoComplete: `${PROD_TTC_API_GATEWAY_DOMAIN}/package/collective/api/tours/collective/search`,
    autoComplete: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/search.php`,
    autoCompleteDev: `${DEV_DOMAIN}/collective/autocomplete`,
    tourSEO: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/seo.php`,
    tourSEOV2: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/seo_v2.php`,
    tourCategory: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/category.php`,
    tourList: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/list.php`,
    tourListV2: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/list_v2.php`,
    tourListDev: `${DEV_DOMAIN}/collective/tourlist`,
    tourListFilter: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/filter.php`,
    tourListRelated: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/related.php`,
    // tour_details: `${PROD_TTC_API_GATEWAY_DOMAIN}/package/collective/api/tours/collective/details`,
    tourDetail: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/detail.php`,
    tourRecommend: `${PROD_TTC_API_GATEWAY_DOMAIN}/tour-api/module/recommend.php`,
    tourDetailDev: `${DEV_DOMAIN}/collective/tourdetail`,
  },
  landingPage: `${DEV_API_GATEWAY_DOMAIN}/cms/landing`,
  assetsModules: {
    flight: "flight",
    hotel: "hotel",
    landingPage: "landing_page",
    payment: "payment",
    common: "common",
    package: "package",
    account: "common_dev",
    collectiveTour: "collective_tour",
    template: "template",
  },
};

/** TODO-production: Change this */
const APIConfig = DEV;

export default APIConfig;

export const getModuleAssetsUrl = (
  module:
    | "flight"
    | "hotel"
    | "package"
    | "landingPage"
    | "payment"
    | "common"
    | "account"
    | "collectiveTour"
    | "template"
) => {
  const API = DEV;
  return `${API.assets}/${API.assetsModules[module]}`;
};
