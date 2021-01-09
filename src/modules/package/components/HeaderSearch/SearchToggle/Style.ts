import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const h1Style = {
  as: 'h1',
  color: ColorManager.default.fifthColor,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.mediumLarge,
  fontWeight: 'normal',
  lineHeight: 0.75,
  mb: '9px',
};

export const h3BarResult = {
  as: 'h3',
  color: '#230550',
  fontSize: ['1.2rem'],
  fontFamily: '"DBHeaventRoundedv32"',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0',
};

export const SearchToggleWrapper = styled.div`
  background-color: ${ColorManager.default.packageTheme.headerColor};
`;

export const SearchDetailWrapper = styled.div`
  padding-top: 21px;
  padding-bottom: 27px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 7px;
`;

export const EditSearchButton = styled.a`
  border: 1px solid ${ColorManager.default.fifthColor};
  border-radius: 4px;
  color: ${ColorManager.default.fifthColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 1.2;
  font-weight: normal;
  height: 44px;
  max-width: 130px;
  cursor: pointer;
  text-align: center;
  padding: 10px 20px 17px;
`;
