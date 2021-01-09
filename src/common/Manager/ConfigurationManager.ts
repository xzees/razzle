import _ from 'lodash'
import APIManager from 'common/Manager/APIManager';
import Configuration from 'common/models/Configuration';
import ConfigurationAPIRequest from 'common/APIRequests/ConfigurationAPIRequest';
class ConfigurationManager {
  static default: ConfigurationManager = new ConfigurationManager()
  private configurationsMap: { [key: string]: string } = {}
  json: any

  private constructor() { }

  fetch(): Promise<string> {
    if (!_.isEmpty(this.configurationsMap)) return Promise.resolve('success')
    return new Promise(async (resolve, reject) => {
      try {
        this.configurationsMap = {}
        const apiRequest = new ConfigurationAPIRequest()
        const response = await APIManager.default.fetch(apiRequest)
        const configurationsJSON: any[] = _.get(response.data, 'data_list') || []
        const configurations = configurationsJSON.map(x => new Configuration(x))
        configurations.forEach(configuration => {
          this.configurationsMap[configuration.key] = configuration.value
        })
        resolve("success")
      } catch (error) {
        reject(error)
      }
    })
  }
  rehydrate(json: any) {
    const configurationsJSON: any[] = json || []
    const configurations = configurationsJSON.map(x => new Configuration(x))
    configurations.forEach(configuration => {
      this.configurationsMap[configuration.key] = configuration.value
    })
  }

  get(key: string): string {
    return this.configurationsMap[key]
  }
}

export default ConfigurationManager