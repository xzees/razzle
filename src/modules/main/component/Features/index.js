import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from 'common/containers/AppClassic/appClassic.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

import { features } from 'common/src/data/AppClassic';

const Features = () => {
  const { slogan, title, items } = features;

  return (
    <SectionWrapper>
      <Container>
        <FeatureWrapper>
          
            <Fade up >
              <FeatureBlock
                iconPosition="left"
                title={"ตัวอักษรไทยใช้ DB HeaventRounded & Sarabun"}
              />
            </Fade>

            <Fade up >
              <FeatureBlock
                iconPosition="left"
                title={"ตัวอักษรไทยใช้ DB HeaventRounded & Sarabun"}
              />
            </Fade>
          
        </FeatureWrapper>
        <FeatureWrapper>
          
            <Fade up >
              <FeatureBlock
                iconPosition="left"
                title={"ตัวอักษรไทยใช้ DB HeaventRounded & Sarabun"}
              />
            </Fade>

            <Fade up >
              <FeatureBlock
                iconPosition="left"
                title={"ตัวอักษรไทยใช้ DB HeaventRounded & Sarabun"}
              />
            </Fade>
          
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
