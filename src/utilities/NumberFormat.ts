import _ from 'lodash'
import numeral from 'numeral'
class NumberFormat {
  static default: NumberFormat = new NumberFormat()

  private constructor() { }

  numberWithCommas(numberString: string, alwaysShowDecimalPoint: boolean = true) {
    let format = '0,0[.]00'
    if (alwaysShowDecimalPoint) format = "0,0.00"
    return numeral(numberString).format(format)
  }

  separateDecimalAndPoint(number: number): { decimal: string, points: string } {
    const separated = {
      decimal: '',
      points: ''
    }

    const numberWithPointsString = number.toFixed(2)
    const dotIndex = numberWithPointsString.indexOf('.')
    const decimal = numberWithPointsString.substring(0, dotIndex)
    const points = numberWithPointsString.substring(dotIndex + 1)

    separated.decimal = this.numberWithCommas(decimal, false)
    separated.points = points

    return separated
  }

  leadingZero(s: string, size: number) {
    let str = String(s)
    while (str.length < (size || 2)) { str = "0" + str; }
    return str
  }
}

export default NumberFormat