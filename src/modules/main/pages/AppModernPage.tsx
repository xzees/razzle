import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appModern";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "common/containers/AppModern/Navbar";
import Banner from "common/containers/AppModern/Banner";
// import AppSlider from 'common/containers/AppModern/AppSlider';
// import Features from 'common/containers/AppModern/Features';
// import DashboardFeatures from 'common/containers/AppModern/Dashboard';
// import ProductSlide from 'common/containers/AppModern/ProductSlide';
// import DesignedAndBuilt from 'common/containers/AppModern/DesignedAndBuilt';
// import PricingPolicy from 'common/containers/AppModern/PricingPolicy';
// import TeamPortfolio from 'common/containers/AppModern/TeamPortfoilo';
// import Testimonial from 'common/containers/AppModern/Testimonial';
// import Newsletter from 'common/containers/AppModern/Newsletter';
import Footer from "common/containers/AppModern/Footer";
import Container from "common/src/components/UI/Container";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "common/containers/AppModern/appModern.style";
import Loadable from "react-loadable";

type Props = {};

class AppModernPage extends React.Component<Props> {
  renderLoadableComponents = (component: any) => {
    return Loadable({
      loader: () => component,
      loading: () => null,
    });
  };

  render() {
    const AppSlider = this.renderLoadableComponents(
      import("common/containers/AppModern/AppSlider")
    );
    const Features = this.renderLoadableComponents(
      import("common/containers/AppModern/Features")
    );
    const Dashboard = this.renderLoadableComponents(
      import("common/containers/AppModern/Dashboard")
    );
    const Testimonial = this.renderLoadableComponents(
      import("common/containers/AppModern/Testimonial")
    );
    const ProductSlide = this.renderLoadableComponents(
      import("common/containers/AppModern/ProductSlide")
    );
    const DesignedAndBuilt = this.renderLoadableComponents(
      import("common/containers/AppModern/DesignedAndBuilt")
    );
    const PricingPolicy = this.renderLoadableComponents(
      import("common/containers/AppModern/PricingPolicy")
    );
    const TeamPortfoilo = this.renderLoadableComponents(
      import("common/containers/AppModern/TeamPortfoilo")
    );
    const Newsletter = this.renderLoadableComponents(
      import("common/containers/AppModern/Newsletter")
    );
    return (
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          {/* <Container>
            <img
              src={require("assets/img/TTC-Logo.png")}
              alt="ThaitravelLogo"
              height="50"
            />
          </Container> */}
          
          <ContentWrapper>
            <Banner />
            <Features />
            <AppSlider />
            <Dashboard />
            <Testimonial />
            <ProductSlide />
            <DesignedAndBuilt />
            <PricingPolicy />
            <TeamPortfoilo />
            <Newsletter />
          </ContentWrapper>
          {/* }{" "}
          <div style={{ position: "fixed", bottom: "0" }}>
            <div>55555</div>
          </div> */}
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default AppModernPage;
