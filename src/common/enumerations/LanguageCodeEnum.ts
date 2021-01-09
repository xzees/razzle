import ImageManager from 'common/Manager/ImageManager';

enum LanguageCodeEnum {
  EN = 'EN',
  TH = 'TH'
}

type LanguageCodeMetadata = {
  code: LanguageCodeEnum,
  icon: string,
  text: string
}

namespace LanguageCodeEnum {
  export function getIconImage(langEnum: LanguageCodeEnum): LanguageCodeMetadata {
    switch (langEnum) {
      case LanguageCodeEnum.TH:
        return {
          code: langEnum,
          icon: ImageManager.default.images.common.flag.TH,
          text: 'ภาษาไทย'
        }
      case LanguageCodeEnum.EN:
        return {
          code: langEnum,
          icon: ImageManager.default.images.common.flag.EN,
          text: 'English'
        }
    }
  }
}

export default LanguageCodeEnum