import styled from 'styled-components';
import ImageManager from 'common/Manager/ImageManager';


const BannerWrapper = styled.section`
  position: relative;
  background-image: url(${ImageManager.default.images.common.BG2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding-top: 20px;
  display: flex;
  min-height:550px;
  @media (min-width: 991px) {
    /* min-height: 100vh; */
    
  }
  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default BannerWrapper;
