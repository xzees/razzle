import _ from 'lodash'
import { runtimeConfig } from 'common/Config/Config'
class ConstantManager {

  static isProduction: boolean = runtimeConfig.ENV == 'production'

  static default: ConstantManager = new ConstantManager()

  private constructor() { }

  static getENVConstant(key: string): string {
    return _.get(process.env, key, '')
  }
}

export default ConstantManager