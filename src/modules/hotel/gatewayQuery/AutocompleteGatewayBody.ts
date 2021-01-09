import _ from 'lodash'
import Validable from '../interface/Validable';
import ValidationModel from '../models/ValidationModel';
class AutocompleteGatewayBody implements Validable {

  text:string
  lang:string
  
  constructor(json: any) {
    this.text = encodeURIComponent(_.get(json, 'text'))
    this.lang = encodeURIComponent(_.get(json, 'lang'))
  }

  validate() {
    const validationModel = new ValidationModel(true,"")

    if (!this.text) {
      validationModel.isValid = false
      validationModel.message = "Please specify `endpoint`"
    } else if (!this.lang) {
      validationModel.isValid = false
      validationModel.message = "Please specify `identifier`"
    } 
    return validationModel
  }

}

export default AutocompleteGatewayBody