import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './aboutUs.style';

import { aboutData } from 'common/src/data/Interior';

const AboutUs = () => {
  const { thumb_url, title, text, text2 } = aboutData;
  const setTitle = title => {
    return { __html: title };
  };

  return (
    <SectionWrapper id="aboutUs">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image src={thumb_url} alt="Interior Landing by RedQ" />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Heading dangerouslySetInnerHTML={setTitle(title)} />
            <Text content={text} />
            <Text content={text2} />
            <Link href="#1">
              <a className="learn__more-btn">
                <span className="btn_text">VISITE SITE</span>
                <span className="next_arrow"></span>
              </a>
            </Link>
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
