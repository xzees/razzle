import React from "react";
import { ThemeProvider } from "styled-components";
import { hostingTheme } from "common/src/theme/hosting";
import {
  GlobalStyle,
  ContentWrapper,
} from "common/containers/Hosting/hosting.style";
import { ResetCSS } from "common/src/assets/css/style";

import BannerSection from "common/containers/Hosting/Banner";
// import BoxContainer from "modules/sightseeing/components/BoxContainer";
import Loadable from "react-loadable";



export default () => {
  const renderLoadableComponents = (component: any) => {
    return Loadable({
      loader: () => component,
      loading: () => null,
    });
  };
  // const isLoading = this.props.stores!.UIStore.isPageLoading
  const BoxContainer = renderLoadableComponents(import("modules/sightseeing/components/BoxContainer"));
  return (
    <ThemeProvider theme={hostingTheme}>
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <BannerSection />
        <BoxContainer />
      </ContentWrapper>
    </ThemeProvider>
  );
};
