import axios from 'axios'
import APIConfig from 'common/Config/APIConfig'

const TourCollective = 'https://services.thaitravelcenter.com/package/collective/api'

let Feature_Post = `${TourCollective}/tours/collective/featured`
let List_Post = `${TourCollective}/tours/collective/list`
let Search_Post = `${TourCollective}/tours/collective/search`
// let Detail_Get = `${TourCollective}/tours/collective/details/`
// let BookingProcess_Post = `${TourCollective}/booking/create`

const _tourPackageKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTI0IiwibWVtYmVyX2lkIjoiMTI0IiwiYXBpX2lkIjoiNyIsImNvbXBhbnlfdGUiOiJcdTBlMWFcdTBlMjNcdTBlMzRcdTBlMjlcdTBlMzFcdTBlMTcgXHUwZTE3XHUwZTM1XHUwZTE3XHUwZTM1XHUwZTBiXHUwZTM1IFx1MGU0Mlx1MGUwMVx1MGUyNVx1MGUxYVx1MGUyZFx1MGUyNSBcdTBlMDhcdTBlMzNcdTBlMDFcdTBlMzFcdTBlMTQiLCJjb21wYW55X3RoIjoiVFRDIEdMT0JBTCBMVEQuIn0.wWXDbLKhnbVtOalrBepCgj-5gLKnnTuZmbz2VZmFUx4';

const TourPackageConfig = {
  Headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-API-KEY': _tourPackageKey,
    // AppDeviceID: DeviceManager.default.getDeviceId(),
    AppDeviceID: '',
    AppUserID: ''
  },
  Timeout: 40000
}

export async function callApi(method, url, parameter = null, header = null, body = null, timeout) {
  if (header == null) {
    header = {}
  }

  return await axios({
    method,
    headers: header,
    data: body == null ? {} : body,
    url,
    timeout,
    params: parameter == null ? {} : parameter
  })
    .then(function (response) {
      if (response.data.result == 0) {
        console.log(response.data.result)
        alert(url + 'response result : ' + response.data.result)
      }
      return response.data
    })
    .catch(error => error)
}

export async function collectiveFeature() {
  return await callApi('post', `${Feature_Post}`, null, null, null, TourPackageConfig.Timeout)
}
export async function collectiveList(parameter = null) {
  return await callApi('post', `${List_Post}`, parameter, TourPackageConfig.Headers, null, TourPackageConfig.Timeout)
}
export async function collectiveSearch() {
  return await callApi('post', `${Search_Post}`, null, TourPackageConfig.Headers, null, TourPackageConfig.Timeout)
}
// export async function collectiveDetail() {
//   return await callApi('get', `${BookingProcess_Post}`, null, null, null, TourPackageConfig.Timeout)
// }