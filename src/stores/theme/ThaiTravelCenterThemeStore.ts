import _ from 'lodash'
import ThemeStore from 'stores/theme/ThemeStore'
import LanguageCodeEnum from 'common/enumerations/LanguageCodeEnum'
class ThaiTravelCenterThemeStore extends ThemeStore {

  analytics = {
    gtmId: ''
  }

  brandInformation = {
    companyName: {
      [LanguageCodeEnum.TH]: 'บริษัท ทีทีซี โกลบอล จำกัด',
      [LanguageCodeEnum.EN]: 'TTC Global Co.,Ltd.',
    },
    brandName: {
      [LanguageCodeEnum.TH]: 'ไทยทราเวลเซ็นเตอร์',
      [LanguageCodeEnum.EN]: 'ThaitravelCenter',
    },
    companyAddress: {
      [LanguageCodeEnum.TH]: '3455 อาคารทีทีซี              พาร์ค ทาวเวอร์ ชั้น 4 ถนนพระราม 9 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250',
      [LanguageCodeEnum.EN]: '3455 TTC Park Tower 4th floor, IX Rama Rd., Suanluang Sub-district, Suanluang District, Bangkok, 10250',
    },
    taxID: '0105547034583',
    travelLicense: '11/03799',
    IATA_ID: '35308383',
    phoneNumber: '02-171-9999',
    fax: '02-171-9900',
    email: 'rsvn@thaitravelcenter.com',
    downloadtitle: 'ดาวน์โหลดแอปไทยทราเวลเซ็นเตอร์',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thaitravelcenter.app',
    playStoreTitle: 'Download Play Store',
    appStoreUrl: 'https://apps.apple.com/th/app/thai-travel-center/id1489160398',
    appStoreTitle: 'Download TTC App Store',
    socialMedia: {
      facebook: 'https://www.facebook.com/thaitravelcenter',
      twitter: 'https://www.twitter.com/thaitravelenter',
      instagram: 'https://www.instagram.com/thaitravelcenter',
      youtube: 'https://www.youtube.com/thaitravelcenter',
      flickr: 'https://www.flickr.com/people/thaitravelcenter/',
      tumblr: 'http://thaitravelcenter.tumblr.com/',
      line: 'https://line.me/ti/p/@thaitravelcenter'
    }
  }

  _termAndConditionUrl = {
    [LanguageCodeEnum.TH]: 'https://thaitravelcenter.com/termcondition/th',
    [LanguageCodeEnum.EN]: 'https://thaitravelcenter.com/termcondition/en',
  }

  _privacyUrl = {
    [LanguageCodeEnum.TH]: 'https://thaitravelcenter.com/privacy/th',
    [LanguageCodeEnum.EN]: 'https://thaitravelcenter.com/privacy/en',
  }

  baseWebsite: string = 'https://thaitravelcenter.com'
  primaryColor = '#440099';
  secondaryColor = '#3f256b';
}

export default ThaiTravelCenterThemeStore