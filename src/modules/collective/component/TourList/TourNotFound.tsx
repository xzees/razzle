import React from 'react';
import styled from 'styled-components';
import i18n from 'utilities/I18n';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ColorManager from 'common/Manager/ColorManager';

const TourNotFound = (props: any) => {
  return (
    <TourNFBox>
      <TourNFIcon /><div style={{ lineHeight: '0.9' }}>{i18n.t('collective.list.notfound')}<TelLink href="tel:021719999" target="_blank">02-171-9999</TelLink></div>
    </TourNFBox>
  );
}

const TourNFBox = styled.div`
  align-items: center;
  background: ${ColorManager.default.fourthColor};
  border-radius: 2px;
  color: ${ColorManager.default.white};
  display: flex;
  font-size: 25px;
  justify-content: left;
  margin: 20px 0;
  padding: 10px 10px 10px 20px;
  @media(max-width: 599px) {
    font-size: 21px;
    svg {
      font-size: 24px!important;
    }
  }
`;
const TourNFIcon = styled(InfoOutlinedIcon)`
  font-size: 32px!important;
  margin-right: 5px;
`;
const TelLink = styled.a`
  color: ${ColorManager.default.white};
  margin-left: 5px;
`;

export default TourNotFound;