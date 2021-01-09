import React from 'react'
import { Row, Container, Button } from 'react-bootstrap'
import ContentContainer from 'common/components/ContentContainer'
import './style.css'
import Slider from 'react-slick'
import { hotelFeature } from 'modules/main/api/api'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      features: [],
      limitFeatures: 5,
    }
  }

  componentDidMount() {
    let datas = hotelFeature(this.state.limitFeatures)
    datas.then(result => {
      this.setState({ features: result[this.props.lang].features })
    }, function (error) {
      console.log(error)
    })
  }

  render() {
    const settings = {
      // infinite: true,
      slidesPerRow: 1,
      arrows: false,
      rows: 1,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      dotsClass: 'vertical-dots',
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dotsClass: 'slick-dots',
            vertical: false,
            verticalSwiping: false,
            swipeToSlide: false,
          }
        }
      ]
    }

    return (
      <div id="content">
        <Container fluid={true}>
          <Row className="justify-content-md-center">
            <ContentContainer>
              <Slider ref={c => (this.slider = c)} {...settings}>
                {this.state.features.map((item, index) => (
                  <div key={index} className="main-slick">
                    <div className="box-detail">
                      <p className="text-head">{item.title}</p>
                      <p className="text-title">{item.subTitle}</p>
                      <div className="line-under-title"></div>
                      <p className="text-desc">{item.description}</p>
                      <a href={item.link}>
                        <Button className="btn-link-to-menu">{item.buttonText}</Button>
                      </a>
                    </div>
                    <div className="box-image" style={{ backgroundImage: 'url(' + item.imageUrl + ')' }}></div>
                  </div>
                ))}
              </Slider>
            </ContentContainer>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Content 