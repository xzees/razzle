import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import Heading from 'common/src/components/Heading';
import { KanokIcon } from '../Icon';
import Price from '../Price';
import Image from './Image';
import Option from './Option';
import {
  SearchItemWrapper,
  ContentWrapper,
  ContentLeftWrapper,
  ContentRightWrapper,
  ContentHeaderWrapper,
  ContentBodyWrapper,
  TitleWrapper,
  LocationWrapper,
  DescriptionWrapper,
  ReadMoreWrapper,
  PriceWrapper,
  RoomRoundedIcon,
  Divider,
  Button,
  titleDesktop,
  titleMobile,
  RatingMobile,
  Rating,
  ReviewWrapper,
  Rate,
  OptionWrapper,
} from './Style';

type Props = {
  item: any;
  index: number;
  isMobile: boolean;
};

const SearchItem: FunctionComponent<Props> = ({ item, index, isMobile }) => {
  const isLarge = useMediaQuery(
    `(max-width: ${useTheme().breakpoints.values.lg}px)`
  );

  if (isMobile) {
    return (
      <SearchItemWrapper isMobile>
        <Grid container>
          <Grid item xs={3}>
            <Image
              href={`/package/activity/detail/${item?.code}${location.search}`}
              title={_.get(item, 'content.name', '')}
              coverImage={
                _.find(_.get(item, 'content.media.images.0.urls', []), {
                  sizeType: 'RAW',
                })?.resource
              }
              isMobile
              test={index}
            />
          </Grid>
          <Grid item xs={9}>
            <ContentWrapper isMobile>
              <ContentHeaderWrapper>
                <TitleWrapper>
                  <a
                    href={`/package/activity/detail/${item?.code}${location.search}`}
                    target="_blank"
                  >
                    <Heading
                      content={_.get(item, 'content.name')}
                      {...titleMobile}
                    />
                  </a>
                </TitleWrapper>
                <RatingMobile name="rating" value={4} readOnly />
              </ContentHeaderWrapper>
              <ContentBodyWrapper>
                <DescriptionWrapper isMobile>
                  {_.replace(
                    _.get(item, 'content.description', ''),
                    /<[^>]+>/g,
                    ''
                  )}
                  <ReadMoreWrapper isMobile={false}>
                    <a
                      href={`/package/activity/detail/${item?.code}${location.search}`}
                      target="_blank"
                    >
                      ... อ่านเพิ่มเติม
                    </a>
                  </ReadMoreWrapper>
                </DescriptionWrapper>
                <LocationWrapper isMobile>
                  <RoomRoundedIcon />
                  {_.get(item, 'country.name')}
                </LocationWrapper>
                <ReviewWrapper isMobile>
                  <KanokIcon />
                  <Rate>7.9 </Rate>
                  (2,909)
                </ReviewWrapper>
                <OptionWrapper isMobile>
                  <Option isMobile test={index} />
                </OptionWrapper>
                <Divider />
                <PriceWrapper isMobile>
                  <Price
                    isMobile
                    href={`/package/activity/detail/${item?.code}${location.search}`}
                    price={
                      _.find(_.get(item, 'amountsFrom', []), {
                        paxType: 'ADULT',
                      })?.amount
                    }
                    discount={1000}
                    currency={item?.currency}
                    isLarge={isLarge}
                    test={index}
                  />
                </PriceWrapper>
              </ContentBodyWrapper>
            </ContentWrapper>
          </Grid>
        </Grid>
      </SearchItemWrapper>
    );
  }

  return (
    <SearchItemWrapper isMobile={false}>
      <Grid container>
        <Grid item xs={12} lg={3}>
          <Image
            isLarge={isLarge}
            href={`/package/activity/detail/${item?.code}${location.search}`}
            title={_.get(item, 'content.name', '')}
            coverImage={
              _.find(_.get(item, 'content.media.images.0.urls', []), {
                sizeType: 'RAW',
              })?.resource
            }
            isMobile={false}
            test={index}
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <ContentWrapper isMobile={false}>
            <Grid container>
              {isLarge && (
                <Grid item xs={12}>
                  <ContentHeaderWrapper>
                    <TitleWrapper>
                      <a
                        href={`/package/activity/detail/${item?.code}${location.search}`}
                        target="_blank"
                      >
                        <Heading
                          content={_.get(item, 'content.name')}
                          {...titleDesktop}
                        />
                      </a>
                    </TitleWrapper>
                    <Rating name="rating" value={4} readOnly />
                  </ContentHeaderWrapper>
                </Grid>
              )}
              <Grid item sm={6} md={7} lg={7}>
                <ContentLeftWrapper isMobile={false} isLarge={isLarge}>
                  {!isLarge && (
                    <ContentHeaderWrapper>
                      <TitleWrapper>
                        <a
                          href={`/package/activity/detail/${item?.code}${location.search}`}
                          target="_blank"
                        >
                          <Heading
                            content={_.get(item, 'content.name')}
                            {...titleDesktop}
                          />
                        </a>
                      </TitleWrapper>
                      <Rating name="rating" value={4} readOnly />
                    </ContentHeaderWrapper>
                  )}
                  <DescriptionWrapper isMobile={false}>
                    {_.get(item, 'content.description')}
                    <ReadMoreWrapper isMobile={false}>
                      <a
                        href={`/package/activity/detail/${item?.code}${location.search}`}
                        target="_blank"
                      >
                        ... อ่านเพิ่มเติม
                      </a>
                    </ReadMoreWrapper>
                  </DescriptionWrapper>
                  <LocationWrapper isMobile={false}>
                    <RoomRoundedIcon />
                    {_.get(item, 'country.name')}
                  </LocationWrapper>
                  <ReviewWrapper isMobile={false}>
                    <KanokIcon />
                    <Rate>7.9 </Rate>
                    (2,909)
                  </ReviewWrapper>
                  <OptionWrapper isMobile={false}>
                    <Option isMobile={false} test={index} />
                  </OptionWrapper>
                </ContentLeftWrapper>
              </Grid>
              <Grid item sm={6} md={5} lg={5}>
                <ContentRightWrapper isMobile={false} isLarge={isLarge}>
                  <PriceWrapper isMobile={false} isLarge={isLarge}>
                    <Price
                      isMobile={false}
                      price={
                        _.find(item.amountsFrom, { paxType: 'ADULT' })?.amount
                      }
                      discount={1000}
                      currency={item?.currency}
                      isLarge={isLarge}
                      test={index}
                    />
                  </PriceWrapper>
                  {!isLarge && (
                    <Button
                      href={`/package/activity/detail/${item?.code}${location.search}`}
                      target="_blank"
                      role="button"
                    >
                      ดูเพิ่มเติม
                    </Button>
                  )}
                </ContentRightWrapper>
              </Grid>
            </Grid>
          </ContentWrapper>
          {isLarge && (
            <ContentWrapper isMobile={false}>
              <Button
                href={`/package/activity/detail/${item?.code}${location.search}`}
                target="_blank"
                role="button"
              >
                ดูเพิ่มเติม
              </Button>
            </ContentWrapper>
          )}
        </Grid>
      </Grid>
    </SearchItemWrapper>
  );
};

export default SearchItem;
