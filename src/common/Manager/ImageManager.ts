import _ from 'lodash'
import { getModuleAssetsUrl } from 'common/Config/APIConfig';


class ImageManager {
  static default: ImageManager = new ImageManager()

  private constructor() {
    // library.add(Icons.faMapMarkerAlt)
    // library.add(Icons.faPlane)
    // library.add(Icons.faExchangeAlt)
    // library.add(Icons.faTimes)
    // library.add(Icons.faChevronLeft)
    // library.add(Icons.faChevronRight)
    // library.add(Icons.faChevronUp)
    // library.add(Icons.faChevronDown)
    // library.add(Icons.faExclamationCircle)
    // library.add(Icons.faCheck)
    // library.add(Icons.faSortDown)
    // library.add(Icons.faShoppingCart)
    // library.add(Icons.faCaretUp)
    // library.add(Icons.faCaretDown)
    // library.add(Icons.faTrashAlt)
    // library.add(Icons.faPlaneDeparture)
    // library.add(Icons.faPlus)
    // library.add(Icons.faMinus)
    // library.add(Icons.faCalendarAlt)
    // library.add(Icons.faClock)
    // library.add(Icons.faLaptop)
    // library.add(Icons.faSearch)
    // library.add(Icons.faReceipt)
    // library.add(Icons.faDollarSign)
    // library.add(Icons.faClipboardList)
    // library.add(Icons.faLongArrowAltRight)
    // library.add(Icons.faInfoCircle)
    // library.add(Icons.fas)
    // library.add(IconsRegular.faCheckCircle)
  }

