import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const h1Style = {
  as: 'h1',
  color: ColorManager.default.fifthColor,
  fontSize: FontManager.default.extraLarge,
  fontFamily: FontManager.default.secondaryFont,
  fontWeight: 'normal',
  lineHeight: 0.8,
  mb: '6px',
};

export const SearchDetailWrapper = styled.div`
  padding-top: 29px;
  padding-bottom: 28px;
`;

export const TitleWrapper = styled.div`
  margin-left: 17px;
  margin-bottom: 41px;
`;

export const Detail = styled.span`
  color: ${ColorManager.default.secondaryColor};
  font-size: ${FontManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  line-height: 1.2;
`;
