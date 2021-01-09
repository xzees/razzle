import _ from 'lodash'
import ThemeStore from 'stores/theme/ThemeStore'
import LanguageCodeEnum from 'common/enumerations/LanguageCodeEnum'

class TravizgoThemeStore extends ThemeStore {

  analytics = {
    gtmId: ''
  }

  brandInformation = {
    companyName: {
      [LanguageCodeEnum.TH]: 'ทราวิสโก โดย บริษัท ทีทีซี โกลบอล จำกัด',
      [LanguageCodeEnum.EN]: 'TRAVIZGO by TTC Global Co.,Ltd.',
    },
    brandName: {
      [LanguageCodeEnum.TH]: 'ทราวิสโก',
      [LanguageCodeEnum.EN]: 'TRAVIZGO',
    },
    companyAddress: {
      [LanguageCodeEnum.TH]: '3455 อาคารทีทีซี พาร์ค ทาวเวอร์ ชั้น 4 ถนนพระราม 9 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250',
      [LanguageCodeEnum.EN]: '3455 TTC Park Tower 4th floor, IX Rama Rd., Suanluang Sub-district, Suanluang District, Bangkok, 10250',
    },
    taxID: '0105547034583',
    travelLicense: '11/03799',
    IATA_ID: '35308383',
    phoneNumber: '02-171-9999',
    fax: '02-171-9900',
    email: 'rsvn@travizgo.com',
    downloadtitle: 'ดาวน์โหลดแอปไทยทราเวลเซ็นเตอร์',
    playStoreUrl: 'http://onelink.to/travizgo',
    playStoreTitle: 'Download Play Store',
    appStoreUrl: 'http://onelink.to/travizgo',
    appStoreTitle: 'Download TVG App Store',
    socialMedia: {
      facebook: 'https://www.facebook.com/TRAVIZGO.TH/',
      twitter: 'https://twitter.com/travizgo/',
      instagram: 'https://www.instagram.com/travizgo/',
      youtube: 'https://www.youtube.com/c/travizgo',
      flickr: 'https://www.flickr.com/people/travizgo/',
      tumblr: 'http://travizgo.tumblr.com/',
      line: 'https://line.me/ti/p/@TRAVIZGO'
    }
  }

  _termAndConditionUrl = {
    [LanguageCodeEnum.TH]: 'https://travizgo.com/termcondition/th',
    [LanguageCodeEnum.EN]: 'https://travizgo.com/termcondition/en',
  }

  _privacyUrl = {
    [LanguageCodeEnum.TH]: 'https://travizgo.com/privacy/th',
    [LanguageCodeEnum.EN]: 'https://travizgo.com/privacy/en',
  }

  baseWebsite: string = 'https://travizgo.com'
  primaryColor: string = '#187CC7'
  secondaryColor: string = '#084899'
}

export default TravizgoThemeStore