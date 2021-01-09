import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.section`
  align-items: center;
  background-color: #440099;
  display: flex;
  min-height: 64px;
  @media (max-width: 1279px) {
    min-height: 0;
  }
`
const index = () => {
  return (
    <BannerWrapper></BannerWrapper>
  );
}

export default index;