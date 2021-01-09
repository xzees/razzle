import React from 'react';
import styled from 'styled-components';
import i18n from 'utilities/I18n';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ColorManager from 'common/Manager/ColorManager';

const PeriodNotFound = (props: any) => {
  return (
    <PeriodNFBox>
      <PeriodNFIcon />
      <div style={{ lineHeight: '0.9', marginRight: 'auto' }}>
        {i18n.t('collective.detail.period.notfound1')}<br />{i18n.t('collective.detail.period.notfound2')}<TelLink href="tel:021719999" target="_blank">(662) 171-9999</TelLink>
      </div>
    </PeriodNFBox>
  );
}

const PeriodNFBox = styled.div`
  align-items: center;
  background: ${ColorManager.default.fourthColor};
  border-radius: 2px;
  color: ${ColorManager.default.white};
  display: flex;
  font-size: 1.4375rem;
  justify-content: center;
  padding: 10px 10px 10px 20px;
  text-align: center;
  @media(max-width: 599px) {
    font-size: 1.3125rem;
    svg {
      font-size: 1.5rem !important;
    }
    padding: 10px;
  }
`;
const PeriodNFIcon = styled(InfoOutlinedIcon)`
  font-size: 32px!important;
  margin-right: auto;
`;
const TelLink = styled.a`
  color: ${ColorManager.default.white};
  margin-left: 5px;
`;

export default PeriodNotFound;