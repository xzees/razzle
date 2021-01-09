import React, { Fragment } from 'react'
// import './style.css'
// import Banner from './Components/Banner/Banner'
// import SectionContent from './Components/Content/Content'
// import SectionFlightPopular from './Components/FlightPopular/FlightPopular'
// import SectionHotelPopular from './Components/HotelPopular/HotelPopular'
// import SectionStaticContent from './Components/StaticContent/StaticContent'
// import AirlineManager from 'modules/flight/Manager/AirlineManager';
import Sticky from 'react-stickynode';
// import SectionPromote from './Components/Promote/Promote'
// import { inject, observer } from 'mobx-react'
// import RootStore from 'stores'
// import { getLabel } from 'modules/main/api/api'
// import Footer from 'modules/package/pages/layouts/footer'
import { ThemeProvider } from 'styled-components'
import { agencyTheme } from 'common/src/theme/agency';
import { GlobalStyle, AgencyWrapper } from 'common/containers/Agency/agency.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext'
import BannerSection from 'common/containers/Agency/BannerSection';
import FeatureSection from 'common/containers/Agency/FeatureSection';
import AboutUsSection from 'common/containers/Agency/AboutUsSection';
import WorkHistory from 'common/containers/Agency/WorkHistory';
import BlogSection from 'common/containers/Agency/BlogSection';
import TestimonialSection from 'common/containers/Agency/TestimonialSection';
import TeamSection from 'common/containers/Agency/TeamSection';
import VideoSection from 'common/containers/Agency/VideoSection';
import NewsletterSection from 'common/containers/Agency/NewsletterSection';
import QualitySection from 'common/containers/Agency/QualitySection';
import Footer from 'common/containers/Agency/Footer';
import FaqSection from 'common/containers/Agency/FaqSection';
import { Modal } from '@redq/reuse-modal';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from 'common/containers/AppClassic/Navbar'
// import Navbar from 'common/containers/Agency/Navbar';
// import SEO from 'common/src/components/seo';

type Props = {
  // stores?: RootStore,
}

// @inject('stores')
// @observer
class MainPage extends React.PureComponent<Props> {
  // state = {
  //   labelMain: [],
  //   language: this.props.stores.LocalizationStore.lang.toLowerCase()
  // }

  // getLabelMain = async () => {
  //   let datas = await getLabel()
  //   this.setState({ labelMain: datas[this.state.language] })
  //   return datas
  // };

  // async componentDidMount() {
  //   await this.getLabelMain()
  // }

  // UNSAFE_componentWillMount() {
  //   AirlineManager.default.init()
  // }

  render() {

    return (
      <ThemeProvider theme={agencyTheme}>
        <Fragment>
          <Modal />
          <ResetCSS />
          <GlobalStyle />
          <AgencyWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <BannerSection />
            <FeatureSection />
            <AboutUsSection />
            <WorkHistory />
            <BlogSection />
            <QualitySection />
            <VideoSection />
            <TestimonialSection />
            <TeamSection />
            <FaqSection />
            <NewsletterSection />
            <Footer />
          </AgencyWrapper>
        </Fragment>
      </ThemeProvider>
    )
    // return (
    //   <div>
    //     <Banner label={this.state.labelMain} />

    //     <SectionContent lang={this.state.language} />
    //     <SectionFlightPopular label={this.state.labelMain} />
    //     <SectionHotelPopular label={this.state.labelMain} />
    //     <SectionPromote label={this.state.labelMain} />
    //     <SectionStaticContent label={this.state.labelMain} />

    //     <Footer />
    //   </div>
    // )
  }
}


export default MainPage