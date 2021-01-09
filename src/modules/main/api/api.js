import axios from 'axios'
import APIConfig from 'common/Config/APIConfig'

let urlAirline = `${APIConfig.landingPage}/content/airline`
let urlHotel = `${APIConfig.landingPage}/content/hotel`
let urlLabel = `${APIConfig.landingPage}/content/label`
let urlFeature = `${APIConfig.landingPage}/content/feature`

export async function callApi(method, url, parameter = null, header = null, body = null) {
  if (header == null) {
    header = {}
  }
  header.apiKey = 'ZFvnYXXs3V'

  return await axios({
    method,
    headers: header,
    data: body == null ? {} : body,
    url,
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

export async function airlineSort() {
  return await callApi('get', `${urlAirline}`, null, null, null)
}

export async function hotelSort(limit) {
  return await callApi('get', `${urlHotel}?limit=${limit}`, null, null, null)
}

export async function getLabel(body) {
  return await callApi('get', `${urlLabel}`, null, null, body)
}

export async function hotelFeature(limit) {
  return await callApi('get', `${urlFeature}?limit=${limit}`, null, null, null)
}