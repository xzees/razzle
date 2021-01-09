import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Tab, { Panel } from 'common/src/components/Tabs';
import SectionWrapper, { ContentWrapper } from './branchSection.style';

import { branchData } from 'common/src/data/Charity';

const BranchSection = () => {
  const title = text => {
    return { __html: text };
  };

  return (
    <SectionWrapper id="branch">
      <Tab active={2}>
        {branchData.map(item => (
          <Panel
            title={<Text content={item.menuItem} />}
            key={`tab_key${item.id}`}
          >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image src={item.image} alt="Charity Landing" />
                </div>
              </Fade>
              <div className="content">
                <Heading as="h4" content={item.slogan} />
                <h2 dangerouslySetInnerHTML={title(item.title)} />
                <Text content={item.description} />
                <Link href={item.linkUrl}>
                  <a className="learn__more-btn">
                    <span className="hyphen" />
                    <span className="btn_text">{item.linkText}</span>
                  </a>
                </Link>
              </div>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
  );
};

export default BranchSection;
