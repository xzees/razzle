import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { FavoriteBorder, LocationOn, Share } from '@material-ui/icons';
import NavigationManager from 'common/Manager/NavigationManager';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import PhotoGridList from 'modules/package/components/PhotoGridList';
import ModalScreen from 'modules/package/components/ModalScreen';
import EditSearch from 'modules/package/components/HeaderSearch/EditSearch';
import Modalities from 'modules/package/components/Modalities';
import Review from 'modules/package/components/Review';
import NearbyDestinations from 'modules/package/components/NearbyDestinations';
import {
  Rating,
  ExpandMoreIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  KeyboardArrowRightIcon,
  ContentSection,
  ModalitiesSection,
  ReviewsSection,
  NearbyDestinationsSection,
  CartSection,
  HeaderWrapper,
  ButtonHeaderWrapper,
  TitleWrapper,
  PhotoGridListWrapper,
  ContentWrapper,
  DescriptionWrapper,
  CartWrapper,
  CartDetailWrapper,
  TextExpanded,
  EditSearchButton,
  ButtonHeader,
  Address,
  TotalCountText,
  TotalAmountText,
  Divider,
  titleHeaderStyle,
  titleStyle,
  ContinueButton,
} from '../Styles/Mobile';

type Props = {
  activity: any;
  modalities: any[];
  modalityCart: ModalityCart | null;
  dateSelect: Date | null;
  isLoadingModality: boolean;
  addToCart: (ModalityCartDetail: ModalityCartDetail) => void;
  handleChangeDate: (date: Date | null) => void;
  handleSelectedDate: () => void;
};

const Mobile: FunctionComponent<Props> = (props: Props) => {
  const {
    activity,
    modalities,
    modalityCart,
    dateSelect,
    isLoadingModality,
    addToCart,
    handleChangeDate,
    handleSelectedDate,
  } = props;

  return (
    <>
      <HeaderWrapper>
        <ModalScreen
          title={'แก้ไขการค้นหา'}
          fullscreen
          buttonOpenModal={(props: any) => {
            return (
              <EditSearchButton onClick={props.onClick}>
                แก้ไขการค้นหา
              </EditSearchButton>
            );
          }}
        >
          <EditSearch />
        </ModalScreen>
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
      <ContentSection>
        <PhotoGridListWrapper>
          <PhotoGridList
            photos={[
              ...(activity?.content?.media.images || []),
              ...(activity?.content?.media.images || []),
            ]}
            isMobile
          />
        </PhotoGridListWrapper>
        <Container>
          <ContentWrapper mb="19px">
            <Heading content={activity?.name} {...titleHeaderStyle} />
            <Rating name="rating" value={4} readOnly />
            <Address>
              3/3 Wangsingkam Rd., Changmoi, Muang, ช้างม่อย, 50300 เชียงใหม่,
              ไทย
            </Address>
          </ContentWrapper>
          <Divider />
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Heading content="รายละเอียดกิจกรรม" {...titleStyle} />
              <TextExpanded>ดูข้อมูล</TextExpanded>
            </AccordionSummary>
            <AccordionDetails>
              <DescriptionWrapper
                dangerouslySetInnerHTML={{
                  __html: activity?.content?.description,
                }}
              />
            </AccordionDetails>
          </Accordion>
          <Divider />
        </Container>
      </ContentSection>
      <ModalitiesSection>
        <Container>
          <TitleWrapper mb="16px">
            <Heading content="ประเภทกิจกรรม" {...titleStyle} />
          </TitleWrapper>
          <Modalities
            isMobile
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
      <ReviewsSection>
        <Container>
          <TitleWrapper mb="16px">
            <Heading content="รีวิว" {...titleStyle} />
          </TitleWrapper>
          <Review isMobile />
        </Container>
      </ReviewsSection>
      <NearbyDestinationsSection>
        <Container>
          <TitleWrapper mb="41px">
            <Heading content="จุดหมายปลายทางที่ใกล้เคียง" {...titleStyle} />
          </TitleWrapper>
          <NearbyDestinations isMobile />
        </Container>
      </NearbyDestinationsSection>
      {modalityCart && (
        <CartSection>
          <Container>
            <CartWrapper>
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
                    ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
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
  );
};

export default Mobile;
