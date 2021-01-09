import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const PaxWrapper = styled.div`
  display: grid;
  grid-template-rows: 20px 20px;
  grid-template-columns: 1fr auto;
  width: 100%;
  padding: 8px 0px;
`;

export const PriceWrapper = styled.div``;

export const SelectQuantityWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2;
`;

export const PaxTypeText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
  line-height: 18px;
`;

export const PriceText = styled.span`
  color: ${ColorManager.default.primaryColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
  line-height: 18px;
`;

export const DiscountText = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  text-decoration: line-through;
  margin-left: 4px;
  line-height: 18px;
`;
