import _ from 'lodash';
import ScreenManager from 'common/Manager/ScreenManager';

class FontManager {
  static default: FontManager = new FontManager();

  private MOBILE_OFFSET = -0;
  private ULTRA_LARGE_SIZE = 2.5;
  private MEDIUM_LARGE_SIZE = 2;
  private EXTRA_LARGE_SIZE = 1.875;
  private LARGE_SIZE = 1.75;
  private HEADER_SIZE = 1.375;
  private MEDIUM_SIZE = 1.5;
  private TEXT_SIZE = 1.25;
  private REMARK_SIZE = 1.3;
  private SMALL_SIZE = 1.125;
  private MEDIUM_SMALL_SIZE = 1;
  private EXTRA_SMALL_SIZE = 0.8125;
  private SPECIAL_SIZE = 4.0;

  private constructor() {}

  primaryFont = 'DBHeaventRoundedv32';
  secondaryFont = 'DBHeaventRoundedMedv32';
  thirdFont = 'Sarabun';

  private convertToEM(size: number) {
    return size + 'em';
  }
  private convertToREM(size: number) {
    return size + 'rem';
  }

  get ultraLarge() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.ULTRA_LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.ULTRA_LARGE_SIZE);
  }
  get SPECIAL() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.SPECIAL_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.SPECIAL_SIZE);
  }
  get mediumLarge() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.MEDIUM_LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.MEDIUM_LARGE_SIZE);
  }

  get extraLarge() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.EXTRA_LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.EXTRA_LARGE_SIZE);
  }

  get large() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.LARGE_SIZE);
  }

  get header() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.HEADER_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.HEADER_SIZE);
  }

  get medium() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.MEDIUM_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.MEDIUM_SIZE);
  }

  get text() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.TEXT_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.TEXT_SIZE);
  }

  get remark() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.REMARK_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.REMARK_SIZE);
  }

  get small() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.SMALL_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.SMALL_SIZE);
  }

  get meduimSmall() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.MEDIUM_SMALL_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.MEDIUM_SMALL_SIZE);
  }

  get extraSmall() {
    if (ScreenManager.default.isMobile)
      return this.convertToREM(this.EXTRA_SMALL_SIZE + this.MOBILE_OFFSET);
    return this.convertToREM(this.EXTRA_SMALL_SIZE);
  }

  get ultraLargeEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.ULTRA_LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.ULTRA_LARGE_SIZE);
  }

  get mediumLargeEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.MEDIUM_LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.MEDIUM_LARGE_SIZE);
  }

  get extraLargeEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.EXTRA_LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.EXTRA_LARGE_SIZE);
  }

  get largeEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.LARGE_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.LARGE_SIZE);
  }

  get headerEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.HEADER_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.HEADER_SIZE);
  }

  get mediumEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.MEDIUM_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.MEDIUM_SIZE);
  }

  get textEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.TEXT_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.TEXT_SIZE);
  }

  get remarkEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.REMARK_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.REMARK_SIZE);
  }

  get smallEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.SMALL_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.SMALL_SIZE);
  }

  get mediumSmallEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.MEDIUM_SMALL_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.MEDIUM_SMALL_SIZE);
  }

  get extraSmallEM() {
    if (ScreenManager.default.isMobile)
      return this.convertToEM(this.EXTRA_SMALL_SIZE + this.MOBILE_OFFSET);
    return this.convertToEM(this.EXTRA_SMALL_SIZE);
  }
}

export default FontManager;
