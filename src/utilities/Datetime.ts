import moment, { Moment, unitOfTime } from 'moment-timezone'
import NumberFormat from 'utilities/NumberFormat';
import RootStore from 'stores';

class Datetime {
  readableFormat: string
  dateMonthFormatString: string = 'D MMM YYYY'
  fullDateFormatString: string = 'ddd D MMM YYYY'
  fullDateMonthFormatString: string = 'ddd D MMMM YYYY'

  static default: Datetime = new Datetime()

  private constructor() {
    // moment.locale(RootStore.default.LocalizationStore.lang.toLowerCase())
    this.readableFormat = 'D MMM'
  }

  formatToAppString(isoString: string) {
    const date = this.createDatetime(isoString)
    if (!date) return ''
    let format = this.readableFormat
    let year = date.year()
    return date.format(format) + ' ' + year
  }

  get locale() {
    return RootStore.default.LocalizationStore.lang.toLowerCase()
  }

  getDaysFromNow(lastDateISOString: string) {
    const date = this.createDatetime(lastDateISOString)
    if (!date) return -1
    return date.diff(moment(), 'days')
  }

  getDaysUntilNow(isoString: string) {
    return moment().diff(moment(isoString), 'days')
  }

  now() {
    return moment()
  }

  formatToYYYYMMDDString(datetime: Moment) {
    return `${datetime.locale(this.locale).format("YYYY-MM-DD")}`
  }

  convertFromYYYYDDMMToDate(string: string) {
    return moment(string, "YYYY-MM-DD")
  }

  formatParseZone(isoString: string, format: string) {
    const date = moment.parseZone(isoString)
    return date.locale(this.locale).format(format)
  }

  // getYear(datetime: string | Moment) {
  //   var date: Moment
  //   if (typeof datetime == 'string') {
  //     date = this.createDatetime(datetime as string)!
  //   } else { date = datetime as Moment }

  //   if (date.locale() == 'th') {
  //     return date.year() + 543
  //   }
  //   return date.year()
  // }

  private getDate(datetime: string | Moment, parseZone: boolean = true) {
    var date: Moment
    if (typeof datetime === 'string') {
      const newDate = this.createDatetime(datetime as string, parseZone)
      if (!newDate) return undefined
      date = newDate
    } else { date = datetime as Moment }
    return date
  }

  formatToDDMMMYYYYString(datetimeString: string) {
    const datetime = this.getDate(datetimeString, false)
    if (!datetime) return ''
    return `${datetime.locale(this.locale).format('D MMM YYYY')}`
  }

  diff(aISOString: string, bISOString: string, unit: unitOfTime.Diff = 'days') {
    return moment(aISOString).diff(moment(bISOString), unit)
  }

  fullDateFormat(datetime: Moment | string) {
    const date = this.getDate(datetime)
    if (!date) return ''
    return `${date.locale(this.locale).format(this.fullDateFormatString)}`
  }

  fullDateMonthFormat(datetime: string | Moment) {
    const date = this.getDate(datetime)
    if (!date) return ''
    return `${date.locale(this.locale).format(this.fullDateMonthFormatString)}`
  }

  clone(datetime: Moment) {
    return datetime.clone()
  }

  createDatetime(isoString?: string, parseZone: boolean = true) {
    if (!isoString) return null
    const date = parseZone ? moment.parseZone(isoString) : moment(isoString)
    return date.isValid() ? date : null
  }

  formatToHHMM(isoString: string) {
    const datetime = this.createDatetime(isoString)
    if (!datetime) return ''
    return datetime.locale(this.locale).format('HH:mm')
  }

  format(isoString: string, format: string, parseZone: boolean = false) {
    const datetime = this.createDatetime(isoString, false)
    if (!datetime) return ''
    return (parseZone ? this.formatParseZone(isoString, format) : datetime.locale(this.locale).format(format))
  }

  createDatetimeFromCustomFormat(datetimeString: string, format: string, utc: boolean = false) {
    if (utc) return moment.utc(datetimeString, format)
    return moment(datetimeString, format)
  }

  toDate(isoString?: string) {
    const datetime = this.createDatetime(isoString, false)
    return datetime ? datetime.toDate() : undefined
  }

  millisecondToSplittedHHMMSS(millisecond: number) {
    const inSeconds = millisecond / 1000
    return {
      hours: NumberFormat.default.leadingZero(String(Math.floor(inSeconds / 60 / 60)), 2),
      minutes: NumberFormat.default.leadingZero(String(Math.floor((inSeconds % 3600) / 60)), 2),
      seconds: NumberFormat.default.leadingZero(String(Math.floor((inSeconds % 3600) % 60)), 2)
    }
  }

  min(dates: Moment[]) {
    return moment.min(dates)
  }

  getCurrentTimezone() {
    return moment.tz.guess()
  }

}

export default Datetime