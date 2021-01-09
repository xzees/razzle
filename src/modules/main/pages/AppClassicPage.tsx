import React from 'react'
import Sticky from 'react-stickynode';
import { ResetCSS } from 'common/src/assets/css/style';
import { ThemeProvider } from 'styled-components'
import { theme } from 'common/src/theme/appclassic';
import Navbar from 'common/containers/AppClassic/Navbar';
import Banner from 'common/containers/AppClassic/Banner';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'common/containers/AppClassic/appClassic.style';
import Loadable from 'react-loadable'

type Props = {
}

class AppClassicPage extends React.Component<Props> {

  renderLoadableComponents = (component: any) => {
    return Loadable({
      loader: () => component,
      loading: () => null
    })
  }

  render() {
    const Customer = this.renderLoadableComponents(import('common/containers/AppClassic/Customer'))
    const KeyFeatures = this.renderLoadableComponents(import('common/containers/AppClassic/KeyFeatures'))
    const AppSlider = this.renderLoadableComponents(import('common/containers/AppClassic/AppSlider'))
    const Features = this.renderLoadableComponents(import('common/containers/AppClassic/Features'))
    const DesignedAndBuilt = this.renderLoadableComponents(import('common/containers/AppClassic/DesignedAndBuilt'))
    const FeatureTab = this.renderLoadableComponents(import('common/containers/AppClassic/FeatureTab'))
    const PricingPolicy = this.renderLoadableComponents(import('common/containers/AppClassic/PricingPolicy'))
    const Testimonial = this.renderLoadableComponents(import('common/containers/AppClassic/Testimonial'))
    const Faq = this.renderLoadableComponents(import('common/containers/AppClassic/Faq'))
    const JoinTrail = this.renderLoadableComponents(import('common/containers/AppClassic/JoinTrail'))
    const Footer = this.renderLoadableComponents(import('common/containers/AppClassic/Footer'))

    return (
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          
          <ContentWrapper>
            <Banner />
            <Customer />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </ThemeProvider >
    )
  }
}


export default AppClassicPage