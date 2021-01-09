import _ from 'lodash'
class Configuration {
  key: string
  value: string

  constructor(json: any) {
    this.key = _.get(json, 'key')
    this.value = _.get(json, 'value')
  }
}

export default Configuration