import _ from 'lodash'
class ColorManager {

  static default: ColorManager = new ColorManager()
  primaryColor = '#440099';
  secondaryColor = '#3f256b';
  thirdColor = '#230550';
  fourthColor = '#888aaa';
  fifthColor = '#694a8d';
  greyColor = '#f3f2fa';
  greyPaleColor = '#c1c1c1';
  redColor = '#ed1c24';
  orangeColor = '#e85e34';
  orange2Color = '#f38141';
  yellowColor = '#ffc412';
  greenColor = '#009780';

  get appColor(): string { return this.primaryColor }
  get appColor2(): string { return this.secondaryColor }

  subLabelColor: string = '#949494'
  redCancel: string = '#A22C3A'
  greenApprove: string = '#35a68d'
  white: string = '#FFFFFF'
  separator: string = '#E1E1E1'
  grey: string = '#C1C2C3'
  lightGrey: string = 'rgba(0,0,0,0.15)'
  white50a: string = 'rgba(255,255,255,0.60)'
  background: string = '#F5F5F5'
  appBackground: string = '#D9DEEA'
  black: string = '#0b0b0b'
  text: string = '#000000'
  redAlert: string = '#D02D2B'
  brown: string = '#998675'
  darkbrown: string = '#53443B'
  elmGreen: string = '#34A68C'
  appBackgroundDarken: string = '#ACAEC1'
  sunflower: string = '#f1c40f'
  red: string = '#EE0833'
  appRed: string = '#EE0833'
  appGreen: string = '#009780'
  appDarkGrey: string = '#BBBCCC'
  emerald: string = '#1F91A2'
  line: string = '#00c300'
  bankTheme = {
    kbank: '#138f2d',
    uob: '#0b3979',
    tmb: '#1279be',
    scb: '#4e2e7f',
    ktb: '#1ba5e1',
    bbl: '#012086',
    bay: '#5e4c4c'
  }
  counterTheme = {
    bigC: '#b3d236',
    sevenEleven: '#127757',
    counterService: '#0b3f92'
  }
  hotelTheme = {
    HeaderList: '#f6e5e7',
  }
  packageTheme = {
    headerColor: '#f6e5e7'
  }
  appOrange: string = '#F97733'
  pendingOrange: string = '#f39c12'
  transparent: string = '#00000000'

  private constructor() { }

}

export default ColorManager;