import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import { ResetCSS } from 'common/src/assets/css/style';
import { cryptoTheme } from 'common/src/theme/crypto';
import useLandingPages from 'modules/package/Hook/pages/useLandingPages';
import Content from './Content';

const Landingpages: FunctionComponent<any> = () => {
  const { tabIndex, setTabIndex } = useLandingPages();

  return (
    <ThemeProvider theme={cryptoTheme}>
      <ResetCSS />
      <GlobalStyle />
      <Content tabIndex={tabIndex} setTabIndex={setTabIndex} />
    </ThemeProvider>
  );
};

export default Landingpages;
