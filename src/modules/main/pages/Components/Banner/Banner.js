import React from 'react'
import './style.css'
import { Row, Container, Tabs, Tab } from 'react-bootstrap'
import ContentContainer from 'common/components/ContentContainer'
import PackageSearch from 'modules/package/components/search/main-page-search/main-page-search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBed, faBiking, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import FlightSearchFormBody from 'modules/flight/component/FlightSearchForm/FormBody/FormBody'
import Boxsearchhotel from 'modules/hotel/pages/hotel_list/edit_hotel/Boxsearchhotel'
import language from 'modules/hotel/utill/language'
import { inject, observer } from 'mobx-react'
import RootStore from 'stores'
import i18n from 'utilities/I18n'
import RetrieveBookingForm from 'modules/flight/pages/Landing/components/RetrieveBookingForm/RetrieveBookingForm'

const stores = RootStore
@inject('stores')
@observer

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: 'flight',
      language: this.props.stores.LocalizationStore.lang.toLowerCase(),
    }
    this.handleClickTab = this.handleClickTab.bind(this)
  }

  handleClickTab(key) {
    this.setState({ activeKey: key })
  }

  renderTitle(key, textTitle, icon, rotation = false) {
    return (
      <div className="box-flex">
        {rotation ? <FontAwesomeIcon size="xs" rotation={rotation} icon={icon} /> : <FontAwesomeIcon size="xs" icon={icon} />}
        <span className={(this.state.activeKey == key ? '' : 'd-none') + ' d-sm-block ml-3'}>{textTitle}</span>
      </div>
    )
  }

  render() {
    var Lang_OBJ = language.total_Value()
    let labelMain = this.props.label
    return (
      <div id="banner">
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <ContentContainer>
              <div className="text-banner">
                <p className="text-head">{labelMain.Slogan}</p>
                <p>{labelMain.SubSlogan}</p>
              </div>
              <div>
                <Tabs defaultActiveKey={this.state.activeKey} onSelect={this.handleClickTab} id="tabs-search" className="tabs-search">
                  <Tab eventKey="flight" title={this.renderTitle('flight', i18n.t('common.flight'), faPlane, 270)} className="tab-search">
                    <FlightSearchFormBody />
                    <RetrieveBookingForm className='mt-4 mb-5' />
                  </Tab>
                  <Tab eventKey="hotel" title={this.renderTitle('hotel', i18n.t('common.hotel'), faBed)} className="tab-search">
                    {/* {(Lang_OBJ == '' || Lang_OBJ == undefined) ? null : <Boxsearchhotel />} */}
                  </Tab>
                  <Tab eventKey="collective" title={this.renderTitle("collective", "ทัวร์", faMapMarkerAlt)} className="tab-search">
                    <div></div>
                  </Tab>
                  <Tab eventKey="package" title={this.renderTitle('package', i18n.t('common.package'), faBiking)} className="tab-search">
                    {/* <PackageSearch /> */}
                  </Tab>
                </Tabs>
              </div>
            </ContentContainer>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Banner 