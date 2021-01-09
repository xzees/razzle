import _ from 'lodash'

class RegularExpression {
  static default: RegularExpression = new RegularExpression()

  private constructor() { }

  regEx = {
    name: /^[a-zA-Z ]+$/,
    fullName: /^[a-zA-Z ]+$/,
    usernameIncludeThai: /^[a-zA-Zก-ฮะ-์]+$/,
    passportNumber: /^[a-zA-Z0-9]+$/,
    citizenNumber: /^[0-9]\d{12}$/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/,
    phoneNumber: /^[0-9]+$/,
    thaiPhoneNumber: /^[0-9]{10}$/,
    creditCard: /^[0-9]\d{15}$/,
    cvv: /^[0-9]{3,4}$/,
    charactersAndNumbers: /^[a-zA-Z0-9ก-ฮะ-์- ]+$/,
    nationality: /^[a-zA-Z0-9- ]+$/,
    any: /^[\s\S]/,
    numbers: /^[0-9]+$/,
    flightBooking: /^[0-9]{10}$/,
    charactersENAndNumbers: /^[a-zA-Z0-9]+$/,
  }

  validate(regex: RegExp, text: string, allowEmpty: boolean): boolean {
    const trimmedText = (text || '')
    if (trimmedText.length == 0 && allowEmpty) return true
    return regex.test(trimmedText)
  }

  NameValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.name, text, allowEmpty)
  }

  fullNameValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.fullName, text, allowEmpty)
  }

  UserNameValidateIncludeThai(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.usernameIncludeThai, text, allowEmpty)
  }

  PassportNumberValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.passportNumber, text, allowEmpty)
  }

  identificationNumberValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.citizenNumber, text, allowEmpty)
  }

  emailValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.email, text, allowEmpty)
  }

  phoneNumberValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.phoneNumber, text, allowEmpty)
  }

  thaiPhoneNumberValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.thaiPhoneNumber, text, allowEmpty)
  }

  creditCardValidate(text: string = '', allowEmpty: boolean = true) {
    return this.validate(this.regEx.creditCard, text, allowEmpty) // {18} because 15 is credit card number (16 digits) 3 is spacing between
  }
}

export default RegularExpression