import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './privacy.style';
import Illustration from 'common/src/assets/image/cryptoModern/illustration1.png';
import styled from 'styled-components';


const PrivacyPortal = () => {
  return (
    <styleds.SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content="Privacy Preserving  Anonymous Funds  Protocol" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu" />
          </div>
          <div className="content">
            <Heading content="Privacy Preserving  Anonymous Funds  Protocol" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu" />
          </div>
        </ContentWrapper>
      </Container>
    </styleds.SectionWrapper>
  );
};
const styleds = {
  SectionWrapper:styled(SectionWrapper)`
    background: #d9deea;
  `,

}


export default PrivacyPortal;
