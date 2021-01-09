import React, { FunctionComponent, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import { ResetCSS } from 'common/src/assets/css/style';
import { cryptoTheme } from 'common/src/theme/crypto';
import PackageManager from 'modules/package/Manager/PackageManager';
import ModalityModel from 'modules/package/Models/GetModel/Detail/ModalityModel';
import Content from './Content';
import MenuBar from 'modules/package/components/MenuBar';

const CheckoutPage: FunctionComponent<any> = (props: any) => {
  const [modality, setModality] = useState<ModalityModel>();
  const [referenceCode, setReferenceCode] = useState<string>();

  useEffect(() => {
    (async () => {
      // const modality = await PackageManager.default.filterModalityDetail();
      // setModality(modality)
    })();
  }, []);

  const checkout = async () => {
    await PackageManager.default.checkout(modality as ModalityModel);
  };

  if (modality && referenceCode)
    <Redirect to={`/package/checkout-summary/${referenceCode}`} />;

  return (
    <ThemeProvider theme={cryptoTheme}>
      <ResetCSS />
      <GlobalStyle />
      <MenuBar />
      <Content modality={modality} checkout={checkout} />
    </ThemeProvider>
  );
};

export default CheckoutPage;
