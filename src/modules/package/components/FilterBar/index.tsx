import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Star } from '@material-ui/icons';
import Heading from 'common/src/components/Heading';
import Map from 'assets/images/map_mobile.jpg';
import ModalScreen from '../ModalScreen';
import ButtonGroupSelectSortBy from './ButtonGroupSelectSortBy';
import ButtonGroupSelectStarRating from './ButtonGroupSelectStarRating';
import PriceRangeGroupSelect from './PriceRangeGroupSelect';
import SelectPrice from './SelectPrice';
import ButtonGroupSelectScore from './ButtonGroupSelectScore';
import CheckboxGroupSelectWithCount from './CheckboxGroupSelectWithCount';
import {
  Section,
  ContainerSticky,
  FilterBarMobileWrapper,
  FilterBarWrapper,
  FilterBarScrollContainer,
  FilterBodyWrapper,
  HeaderWrapper,
  FilterMobileWrapper,
  FilterWrapper,
  Container,
  ButtonFilter,
  MapImage,
  TextTotalSearch,
  FooterButtonWrapper,
  FooterButton,
  titleMobile,
  titleDesktop,
} from './Style';

type Props = {
  isMobile: boolean;
  sorting?: Sorting;
  filter?: FilterTest;
  onChangeSorting?: (event: React.ChangeEvent<any>, sorting: Sorting) => void;
  onChangeFilter?: (
    event: React.ChangeEvent<any>,
    filter: FilterTest | null
  ) => void;
};

