import _ from 'lodash';
import React, {
  FunctionComponent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Element, Events, Link } from 'react-scroll';
import { FavoriteBorder, LocationOn, Share } from '@material-ui/icons';
import Container from 'common/src/components/UI/Container';
import LoadingPage from 'common/components/LoadingPage';
import NavigationManager from 'common/Manager/NavigationManager';
import HeaderEditSearch from 'modules/package/components/HeaderEditSearch';
import Heading from 'common/src/components/Heading';
import PhotoGridList from 'modules/package/components/PhotoGridList';
import Modalities from 'modules/package/components/Modalities';
import Review from 'modules/package/components/Review';
import NearbyDestinations from 'modules/package/components/NearbyDestinations';
import {
  Breadcrumbs,
  Rating,
  KeyboardArrowRightIcon,
  JumpNavigationSection,
  ContentSection,
  ModalitiesSection,
  ReviewsSection,
  NearbyDestinationsSection,
  CartSection,
  CartWrapper,
  CartDetailWrapper,
  JumpNavigationWrapper,
  HeaderWrapper,
  HeaderDetailWrapper,
  ButtonHeaderWrapper,
  PhotoGridListWrapper,
  ContentWrapper,
  TitleWrapper,
  DescriptionWrapper,
  ButtonHeader,
  Address,
  Divider,
  VerticalDivider,
  titleHeaderStyle,
  titleStyle,
  ModalityCartNameText,
  TotalCountText,
  TotalAmountText,
  ContinueButton,
} from '../Styles/Desktop';

interface JumpNavigationLink {
  title: string;
  element: string;
  offsetTop: number;
  refEl: React.MutableRefObject<HTMLElement | null>;
}

type Props = {
  activity: any;
  modalities: any[];
  modalityCart: ModalityCart | null;
  dateSelect: Date | null;
  isLoading: boolean;
  isLoadingModality: boolean;
  isLoadingHeaderSearch: boolean;
  addToCart: (ModalityCartDetail: ModalityCartDetail) => void;
  handleChangeDate: (date: Date | null) => void;
  handleSelectedDate: () => void;
};

