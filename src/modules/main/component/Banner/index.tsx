import React from 'react';
import Container from 'common/src/components/UI/Container';
import BannerWrapper from './banner.style';


class BannerSection extends React.Component {
  render () {
    return (
      <BannerWrapper id="banner_section">
        <Container>
            {this.props?.children}
        </Container>
      </BannerWrapper>
    )
  }
}
export default BannerSection;
