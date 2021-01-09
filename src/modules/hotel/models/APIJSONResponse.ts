import _ from 'lodash'
import APIResponse from 'common/Manager/Models/API/APIRespones';

class APIJSONResponse implements APIResponse {

  data: any[]
  success:boolean
  
  constructor(data: any, success: boolean = false) {
    this.data = _.get(data, 'data') || [];
    this.success = success

  }

  toAPIResponse() {
    return {
      status: 200,
      ...this.data
    }
  } 

  static create(data: any): APIJSONResponse {
    let apiJSONResponse = new APIJSONResponse('')
    apiJSONResponse.data = data
    return apiJSONResponse
  }
}

export default APIJSONResponse