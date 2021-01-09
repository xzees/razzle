import _ from 'lodash'
import { CreditCardTypeEnum } from 'common/enumerations/CreditCardTypeEnum';
class CreditCardUtil {

  static default: CreditCardUtil = new CreditCardUtil()

  private constructor() { }

  private getRegex() {
    return [
      { regEx: /^4[0-9]{5}/ig, cardType: CreditCardTypeEnum.VISA },
      { regEx: /^5[1-5][0-9]{4}/ig, cardType: CreditCardTypeEnum.MASTER_CARD },
      { regEx: /^3[47][0-9]{3}/ig, cardType: CreditCardTypeEnum.AMEX },
      { regEx: /^(5[06-8]\d{4}|6\d{5})/ig, cardType: CreditCardTypeEnum.MAESTRO },
      { regEx: /(^(352)[8-9](\d{11}$|\d{12}$))|(^(35)[3-8](\d{12}$|\d{13}$))/ig, cardType: CreditCardTypeEnum.JCB }
    ]
  }

  getCardType(cardNumber: string): CreditCardTypeEnum | undefined {
    const match = _.head(this.getRegex().filter(x => x.regEx.test(cardNumber)))
    if (!match) return undefined
    return match.cardType
  }
}

export default CreditCardUtil