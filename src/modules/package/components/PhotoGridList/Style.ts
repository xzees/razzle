import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface GridLayoutWrapperProps {
  count: number;
}

interface ViewMoreWrapperProps {
  fontSize?: 'text' | 'small';
}

interface ImageProps {
  isBorderRadius: boolean;
}

interface TextProps {
  fontWeight?: 'normal' | 'medium';
  fontSize?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  mt?: string | number;
}

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const GridLayoutWrapperMobile = styled.div<GridLayoutWrapperProps>`
  display: grid;
  grid-gap: 3px;
  width: 100%;
  height: 171px;
  grid-auto-rows: minmax(10px, 171px);
  ${(props: GridLayoutWrapperProps) => {
    if (props.count === 2) {
      return `
        grid-template-columns: 1fr 1fr;
      `;
    } else if (props.count >= 3) {
      return `
        grid-template-columns: 2fr 1fr;
        & ${ImageWrapper}:first-child {
          grid-row: 1 / span 2;
        }
      `;
    }
    return '';
  }}
`;

export const GridLayoutWrapper = styled.div<GridLayoutWrapperProps>`
  display: grid;
  grid-gap: 4px;
  width: 100%;
  height: 360px;
  grid-auto-rows: minmax(10px, 360px);
  ${(props: GridLayoutWrapperProps) => {
    if (props.count === 2) {
      return `
        grid-template-columns: 1fr 1fr;
      `;
    } else if (props.count === 3) {
      return `
        grid-template-columns: 4fr 1fr;
        & ${ImageWrapper}:first-child {
          grid-row: 1 / span 2;
        }
      `;
    } else if (props.count === 4) {
      return `
        grid-template-columns: 6fr 1fr;
        & ${ImageWrapper}:first-child {
          grid-row: 1 / span 3;
        }
      `;
    } else if (props.count === 5) {
      return `
        grid-template-columns: 3fr 1fr 1fr;
        & ${ImageWrapper}:first-child {
          grid-row: 1 / span 2;
        }
      `;
    } else if (props.count === 6) {
      return `
        grid-template-columns: 3fr 2fr 1fr 1fr;
        & ${ImageWrapper}:first-child {
          grid-row: 1 / span 3;
        }
        & ${ImageWrapper}:nth-child(2) {
          grid-column: 2;
          grid-row: 1 / span 2;
        }
        & ${ImageWrapper}:nth-child(3) {
          grid-column: 3 / span 2;
          grid-row: 1 / span 2;
        }
      `;
    } else if (props.count >= 7) {
      return `
        grid-template-columns: repeat(7, 1fr);
        & ${ImageWrapper}:first-child {
          grid-column: 1 / span 3;
          grid-row: 1 / span 3;
        }
        & ${ImageWrapper}:nth-child(2) {
          grid-column: 4 / span 2;
          grid-row: 1 / span 2;
        }
        & ${ImageWrapper}:nth-child(3) {
          grid-column: 6 / span 2;
          grid-row: 1 / span 2;
        }
      `;
    }

    return '';
  }}
`;

export const RibbonWrapperMobile = styled.div`
  position: absolute;
  top: 12px;
  left: 20px;
  width: 54px;
  min-height: 52px;
  z-index: 999;
  padding: 5px 12px 6px 12px;
  text-align: center;
  text-transform: uppercase;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.orangeColor};
  border-radius: 4px;
  box-shadow: 2.5px 4.3px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const RibbonWrapper = styled.div`
  position: absolute;
  top: 29px;
  left: 0px;
  width: 51px;
  min-height: 53px;
  z-index: 999;
  padding: 4px 12px 6px 10px;
  text-align: center;
  text-transform: uppercase;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.orangeColor};
  border-radius: 0px 4px 4px 0px;
  box-shadow: 2.5px 4.3px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const ViewMoreWrapper = styled.div<ViewMoreWrapperProps>`
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: rgba(0, 0, 0, 0.5);
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ViewMoreWrapperProps) =>
    props.fontSize === 'small'
      ? FontManager.default.small
      : FontManager.default.text};
  line-height: ${(props: ViewMoreWrapperProps) =>
    props.fontSize === 'small' ? '0.89' : '0.9'};
  &:hover {
    text-decoration: underline;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  ${(props: ImageProps) => (props.isBorderRadius ? 'border-radius: 4px;' : '')}
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Text = styled.p<TextProps>`
  margin: 0px;
  margin-top: ${(props: TextProps) => props.mt || '0px'};
  padding: 0px;
  font-weight: normal;
  font-family: '${(props: TextProps) =>
    props.fontWeight === 'medium'
      ? FontManager.default.secondaryFont
      : FontManager.default.primaryFont}';
  font-size: ${(props: TextProps) => props.fontSize || 'inherit'};
  line-height: ${(props: TextProps) => props.lineHeight || 'inherit'};
  letter-spacing: ${(props: TextProps) => props.letterSpacing || 'normal'};
`;
