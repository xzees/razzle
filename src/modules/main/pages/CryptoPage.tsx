import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'common/containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from 'common/containers/Crypto/Navbar';
import Banner from 'common/containers/Crypto/BannerSection';
// import BannerSlider from 'common/containers/Crypto/BannerSlider';
// import Transactions from 'common/containers/Crypto/Transaction';
// import ControlSections from 'common/containers/Crypto/ControlSection';
// import TrustedProofSections from 'common/containers/Crypto/TrustedProof';
// import ScalableSections from 'common/containers/Crypto/ScalableSection';
// import SlideSections from 'common/containers/Crypto/CryptoSlides';
// import BetaSections from 'common/containers/Crypto/BetaSection';
// import Footer from 'common/containers/Crypto/Footer';
import Loadable from 'react-loadable'

type Props = {
}

class CryptoPage extends React.Component<Props> {

  renderLoadableComponents = (component: any) => {
    return Loadable({
      loader: () => component,
      loading: () => null
    })
  }

  render() {
    const BannerSlider = this.renderLoadableComponents(import('common/containers/Crypto/BannerSlider'))
    const Transactions = this.renderLoadableComponents(import('common/containers/Crypto/Transaction'))
    const ControlSections = this.renderLoadableComponents(import('common/containers/Crypto/ControlSection'))
    const TrustedProofSections = this.renderLoadableComponents(import('common/containers/Crypto/TrustedProof'))
    const ScalableSections = this.renderLoadableComponents(import('common/containers/Crypto/ScalableSection'))
    const SlideSections = this.renderLoadableComponents(import('common/containers/Crypto/CryptoSlides'))
    const BetaSections = this.renderLoadableComponents(import('common/containers/Crypto/BetaSection'))
    const Footer = this.renderLoadableComponents(import('common/containers/Crypto/Footer'))
    return (
      <ThemeProvider theme={cryptoTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <Banner />
            <BannerSlider />
            <Transactions />
            <ControlSections />
            <TrustedProofSections />
            <ScalableSections />
            <SlideSections />
            <BetaSections />
            <Footer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    )
  }
}


export default CryptoPage