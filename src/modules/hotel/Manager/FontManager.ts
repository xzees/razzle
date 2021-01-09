import _ from 'lodash'
import ScreenManager from 'common/Manager/ScreenManager';

class FontManager {
  static default: FontManager = new FontManager()
  
  private MOBILE_OFFSET = -0
  private ULTRA_LARGE_SIZE = 3.0
  private MEDIUM_LARGE_SIZE = 2.3
  private EXTRA_LARGE_SIZE = 1.9
  private LARGE_SIZE = 1.8
  private HEADER_SIZE = 1.6
  private TEXT_SIZE = 1.4 
  private REMARK_SIZE = 1.3 
  private SMALL_SIZE = 1.3125
  private MEDIUM_SMALL_SIZE = 1
  private EXTRA_SMALL_SIZE = 0.8
  private SPECIAL_SIZE = 4.0
  
  public LARGE_ULTRA_50 = '51px'
  public LARGE_EXTRA_40 = '41px'
  public LARGE_MEDIUM_30 = '31px'
  public LARGE_MEDIUM_32 = '33px'
  public LARGE_28 = '29px'
  public TEXT_EXTRA_24 = '25px'
  public TEXT_MEDIUM_22 = '23px'
  public TEXT_20 = '21px'
  public TEXT_TINY_18 = '19px'
  public TEXT_TINY_EXTRA_17 = '17px'
  public SMALL_MEDIUM_14 = '15px'
  public SMALL_12 = '13px'
  public SMALL_TINY_10 = '11px'

  private constructor() { }

  primaryFont = "DBHeaventRoundedv32"
  secondaryFont = "DBHeaventRoundedMedv32"
  thirdFont = "Sarabun"

  private convertToEM(size: number) {
    return size + 'em'
  }
  private convertToREM(size: number) {
    return size + 'rem'
  }

  get ultraLarge() {
    if (ScreenManager.default.isMobile) return this.convertToREM(this.ULTRA_LARGE_SIZE + this.MOBILE_OFFSET)
    return this.convertToREM(this.ULTRA_LARGE_SIZE)
  }
  get SPECIAL() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.SPECIAL_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.SPECIAL_SIZE)
    return this.LARGE_EXTRA_40
  }
  get mediumLarge() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.MEDIUM_LARGE_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.MEDIUM_LARGE_SIZE)
    return this.LARGE_MEDIUM_30
  }

  get extraLarge() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.EXTRA_LARGE_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.EXTRA_LARGE_SIZE)
    return this.LARGE_EXTRA_40
  }

  get large() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.LARGE_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.LARGE_SIZE)
    return this.LARGE_28
  }

  get header() {
    if (ScreenManager.default.isMobile) return this.convertToREM(this.HEADER_SIZE + this.MOBILE_OFFSET)
    return this.convertToREM(this.HEADER_SIZE)
  }

  get text() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.TEXT_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.TEXT_SIZE)
    return this.TEXT_20
  }

  get remark() {
    if (ScreenManager.default.isMobile) return this.convertToREM(this.REMARK_SIZE + this.MOBILE_OFFSET)
    return this.convertToREM(this.REMARK_SIZE)
  }

  get small() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.SMALL_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.SMALL_SIZE)
    return this.SMALL_12
  }  
  
  get meduimSmall() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.MEDIUM_SMALL_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.MEDIUM_SMALL_SIZE)
    return this.SMALL_MEDIUM_14
  }

  get extraSmall() {
    // if (ScreenManager.default.isMobile) return this.convertToREM(this.EXTRA_SMALL_SIZE + this.MOBILE_OFFSET)
    // return this.convertToREM(this.EXTRA_SMALL_SIZE)
    return this.SMALL_TINY_10
  }

  get ultraLargeEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.ULTRA_LARGE_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.ULTRA_LARGE_SIZE)
  }

  get mediumLargeEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.MEDIUM_LARGE_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.MEDIUM_LARGE_SIZE)
  }

  get extraLargeEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.EXTRA_LARGE_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.EXTRA_LARGE_SIZE)
  }

  get largeEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.LARGE_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.LARGE_SIZE)
  }

  get headerEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.HEADER_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.HEADER_SIZE)
  }

  get textEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.TEXT_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.TEXT_SIZE)
  }

  get remarkEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.REMARK_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.REMARK_SIZE)
  }


  get smallEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.SMALL_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.SMALL_SIZE)
  }  
  
  get mediumSmallEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.MEDIUM_SMALL_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.MEDIUM_SMALL_SIZE)
  }

  get extraSmallEM() {
    if (ScreenManager.default.isMobile) return this.convertToEM(this.EXTRA_SMALL_SIZE + this.MOBILE_OFFSET)
    return this.convertToEM(this.EXTRA_SMALL_SIZE)
  }
}

export default FontManager