const Desktop: FunctionComponent<Props> = (props: Props) => {
  const {
    activity,
    modalities,
    modalityCart,
    dateSelect,
    isLoading,
    isLoadingModality,
    isLoadingHeaderSearch,
    addToCart,
    handleChangeDate,
    handleSelectedDate,
  } = props;

  const jumpNavigationRef = useRef<HTMLElement | null>(null);
  const mainContentsRef = useRef<HTMLElement | null>(null);
  const activityTypesRef = useRef<HTMLElement | null>(null);
  const reviewsRef = useRef<HTMLElement | null>(null);
  const nearbyDestinationsRef = useRef<HTMLElement | null>(null);

  const [jumpNavigationLinks, setJumpNavigationLinks] = useState<
    JumpNavigationLink[]
  >([
    {
      title: 'ภาพรวม',
      element: 'contents',
      offsetTop: 0,
      refEl: mainContentsRef,
    },
    {
      title: 'ประเภทกิจกรรม',
      element: 'activityTypes',
      offsetTop: 0,
      refEl: activityTypesRef,
    },
    {
      title: 'รีวิว',
      element: 'reviews',
      offsetTop: 0,
      refEl: reviewsRef,
    },
    {
      title: 'จุดหมายปลายทางที่ใกล้เคียง',
      element: 'nearbyDestinations',
      offsetTop: 0,
      refEl: nearbyDestinationsRef,
    },
  ]);
  const [jumpNavigationActive, setJumpNavigationActive] = useState<number>(-1);

  const handleScroll = () => {
    const currentJumpNavigation = jumpNavigationRef.current;
    const currentMainContent = mainContentsRef.current;
    if (currentJumpNavigation && currentMainContent) {
      if (window.pageYOffset >= 150) {
        currentJumpNavigation.style.visibility = 'visible';
        currentJumpNavigation.style.opacity = '1';
        currentJumpNavigation.style.height = 'auto';
        currentMainContent.style.marginTop = '100px';
        currentMainContent.style.paddingTop = '0px';
      } else {
        currentJumpNavigation.style.visibility = 'hidden';
        currentJumpNavigation.style.opacity = '0';
        currentJumpNavigation.style.height = '0px';
        currentJumpNavigation.style.transition =
          'visibility 0s, opacity 0.3s linear';
        currentMainContent.style.marginTop = '0px';
        currentMainContent.style.paddingTop = '39px';
        currentMainContent.style.transition = 'all 0.3s';
      }
    }
    const offset = 6;
    _.forEach(
      jumpNavigationLinks,
      (item: JumpNavigationLink, index: number) => {
        if (
          index === 0 &&
          window.pageYOffset < jumpNavigationLinks[index + 1].offsetTop - offset
        )
          setJumpNavigationActive(index);
        else if (
          index > 0 &&
          index < jumpNavigationLinks.length - 1 &&
          window.pageYOffset > item.offsetTop - offset &&
          window.pageYOffset < jumpNavigationLinks[index + 1].offsetTop - offset
        )
          setJumpNavigationActive(index);
        else if (window.pageYOffset >= item.offsetTop - offset)
          setJumpNavigationActive(index);
      }
    );
  };

  useEffect(() => {
    const lastJumpNavigationLink = _.last(jumpNavigationLinks);
    if (
      lastJumpNavigationLink &&
      lastJumpNavigationLink.offsetTop === 0 &&
      lastJumpNavigationLink.refEl.current
    ) {
      const jumpNavigationLinksFormat = _.map(
        _.filter(
          jumpNavigationLinks,
          (item: JumpNavigationLink) =>
            item.offsetTop === 0 && item.refEl.current
        ),
        (item: JumpNavigationLink): JumpNavigationLink => ({
          ...item,
          offsetTop: item.refEl.current
            ? Math.round(
                item.refEl.current.getBoundingClientRect().top +
                  window.pageYOffset
              )
            : 0,
        })
      );
      setJumpNavigationLinks(jumpNavigationLinksFormat as any[]);
    }

    Events.scrollEvent.register('begin', function () {
      const index = _.findIndex(jumpNavigationLinks, { element: arguments[0] });
      setJumpNavigationActive(index);
    });

    Events.scrollEvent.register('end', function () {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      {!isLoadingHeaderSearch && <HeaderEditSearch />}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <JumpNavigationSection ref={jumpNavigationRef}>
            <Container>
              <JumpNavigationWrapper>
                <Breadcrumbs>
                  {_.map(jumpNavigationLinks, (item: any, index: number) => {
                    return (
                      <Link
                        to={item.element}
                        spy
                        smooth
                        duration={500}
                        offset={-150}
                        className={
                          index === jumpNavigationActive ? 'active' : ''
                        }
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </Breadcrumbs>
              </JumpNavigationWrapper>
            </Container>
          </JumpNavigationSection>
          <ContentSection ref={mainContentsRef}>
            <Element name="contents" />
            <Container>
              <HeaderWrapper>
                <Heading content={activity?.name} {...titleHeaderStyle} />
                <HeaderDetailWrapper>
                  <Rating name="rating" value={4} readOnly />
                  <VerticalDivider />
                  <Address>
                    3/3 Wangsingkam Rd., Changmoi, Muang , ช้างม่อย, 50300
                    เชียงใหม่, ไทย
                  </Address>
                </HeaderDetailWrapper>
                <ButtonHeaderWrapper>
                  <ButtonHeader>
                    <LocationOn />
                  </ButtonHeader>
                  <ButtonHeader>
                    <Share />
                  </ButtonHeader>
                  <ButtonHeader>
                    <FavoriteBorder />
                  </ButtonHeader>
                </ButtonHeaderWrapper>
              </HeaderWrapper>
              <PhotoGridListWrapper>
                <PhotoGridList
                  photos={[
                    ...(activity?.content?.media.images || []),
                    ...(activity?.content?.media.images || []),
                  ]}
                  isMobile={false}
                />
              </PhotoGridListWrapper>
              <ContentWrapper mb="27px">
                <TitleWrapper mb="14px">
                  <Heading content="รายละเอียดกิจกรรม" {...titleStyle} />
                </TitleWrapper>
                <DescriptionWrapper
                  dangerouslySetInnerHTML={{
                    __html: activity?.content?.description,
                  }}
                />
              </ContentWrapper>
            </Container>
          </ContentSection>
          <ModalitiesSection ref={activityTypesRef}>
            <Element name="activityTypes" />
            <Container>
              <TitleWrapper mb="31px">
                <Heading content="ประเภทกิจกรรม" {...titleStyle} />
              </TitleWrapper>
              <Modalities
                isMobile={false}
                modalities={modalities}
                currency={activity?.currency}
                dateSelect={dateSelect}
                isLoading={isLoadingModality}
                handleChangeDate={handleChangeDate}
                addToCart={addToCart}
                handleSelectedDate={handleSelectedDate}
              />
            </Container>
          </ModalitiesSection>
          <ReviewsSection ref={reviewsRef}>
            <Element name="reviews" />
            <Container>
              <TitleWrapper mb="35px">
                <Heading content="รีวิว" {...titleStyle} />
              </TitleWrapper>
              <Review isMobile={false} />
            </Container>
          </ReviewsSection>
          <NearbyDestinationsSection ref={nearbyDestinationsRef}>
            <Element name="nearbyDestinations" />
            <Container>
              <TitleWrapper mb="32px">
                <Heading content="จุดหมายปลายทางที่ใกล้เคียง" {...titleStyle} />
              </TitleWrapper>
              <NearbyDestinations isMobile={false} />
            </Container>
          </NearbyDestinationsSection>
          {modalityCart && (
            <CartSection>
              <Container>
                <CartWrapper>
                  <ModalityCartNameText>
                    {modalityCart.detail.name}
                  </ModalityCartNameText>
                  <CartDetailWrapper>
                    <TotalCountText>{`รวมเป็นจำนวน ${_.sumBy(
                      modalityCart.paxes,
                      (pax: Pax) => pax.count
                    )} คน`}</TotalCountText>
                    <TotalAmountText>
                      รวมเป็นเงินทั้งสิ้น{' '}
                      <span>
                        {_.sumBy(
                          modalityCart.paxes,
                          (pax: Pax) => pax.amount * pax.count
                        ).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}
                      </span>{' '}
                      บาท
                    </TotalAmountText>
                  </CartDetailWrapper>
                  <ContinueButton
                    onClick={() =>
                      NavigationManager.redirectTo('/package/checkout')
                    }
                  >
                    ดำเนินการต่อ <KeyboardArrowRightIcon />
                  </ContinueButton>
                </CartWrapper>
              </Container>
            </CartSection>
          )}
        </>
      )}
    </>
  );
};

export default Desktop;
