import _ from 'lodash';

class ValidationModel {
  public isValid: boolean;
  public message: string;
  public note: any;

  constructor(isValid: boolean, message: string) {
    this.isValid = isValid;
    this.message = message;
  }
}

export default ValidationModel;