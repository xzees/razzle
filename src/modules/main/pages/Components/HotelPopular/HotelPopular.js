import React from 'react'
import { Col, Row, Container, Form } from 'react-bootstrap'
import ContentContainer from 'common/components/ContentContainer'
import './style.css'
import { hotelSort } from 'modules/main/api/api'

class HotelPopular  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels : [],
      limitHotels : 100,
    }
  }

  componentDidMount() {
    let datas = hotelSort(this.state.limitHotels)
    datas.then( result => {
      this.setState({ hotels : result.hotels })
    }, function(error) {
      console.log(error)
    })
  }

  render() {
    return (
       <div id="hotel-popular">
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <ContentContainer>
              <div className="px-2">
                <p className="text-title">{this.props.label.HotelList}</p>
                <Row>
                  {this.state.hotels.map((item, index) => (
                    <Col xs={3} md={2} key={index} className="px-2">
                      <div className="box-logo" style={{backgroundImage: "url("+item.imageUrl+")"}}></div>
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


export default HotelPopular 