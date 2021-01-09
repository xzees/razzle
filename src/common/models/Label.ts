import _ from 'lodash'
class Label {
  id: number
  key: string
  value: string

  constructor(json: any) {
    this.id = _.get(json, 'id')
    this.key = _.get(json, 'key')
    this.value = _.get(json, 'value')
  }
}

export default Label