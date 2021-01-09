import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ContentContainer from 'common/components/ContentContainer'
import './style.css'
import { airlineSort } from 'modules/main/api/api'

class FlightPopular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      airlines: [],
    }
  }

  componentDidMount() {
    let datas = airlineSort()
    datas.then(result => {
      this.setState({ airlines: result.airline })
    }, function (error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div id="flight-popular">
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <ContentContainer>
              <div className="px-2">
                <p className="text-title">{this.props.label.AirlineList}</p>
                <Row>
                  {this.state.airlines.map((item, index) => (
                    <Col xs={3} md={2} key={index} className="px-2">
                      <div className="box-logo" style={{ backgroundImage: 'url(' + item.primaryIconUrl + ')' }}></div>
                    </Col>
                  ))}
                </Row>
              </div>
            </ContentContainer>
          </Row>
        </Container>
      </div>
    )
  }
}


export default FlightPopular 