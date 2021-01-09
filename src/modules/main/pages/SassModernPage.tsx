import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { saasModernTheme } from 'common/src/theme/saasModern';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/containers/SaasModern/sassModern.style';

import BannerSection from 'common/containers/SaasModern/Banner';
import Navbar from 'common/containers/SaasModern/Navbar';
// import WorkingProcessSection from 'common/containers/SaasModern/WorkingProcess';
// import PricingSection from 'common/containers/SaasModern/Pricing';
// import PartnerSection from 'common/containers/SaasModern/Partner';
// import FaqSection from 'common/containers/SaasModern/Faq';
// import TrialSection from 'common/containers/SaasModern/Trial';
// import InfoSection from 'common/containers/SaasModern/Info';
// import FeatureSection from 'common/containers/SaasModern/Feature';
// import UpdateScreen from 'common/containers/SaasModern/UpdateScreen';
// import TestimonialSection from 'common/containers/SaasModern/Testimonial';
// import Footer from 'common/containers/SaasModern/Footer';
import Loadable from 'react-loadable'

type Props = {
}

class SassModernPage extends React.Component<Props> {

  renderLoadableComponents = (component: any) => {
    return Loadable({
      loader: () => component,
      loading: () => null
    })
  }

  render() {

    const WorkingProcessSection = this.renderLoadableComponents(import('common/containers/SaasModern/WorkingProcess'))
    const PricingSection = this.renderLoadableComponents(import('common/containers/SaasModern/Pricing'))
    const PartnerSection = this.renderLoadableComponents(import('common/containers/SaasModern/Partner'))
    const FaqSection = this.renderLoadableComponents(import('common/containers/SaasModern/Faq'))
    const TrialSection = this.renderLoadableComponents(import('common/containers/SaasModern/Trial'))
    const InfoSection = this.renderLoadableComponents(import('common/containers/SaasModern/Info'))
    const FeatureSection = this.renderLoadableComponents(import('common/containers/SaasModern/Feature'))
    const UpdateScreen = this.renderLoadableComponents(import('common/containers/SaasModern/UpdateScreen'))
    const TestimonialSection = this.renderLoadableComponents(import('common/containers/SaasModern/Testimonial'))
    const Footer = this.renderLoadableComponents(import('common/containers/SaasModern/Footer'))
    return (
      <ThemeProvider theme={saasModernTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <BannerSection />
            <WorkingProcessSection />
            <InfoSection />
            <FeatureSection />
            <UpdateScreen />
            <PricingSection />
            <PartnerSection />
            <TestimonialSection />
            <FaqSection />
            <TrialSection />
            <Footer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    )
  }
}


export default SassModernPage