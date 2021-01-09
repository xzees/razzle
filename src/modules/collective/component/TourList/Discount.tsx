import React from 'react';
import styled from 'styled-components';
import i18n from 'utilities/I18n';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';

type Props = { tourDiscount?: any; }

const Discount = (props: Props) => {
  const { tourDiscount } = props;

  function RenderTitle(Type: string) {
    if (Type == "P") {
      return (
        <>{i18n.t('collective.promotion')}</>
      )
    }
    else if (Type == "H") {
      return (
        <>{i18n.t('collective.hotdeal')}</>
      )
    }
    else {
      return (
        <>{i18n.t('collective.discount')}</>
      )
    }
  }

  return (
    <DCRibbon>
      <DCTooltips>{RenderTitle(tourDiscount?.type)}</DCTooltips>
      <DCPrice>{`฿ ${tourDiscount?.discountPrice.toLocaleString()}`}</DCPrice>
    </DCRibbon>
  );
}

const DCRibbon = styled.div`
  background: ${ColorManager.default.red};
  border-radius: 0 4px 4px 0;
  color: ${ColorManager.default.white};
  height: 52px;
  left: 0px;
  position: absolute;
  top: 15px;
  width: 80px;
  z-index: 1;
`;
const DCTooltips = styled.div`
  display: block;
  font-size: 1.1875rem;
  left: 5px;
  line-height: 1em;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-overflow: clip;
  top: 5px;
  white-space: normal;
  width: 70px;
`;
const DCPrice = styled.div`
  color: ${ColorManager.default.white};
  display: block;
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.4375rem;
  text-transform: uppercase;
  text-indent: -3px;
  text-align: center;
  z-index: 1;
`;

export default Discount;