  images = {
    common: {
      BG2: (getModuleAssetsUrl('template')+'/bg3.jpg'),
      BGCONTENT: (getModuleAssetsUrl('template')+'/banner-672.jpg'),
      dropDownArrowWhite: (getModuleAssetsUrl('common') + '/drop-down-arrow-white.svg'),
      arrowLeftWhite: (getModuleAssetsUrl('common') + '/left-arrow-white.svg'),
      arrowRightWhite: (getModuleAssetsUrl('common') + '/right-arrow-white.svg'),
      calendarWhite: (getModuleAssetsUrl('common') + '/calendar-white.svg'),
      checkedWhite: (getModuleAssetsUrl('common') + '/checked-white.svg'),
      logo: (getModuleAssetsUrl('common') + '/logo.png'),
      logoWhite: (getModuleAssetsUrl('common') + '/logo-white.png'),
      menuBlue: (getModuleAssetsUrl('common') + '/menu-blue.svg'),
      creditCard: (getModuleAssetsUrl('common') + '/payment-methods/credit-card.svg'),
      bank: (getModuleAssetsUrl('common') + '/payment-methods/bank.svg'),
      counter: (getModuleAssetsUrl('common') + '/payment-methods/counter.svg'),
      flag: {
        TH: (getModuleAssetsUrl('common') + '/flag/TH.svg'),
        EN: (getModuleAssetsUrl('common') + '/flag/EN.svg'),
      },
      creditCardIcons: {
        visa: (getModuleAssetsUrl('common') + '/payment-methods/credit-card-icons/visa.png'),
        masterCard: (getModuleAssetsUrl('common') + '/payment-methods/credit-card-icons/mastercard.png'),
        amax: (getModuleAssetsUrl('common') + '/payment-methods/credit-card-icons/amax.png'),
      },
      creditCardBrands: {
        ktc: (getModuleAssetsUrl('common') + '/payment-methods/credit-card-brands/ktc.png?v=2'),
        citiBank: (getModuleAssetsUrl('common') + '/payment-methods/credit-card-brands/citibank.png?v=1'),
      },
      counterIcons: {
        bigC: (getModuleAssetsUrl('common') + '/payment-methods/counter-icons/big-c.jpg'),
        counterService: (getModuleAssetsUrl('common') + '/payment-methods/counter-icons/counter-service.jpg'),
        sevenEleven: (getModuleAssetsUrl('common') + '/payment-methods/counter-icons/seven-eleven.jpg'),
      },
      bankInstructions: {
        internetBankingDisabled: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-disabled.png'),
        atmDisabled: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-disabled.png'),
        counterDisabled: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-disabled.png'),
      },
      bankIcons: {
        kbank: {
          icon: (getModuleAssetsUrl('common') + '/payment-methods/bank-icons/kbank.png'),
          appIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/kbank.png'),
          appIconDisabed: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/kbank-disabled.png'),
          internetBankingIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-kbank.png'),
          atmIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-kbank.png'),
          counterIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-kbank.png'),
        },
        bay: {
          icon: (getModuleAssetsUrl('common') + '/payment-methods/bank-icons/bay.png'),
          appIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/bay.png'),
          appIconDisabed: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/bay-disabled.png'),
          internetBankingIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-bay.png'),
          atmIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-bay.png'),
          counterIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-bay.png'),
        },
        uob: {
          icon: (getModuleAssetsUrl('common') + '/payment-methods/bank-icons/uob.png'),
          appIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/uob.png'),
          appIconDisabed: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/uob-disabled.png'),
          internetBankingIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-uob.png'),
          atmIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-uob.png'),
          counterIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-uob.png'),
        },
        tmb: {
          icon: (getModuleAssetsUrl('common') + '/payment-methods/bank-icons/tmb.png'),
          appIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/tmb.png'),
          appIconDisabed: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/tmb-disabled.png'),
          internetBankingIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-tmb.png'),
          atmIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-tmb.png'),
          counterIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-tmb.png'),
        },
        ktb: {
          icon: (getModuleAssetsUrl('common') + '/payment-methods/bank-icons/ktb.png'),
          appIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/ktb.png'),
          appIconDisabed: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/ktb-disabled.png'),
          internetBankingIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-ktb.png'),
          atmIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-ktb.png'),
          counterIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-ktb.png'),
        },
        bbl: {
          icon: (getModuleAssetsUrl('common') + '/payment-methods/bank-icons/bbl.png'),
          appIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/bbl.png'),
          appIconDisabed: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/bbl-disabled.png'),
          internetBankingIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-bbl.png'),
          atmIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-bbl.png'),
          counterIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-bbl.png'),
        },
        scb: {
          icon: (getModuleAssetsUrl('common') + '/payment-methods/bank-icons/scb.png'),
          appIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/scb.png'),
          appIconDisabed: (getModuleAssetsUrl('common') + '/payment-methods/bank-app-icons/scb-disabled.png'),
          internetBankingIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/internet-banking-scb.png'),
          atmIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/atm-scb.png'),
          counterIcon: (getModuleAssetsUrl('common') + '/payment-methods/bank-instructions/counter-service-scb.png'),
        }
      },
      emailWhite: (getModuleAssetsUrl('common') + '/payment-methods/email-white.png'),
      crown: (getModuleAssetsUrl('common') + '/crown.png'),
      header: {
        LogoImage: (getModuleAssetsUrl('template') + '/ttc-logo.svg'),
        DownloadApp: (getModuleAssetsUrl('template') + '/download.svg'),
        LineIcon: (getModuleAssetsUrl('template') + '/line-color.svg'),
        FBIcon: (getModuleAssetsUrl('template') + '/facebook-color.svg'),
        IGIcon: (getModuleAssetsUrl('template') + '/instagram-color.svg'),
        Avatar: (getModuleAssetsUrl('template') + '/Bright.jpg'),
        ThaiFlag: (getModuleAssetsUrl('template') + '/thailand-flag.svg'),
        currencyIcon: (getModuleAssetsUrl('template') + '/currency.svg'),
      },
      menu:{
        IconHome: (getModuleAssetsUrl('template') + '/home.svg'),
        IconFlight: (getModuleAssetsUrl('template') + '/flight.svg'),
        IconHotel: (getModuleAssetsUrl('template') + '/hotel.svg'),
        IconTour: (getModuleAssetsUrl('template') + '/tour.svg'),
        IconPKTour: (getModuleAssetsUrl('template') + '/package-tour.svg'),
        IconSS: (getModuleAssetsUrl('template') + '/sightseeing.svg'),
        IconInsurance: (getModuleAssetsUrl('template') + '/insurance.svg'),
        IconDMC: (getModuleAssetsUrl('template') + '/dmc.svg'),
        IconCruise: (getModuleAssetsUrl('template') + '/cruise.svg'),
        IconRail: (getModuleAssetsUrl('template') + '/rail.svg'),
        IconCars: (getModuleAssetsUrl('template') + '/car.svg'),
        IconVisa: (getModuleAssetsUrl('template') + '/visa.svg'),
      },
      toggleMenu:{
        lineIcon: (getModuleAssetsUrl('template') + '/line.svg'),
        messengerIcon: (getModuleAssetsUrl('template') + '/messenger.svg'),
        appstoreImage: (getModuleAssetsUrl('template') + '/appstore-color.svg'),
        playstoreImage: (getModuleAssetsUrl('template') + '/googleplay-color.svg'),
      },
      footerImage: (getModuleAssetsUrl('common') + '/footer-image.png'),
      footer: {
        bgfooter: (getModuleAssetsUrl('template') + '/kanok.svg'),
        newsletter: (getModuleAssetsUrl('template') + '/3737.png'),
        appstoreImage: (getModuleAssetsUrl('template') + '/appstore.svg'),
        playstoreImage: (getModuleAssetsUrl('template') + '/googleplay.svg'),
        socialIcon: {
          facebookIcon: (getModuleAssetsUrl('template') + '/facebook.svg'),
          twitterIcon: (getModuleAssetsUrl('template') + '/twitter.svg'),
          youtubeIcon: (getModuleAssetsUrl('template') + '/youtube.svg'),
          instagramIcon: (getModuleAssetsUrl('template') + '/instagram.svg'),
        }
      },
      lineShared: (getModuleAssetsUrl('template') + '/line-shared-color.svg'),
      pdf: (getModuleAssetsUrl('template') + '/pdf.svg'),
      printer: (getModuleAssetsUrl('template') + '/printer.svg'),
      email: (getModuleAssetsUrl('template') + '/email.svg'),
      shared: (getModuleAssetsUrl('template') + '/share.svg'),
      map: (getModuleAssetsUrl('template') + '/map-point.svg'),

    },
    flight: {
      happiness: (getModuleAssetsUrl('flight') + '/happiness.svg'),
      like: (getModuleAssetsUrl('flight') + '/like.svg'),
      pinBlack: (getModuleAssetsUrl('flight') + '/pin-black.svg'),
      planeBlack: (getModuleAssetsUrl('flight') + '/plane-black.svg'),
      idCard: (getModuleAssetsUrl('flight') + '/id-card.png'),
      passport: (getModuleAssetsUrl('flight') + '/passport.png'),
      adult: (getModuleAssetsUrl('flight') + '/adult.png'),
      child: (getModuleAssetsUrl('flight') + '/child.png'),
      infant: (getModuleAssetsUrl('flight') + '/infant.png'),
      paymentSuccess: (getModuleAssetsUrl('flight') + '/payment-success.png'),
      paymentFail: (getModuleAssetsUrl('flight') + '/payment-fail.jpg'),
      seatLong: (getModuleAssetsUrl('flight') + '/seat-long.png'),
      seatWidth: (getModuleAssetsUrl('flight') + '/seat-width.png'),
      seatAngle: (getModuleAssetsUrl('flight') + '/seat-angle.png'),
      notFound: (getModuleAssetsUrl('flight') + '/flight-not-found.png'),
      ticket: (getModuleAssetsUrl('flight') + '/ticket.svg'),
      blueSkyBackground: (getModuleAssetsUrl('flight') + '/blue-sky.png'),
      airplaneWithMoonBackground: (getModuleAssetsUrl('flight') + '/airplane-with-moon-background.png'),
      magnifying: (getModuleAssetsUrl('flight') + '/magnifying.svg'),
    },
    hotel: {
      icon: {
        crown: (getModuleAssetsUrl('hotel') + '/icon/crown.svg'),
        coin: (getModuleAssetsUrl('hotel') + '/icon/coin.svg'),
        kanokOrange: (getModuleAssetsUrl('hotel') + '/icon/kanok-orange.svg'),
        verified: (getModuleAssetsUrl('hotel') + '/icon/verified.svg'),
        tag: (getModuleAssetsUrl('hotel') + '/icon/tag.svg'),
        bed1: (getModuleAssetsUrl('hotel') + '/icon/bed 1.svg'),
        bed2: (getModuleAssetsUrl('hotel') + '/icon/bed 2.svg'),
      },
      fontHotel: (getModuleAssetsUrl('hotel') + '/fontHotel3.svg'),
      magnifying: (getModuleAssetsUrl('hotel') + '/magnifying.svg'),
      BG2: (getModuleAssetsUrl('hotel')+'/bg3.jpg'),
      BG9: (getModuleAssetsUrl('hotel')+'/bg9.png'),
      banner: (getModuleAssetsUrl('hotel')+'/boy-girl2.png?v='+Math.random()),
      btnApp: (getModuleAssetsUrl('hotel')+'/app.svg'),
      btnPlayStore: (getModuleAssetsUrl('hotel')+'/playstore.svg'),
      france: (getModuleAssetsUrl('hotel') + '/077-france.svg'),
      bangkok: (getModuleAssetsUrl('hotel') + '/bangkok.jpg'),
      boy: (getModuleAssetsUrl('hotel') + '/boy.png'),
      girlBall: (getModuleAssetsUrl('hotel') + '/girlball.png'),
      shutterStock: (getModuleAssetsUrl('hotel') + '/shutterstock.png'),
      map: (getModuleAssetsUrl('hotel') + '/map.jpg'),
      solitaire: (getModuleAssetsUrl('hotel') + '/Solitaire.jpg'),
      mercure: (getModuleAssetsUrl('hotel') + '/mercure.jpg'),
      mitsui: (getModuleAssetsUrl('hotel') + '/mitsui_garden_Hotel.jpg'),
      tripadvisorIcon: (getModuleAssetsUrl('hotel') + '/tripadvisor.jpg'),
      cham: (getModuleAssetsUrl('hotel') + '/cham.jpg'),
      BG1: (getModuleAssetsUrl('hotel') + '/bg.png'),
      star_full: (getModuleAssetsUrl('hotel') + '/star_full.png'),
      star_half: (getModuleAssetsUrl('hotel') + '/star_half.png'),
      krooms: (getModuleAssetsUrl('hotel') + '/krooms.jpg'),
      flash_white: (getModuleAssetsUrl('hotel') + '/flash-white.png'),
      alarm_clock: (getModuleAssetsUrl('hotel') + '/alarm-clock.png'),
      italy: (getModuleAssetsUrl('hotel') + '/011-italy.svg'),
      heartblue: (getModuleAssetsUrl('hotel') + '/heart-blue.png'),
      starblue: (getModuleAssetsUrl('hotel') + '/star-blue.png'),
      tag: (getModuleAssetsUrl('hotel') + '/tag.png'),
      promotion: (getModuleAssetsUrl('hotel') + '/promotion.png'),
      discountblue: (getModuleAssetsUrl('hotel') + '/discount-blue.png'),
      crown: (getModuleAssetsUrl('hotel') + '/crown.png'),
      mangrey: (getModuleAssetsUrl('hotel') + '/adult-gray.png'),
      nightgrey: (getModuleAssetsUrl('hotel') + '/night.svg'),
      doorgrey: (getModuleAssetsUrl('hotel') + '/door-grey.png'),
      arrowdown: (getModuleAssetsUrl('hotel') + '/arrow-down.png'),
      arrowleft: (getModuleAssetsUrl('hotel') + '/arrow-left.png'),
      arrowleftwhite: (getModuleAssetsUrl('hotel') + '/arrowleft.png'),
      arrowright: (getModuleAssetsUrl('hotel') + '/arrow-right.png'),
      calendargrey: (getModuleAssetsUrl('hotel') + '/calendar.png'),
      bed: (getModuleAssetsUrl('hotel') + '/bed.png'),
      passenger: (getModuleAssetsUrl('hotel') + '/passenger.png'),
      push: (getModuleAssetsUrl('hotel') + '/push.png'),
      miner: (getModuleAssetsUrl('hotel') + '/miner.png'),
      equalizerblue: (getModuleAssetsUrl('hotel') + '/equalizer-blue.png'),
      travizgorate: (getModuleAssetsUrl('hotel') + '/travizgilogo.png'),
      tripadvisorrate4_5: (getModuleAssetsUrl('hotel') + '/ratings-4-5.png'),
      checkin: (getModuleAssetsUrl('hotel') + '/checkin.png'),
      checkout: (getModuleAssetsUrl('hotel') + '/checkout.png'),
      information: (getModuleAssetsUrl('hotel') + '/information.png'),
      place: (getModuleAssetsUrl('hotel') + '/place.png'),
      down: (getModuleAssetsUrl('hotel') + '/down.png'),
      tripadvisorrate5: (getModuleAssetsUrl('hotel') + '/ratings-5.png'),
      thumbsup: (getModuleAssetsUrl('hotel') + '/thumbsup.png'),
      empty_cycle: (getModuleAssetsUrl('hotel') + '/Circle.png'),
      plus_disable: (getModuleAssetsUrl('hotel') + '/plus_disable.jpg'),
      minus_disable: (getModuleAssetsUrl('hotel') + '/minus_disable.jpg'),
      arrow_left_grey: (getModuleAssetsUrl('hotel') + '/arrow-left-grey.png'),
      quotationmark: (getModuleAssetsUrl('hotel') + '/quotation-mark.png'),
      googleplay: (getModuleAssetsUrl('hotel') + '/googleplay.png'),
      appstore: (getModuleAssetsUrl('hotel') + '/appstore.png'),
      imgDot1: (getModuleAssetsUrl('hotel') + '/dot1.jpg'),
      one_finger_click: (getModuleAssetsUrl('hotel') + '/one-finger-click.png'),
      tourist: (getModuleAssetsUrl('hotel') + '/tourist.png'),
      ssl: (getModuleAssetsUrl('hotel') + '/ssl.png'),
      saletag: (getModuleAssetsUrl('hotel') + '/sale-tag.png'),
      thai: (getModuleAssetsUrl('hotel') + '/thai.png'),
      successpaymenthotel: (getModuleAssetsUrl('hotel') + '/success_image.png'),
      hotelreception: (getModuleAssetsUrl('hotel') + '/hotel-reception.jpg'),
      phuket: (getModuleAssetsUrl('hotel') + '/phuket.jpg'),
      chiangmai: (getModuleAssetsUrl('hotel') + '/chiangmai.jpg'),
      pattaya: (getModuleAssetsUrl('hotel') + '/pattaya.jpg'),
      bedblue: (getModuleAssetsUrl('hotel') + '/bed-blue.png'),
      twohearts: (getModuleAssetsUrl('hotel') + '/two-hearts.png'),
      bedwhite: (getModuleAssetsUrl('hotel') + '/bed-white.png'),
      tripad: (getModuleAssetsUrl('hotel') + '/Tripadvisor.jpg'),
    },
    package: {
      icon: {
        tag: (getModuleAssetsUrl('package') + '/icon/tag.svg'),
      },
      mainBoy: (getModuleAssetsUrl('package') + '/main-boy.png'),
      bannerMain: (getModuleAssetsUrl('package') + '/banner-main.jpg'),
      mainBrowser: (getModuleAssetsUrl('package') + '/main-browser.png'),
      mainMobile: (getModuleAssetsUrl('package') + '/main-mobile.png'),
      chinaTownSingapore: (getModuleAssetsUrl('package') + '/chinatown-singapore.png'),
      riverRafting: (getModuleAssetsUrl('package') + '/river-rafting.jpg'),
      france1930775: (getModuleAssetsUrl('package') + '/france-1930775.jpg'),
      bg2: (getModuleAssetsUrl('package') + '/bg2.jpg'),
      aircraft: (getModuleAssetsUrl('package') + '/aircraft-465723.jpg'),
      appstore: (getModuleAssetsUrl('package') + '/appstore.png'),
      googleplay: (getModuleAssetsUrl('package') + '/googleplay.png'),
      contentBG1: (getModuleAssetsUrl('package') + '/b-1.jpg'),
      contentBG2: (getModuleAssetsUrl('package') + '/b-2.jpg'),
      contentBG3: (getModuleAssetsUrl('package') + '/b-3.jpg'),
    },
  }
}

export default ImageManager