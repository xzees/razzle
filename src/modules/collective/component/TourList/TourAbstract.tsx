import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';
import Container from 'common/src/components/UI/Container';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';
import { ExpandMoreRounded, ExpandLessRounded } from '@material-ui/icons';

type Props = { seoTour?: any; }

const TourAbstract = (props: Props) => {
  const { seoTour } = props;

  const ref: any = React.useRef();

  const [showButton, setShowButton] = React.useState(false);
  const [readMore, setReadMore] = React.useState(false);
  React.useEffect(() => {
    var heightTA = ref?.current?.clientHeight;
    const tourAbstract: any = document.getElementById("tour_abstract");
    if (heightTA >= 500) {
      tourAbstract?.classList.add('overflowData');
      setShowButton(true);
    } else {
      tourAbstract?.classList.remove('overflowData');
      setShowButton(false);
    }
  }, []);

  const ReadMore = () => {
    setReadMore(!readMore);
    const tourAbstract: any = document.getElementById("tour_abstract");
    if (tourAbstract.classList.contains('overflowData')) {
      tourAbstract.classList.remove('overflowData');
    } else {
      tourAbstract.classList.add('overflowData');
    }
  }

  return (
    <>
      {seoTour?.tourSeo?.th?.abstract ? (
        <ContainerTour>
          <ContentAbstract id="tour_abstract" ref={ref} >
            {ReactHtmlParser(seoTour?.tourSeo?.th?.abstract)} {ReactHtmlParser(seoTour?.tourSeo?.th?.dcAbstract)}
          </ContentAbstract>
          {showButton ? readMore ? (<ShowMoreButton onClick={ReadMore}>ซ่อน<ExpandLessRounded /></ShowMoreButton>) : (<ShowMoreButton onClick={ReadMore}>แสดงทั้งหมด<ExpandMoreRounded /></ShowMoreButton>) : undefined}
        </ContainerTour>
      ) : undefined}
    </>
  );
}
const ContainerTour = styled(Container)`
  margin-bottom: 30px;
  position: relative;
  @media(max-width: 991px) {
    padding-left: 15px;
    padding-right: 15px
  }
  #tour_abstract.overflowData {
    height: 500px;
  }
`;
const ContentAbstract = styled.div`
  border-bottom: 1px solid ${ColorManager.default.greyColor};
  color: #333333;
  font-size: 1.4375rem;
  height: auto;
  margin: 15px 0;
  overflow: hidden;
  padding-bottom: 15px;
  p {
    margin: 10px 0;
  }
  img {
    max-width: 100%;
  }
  a, strong {
    color: ${ColorManager.default.black};
    font-family: ${FontManager.default.secondaryFont};
    font-weight: normal;
  }
`;
const ShowMoreButton = styled.div`
  align-items: center;
  border: 1px solid ${ColorManager.default.greyColor};
  display: flex;
  font-size: 1.4375rem;
  position: absolute;
  bottom: -16px;
  left: 50%;
  background-color: #fff;
  border-radius: 15px;
  color: #888aaa;
  padding: 0 6px 0 16px;
  white-space: nowrap;
  height: 34px;
  line-height: 32px;
  cursor: pointer;
  transform: translateX(-50%);
`;

export default TourAbstract;