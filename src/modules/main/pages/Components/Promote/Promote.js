import React from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import ContentContainer from 'common/components/ContentContainer'
import './style.css'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ImageManager from 'common/Manager/ImageManager'

class Promote extends React.Component {
  render() {
    let labelMain = this.props.label
    const settings = {
      // infinite: true,
      slidesPerRow: 1,
      arrows: false,
      rows: 1,
      dots: true,
      dotsClass: 'bottom-right-dots',
    }
    return (
      <div id="promote">
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <ContentContainer>
              <Row className="justify-content-md-center py-5">
                <Col sm={6} className="mb-5 mb-sm-0">
                  <p className="text-title">{labelMain.AdsHeader}</p>
                  <p className="text-title color-gray">{labelMain.AdsSubHeader}</p>
                  <div className="box-list form-inline mt-2">
                    <div className="border-icon">
                      <FontAwesomeIcon icon={faChevronRight} color="#187cc7" size="xs" />
                    </div>
                    <span>{labelMain.Ads1}</span>
                  </div>
                  <div className="box-list form-inline">
                    <div className="border-icon">
                      <FontAwesomeIcon icon={faChevronRight} color="#187cc7" size="xs" />
                    </div>
                    <span>{labelMain.Ads2}</span>
                  </div>
                  <div className="box-list form-inline">
                    <div className="border-icon">
                      <FontAwesomeIcon icon={faChevronRight} color="#187cc7" size="xs" />
                    </div>
                    <span>{labelMain.Ads3}</span>
                  </div>
                </Col>
                <Col sm={6}>
                  <Slider ref={c => (this.slider = c)} {...settings}>
                    <img
                      className="d-block w-100"
                      src={ImageManager.default.images.package.contentBG1}
                    />
                    <img
                      className="d-block w-100"
                      src={ImageManager.default.images.package.contentBG2}
                    />
                    <img
                      className="d-block w-100"
                      src={ImageManager.default.images.package.contentBG3}
                    />
                  </Slider>
                </Col>
              </Row>
            </ContentContainer>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Promote 