const FilterBar: FunctionComponent<Props> = (props: Props) => {
  const { isMobile, sorting, filter, onChangeSorting, onChangeFilter } = props;

  if (isMobile) {
    return (
      <Section>
        <Container>
          <FilterBarMobileWrapper>
            <ModalScreen
              title={'เรียงและกรองผล'}
              fullscreen
              buttonOpenModal={(props: any) => {
                return (
                  <ButtonFilter onClick={props.onClick}>
                    {'เรียงและกรองผล'}
                  </ButtonFilter>
                );
              }}
            >
              <>
                <FilterBarScrollContainer
                  windowInnerHeight={
                    typeof window === 'object' ? window.innerHeight : 0
                  }
                >
                  <FilterBodyWrapper>
                    <Heading content={'เรียงลำดับตาม'} {...titleMobile} />
                    <FilterMobileWrapper mt="14px">
                      <ButtonGroupSelectSortBy
                        sorting={sorting}
                        onChangeSorting={onChangeSorting}
                      />
                    </FilterMobileWrapper>
                  </FilterBodyWrapper>
                  <FilterBodyWrapper pt="22px" pb="27px">
                    <Heading content={'ระดับดาว'} {...titleMobile} />
                    <FilterMobileWrapper mt="16px">
                      <ButtonGroupSelectStarRating
                        value={_.get(filter, 'rating', [1, 2, 3, 4, 5])}
                        onChange={(event: any, newValue: any[]) => {
                          if (onChangeFilter)
                            onChangeFilter(event, {
                              ...filter,
                              rating: newValue,
                            });
                        }}
                      />
                    </FilterMobileWrapper>
                  </FilterBodyWrapper>
                  <FilterBodyWrapper pt="28px" pb="30px">
                    <Heading content={'ราคา'} {...titleMobile} />
                    <FilterMobileWrapper mt="17px">
                      <SelectPrice
                        value={_.get(filter, 'price', 'all')}
                        onChange={(event: any) => {
                          if (onChangeFilter)
                            onChangeFilter(event, {
                              ...filter,
                              price: event.target.value,
                            });
                        }}
                      />
                    </FilterMobileWrapper>
                    <HeaderWrapper mt="22px">
                      <Heading content={'ช่วงราคา'} {...titleMobile} />
                    </HeaderWrapper>
                    <FilterMobileWrapper mt="15px">
                      <PriceRangeGroupSelect />
                    </FilterMobileWrapper>
                  </FilterBodyWrapper>
                  <FilterBodyWrapper pt="25px" pb="30px">
                    <Heading content={'คะแนนผู้เข้าพัก'} {...titleMobile} />
                    <FilterMobileWrapper mt="13px">
                      <ButtonGroupSelectScore
                        value={_.get(filter, 'score')}
                        isMobile
                        onChange={(event: any, newValue: number) => {
                          if (onChangeFilter)
                            onChangeFilter(event, {
                              ...filter,
                              score: newValue,
                            });
                        }}
                      />
                    </FilterMobileWrapper>
                  </FilterBodyWrapper>
                  <FilterBodyWrapper pt="25px" pb="36px">
                    <Heading content={'การชำระเงิน'} {...titleMobile} />
                    <FilterMobileWrapper mt="17px">
                      <CheckboxGroupSelectWithCount
                        selectedValues={_.get(filter, 'payment', [
                          'payment_at_metting_point',
                          'no_credit_card_required_for_booking',
                        ])}
                        items={[
                          {
                            label: 'ชำระเงิน ณ จุดนัดหมาย',
                            value: 'payment_at_metting_point',
                            count: 861,
                          },
                          {
                            label: 'ไม่ต้องใช้บัตรเครดิตในการจอง',
                            value: 'no_credit_card_required_for_booking',
                            count: 467,
                          },
                        ]}
                        labelColor="fifth"
                        checkedColor="fifth"
                        onSelectedValue={(
                          event: any,
                          selectedValues: number[]
                        ) => {
                          if (onChangeFilter)
                            onChangeFilter(event, {
                              ...filter,
                              payment: selectedValues,
                            });
                        }}
                      />
                    </FilterMobileWrapper>
                  </FilterBodyWrapper>
                </FilterBarScrollContainer>
                <FooterButtonWrapper>
                  <FooterButton
                    type="reset"
                    onClick={(event: any) => {
                      if (onChangeSorting && onChangeFilter) {
                        onChangeSorting(event, {
                          sortBy: 'recommend',
                          sortDirection: 'asc',
                        } as Sorting);
                        onChangeFilter(event, null);
                      }
                    }}
                  >
                    ล้างข้อมูล
                  </FooterButton>
                  <FooterButton type="submit">เรียงและกรองผล</FooterButton>
                </FooterButtonWrapper>
              </>
            </ModalScreen>
            <MapImage src={Map} alt="" />
            <TextTotalSearch>ค้นพบ ยังไมมี กิจกรรม</TextTotalSearch>
          </FilterBarMobileWrapper>
        </Container>
      </Section>
    );
  }

  return (
    <ContainerSticky>
      <FilterBarWrapper>
        <HeaderWrapper>
          <Heading content={'ระดับดาว'} {...titleDesktop} />
        </HeaderWrapper>
        <FilterWrapper>
          <CheckboxGroupSelectWithCount
            selectedValues={_.get(filter, 'rating', [5, 4, 3, 2, 1])}
            items={[
              {
                label: _.map(new Array(5), () => <Star fontSize="small" />),
                value: 5,
                count: 322,
              },
              {
                label: _.map(new Array(4), () => <Star fontSize="small" />),
                value: 4,
                count: 354,
              },
              {
                label: _.map(new Array(3), () => <Star fontSize="small" />),
                value: 3,
                count: 215,
              },
              {
                label: _.map(new Array(2), () => <Star fontSize="small" />),
                value: 2,
                count: 456,
              },
              { label: <Star fontSize="small" />, value: 1, count: 715 },
            ]}
            labelColor="yellow"
            checkedColor="yellow"
            onSelectedValue={(event: any, selectedValues: number[]) => {
              if (onChangeFilter)
                onChangeFilter(event, { ...filter, rating: selectedValues });
            }}
          />
        </FilterWrapper>
        <HeaderWrapper mt="27px">
          <Heading content={'ราคา'} {...titleDesktop} />
        </HeaderWrapper>
        <FilterWrapper mt="14px" pb="21px" disabledBorderBottom>
          <SelectPrice
            value={_.get(filter, 'price', 'all')}
            onChange={(event: any) => {
              if (onChangeFilter)
                onChangeFilter(event, { ...filter, price: event.target.value });
            }}
          />
        </FilterWrapper>
        <HeaderWrapper mt="21px">
          <Heading content={'ช่วงราคา'} {...titleDesktop} />
        </HeaderWrapper>
        <FilterWrapper mt="15px" pb="33px">
          <PriceRangeGroupSelect />
        </FilterWrapper>
        <HeaderWrapper mt="24px">
          <Heading content={'คะแนน'} {...titleDesktop} />
        </HeaderWrapper>
        <FilterWrapper mt="16px" pb="27px">
          <ButtonGroupSelectScore
            value={_.get(filter, 'score')}
            isMobile={false}
            onChange={(event: any, newValue: number) => {
              if (onChangeFilter)
                onChangeFilter(event, { ...filter, score: newValue });
            }}
          />
        </FilterWrapper>
        <HeaderWrapper mt="24px">
          <Heading content={'การชำระเงิน'} {...titleDesktop} />
        </HeaderWrapper>
        <FilterWrapper mt="16px">
          <CheckboxGroupSelectWithCount
            selectedValues={_.get(filter, 'payment', [
              'payment_at_metting_point',
              'no_credit_card_required_for_booking',
            ])}
            items={[
              {
                label: 'ชำระเงิน ณ จุดนัดหมาย',
                value: 'payment_at_metting_point',
                count: 861,
              },
              {
                label: 'ไม่ต้องใช้บัตรเครดิตในการจอง',
                value: 'no_credit_card_required_for_booking',
                count: 467,
              },
            ]}
            labelColor="fifth"
            checkedColor="fifth"
            onSelectedValue={(event: any, selectedValues: number[]) => {
              if (onChangeFilter)
                onChangeFilter(event, { ...filter, payment: selectedValues });
            }}
          />
        </FilterWrapper>
      </FilterBarWrapper>
    </ContainerSticky>
  );
};

export default FilterBar;
