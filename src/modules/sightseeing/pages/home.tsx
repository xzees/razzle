import React from "react";
import { ThemeProvider } from "styled-components";
import { hostingTheme } from "common/src/theme/hosting";
import {
  GlobalStyle,
  ContentWrapper,
} from "common/containers/Hosting/hosting.style";
import { ResetCSS } from "common/src/assets/css/style";
import Modal from "common/components/ModalMobileScreen";
import Banner from "modules/main/component/Banner";
// import BoxContainer from "modules/sightseeing/components/BoxContainer";
import Loadable from "react-loadable";
import { Button } from "common/components/Button";
import { TextInput } from "common/components/TextInput";
import { MaskInputDate } from "common/components/MaskInputDate";
import FontManager from "common/Manager/FontManager";
import DeleteIcon from "@material-ui/icons/Delete";
export default () => {
  const renderLoadableComponents = (component: any) => {
    return Loadable({
      loader: () => component,
      loading: () => null,
    });
  };

  // const isLoading = this.props.stores!.UIStore.isPageLoading
  const BoxContainer = renderLoadableComponents(
    import("modules/sightseeing/components/BoxContainer")
  );
  return (
    <ThemeProvider theme={hostingTheme}>
      <ResetCSS />
      <GlobalStyle />
      <ContentWrapper>
        <Banner>
          <Button startIcon={<DeleteIcon />}>classes shorthand</Button>
          <TextInput
            width="50%"
            placeholder={"กรุณาพิมพ์วันที่"}
            inputComponent={MaskInputDate as any}
          />
        </Banner>
        <BoxContainer />
      </ContentWrapper>
    </ThemeProvider>
  );
};
