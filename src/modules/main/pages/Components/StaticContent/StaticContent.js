import React from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import ContentContainer from 'common/components/ContentContainer'
import './style.css'

class StaticContent  extends React.Component {
  render() {
    let labelMain = this.props.label
    return (
      <div id="static-content">
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <ContentContainer>
              <Row>
                <Col>
                  <p className="text-head">{labelMain.FooterSloganHeader}</p>
                </Col>
              </Row>
              <Row>
                <Col md={3} className="box-icon">
                  <img
                    className="d-block"
                    src={require('./../../../assets/icons/SVG/one-finger-click.svg')}
                    alt="travizgo-logo"
                  />
                  <p className="text-title">{labelMain.FooterSlogan1}</p>
                  <p>{labelMain.FooterSloganDesc1}</p>
                </Col>
                <Col md={3} className="box-icon">
                  <img
                    className="d-block"
                    src={require('./../../../assets/icons/SVG/tourist.svg')}
                    alt="travizgo-tourist"
                  />
                  <p className="text-title">{labelMain.FooterSlogan2}</p>
                  <p>{labelMain.FooterSloganDesc2}</p>
                </Col>
                <Col md={3} className="box-icon">
                  <img
                    className="d-block"
                    src={require('./../../../assets/icons/SVG/ssl.svg')}
                    alt="travizgo-ssl"
                  />
                  <p className="text-title">{labelMain.FooterSlogan3}</p>
                  <p>{labelMain.FooterSloganDesc3}</p>
                </Col>
                <Col md={3} className="box-icon">
                  <img
                    className="d-block"
                    src={require('./../../../assets/icons/SVG/sale-tag.svg')}
                    alt="travizgo-sale-tag"
                  />
                  <p className="text-title">{labelMain.FooterSlogan4}</p>
                  <p>{labelMain.FooterSloganDesc4}</p>
                </Col>
              </Row>
            </ContentContainer>
          </Row>
        </Container>
      </div>
    )
  }
}


export default StaticContent 