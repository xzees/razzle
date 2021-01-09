import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import {
  SearchItemWrapper,
  ContentWrapper,
  ContentLeftWrapper,
  ContentRightWrapper,
  ContentHeaderWrapper,
  ContentBodyWrapper,
  TitleWrapper,
  PriceWrapper,
  Divider,
} from '../Style';
import {
  DescriptionLoadingWrapper,
  LocationLoadingWrapper,
  ReviewLoadingWrapper,
  OptionLoadingWrapper,
} from './Style';

type Props = {
  isMobile: boolean;
};

const SearchItem: FunctionComponent<Props> = ({ isMobile }) => {
  const isLarge = useMediaQuery(
    `(max-width: ${useTheme().breakpoints.values.lg}px)`
  );

  if (isMobile) {
    return (
      <SearchItemWrapper isMobile>
        <Grid container>
          <Grid item xs={3}>
            <Skeleton
              variant="rect"
              height="100%"
              style={{ borderRadius: '4px 0px 0px 4px' }}
              animation="wave"
            />
          </Grid>
          <Grid item xs={9}>
            <ContentWrapper isMobile>
              <ContentHeaderWrapper>
                <Skeleton
                  variant="rect"
                  width="90%"
                  height="14px"
                  style={{ marginBottom: '3px' }}
                  animation="wave"
                />
                <Skeleton
                  variant="rect"
                  width="30%"
                  height="13px"
                  animation="wave"
                />
              </ContentHeaderWrapper>
              <ContentBodyWrapper>
                <DescriptionLoadingWrapper>
                  <Skeleton
                    variant="rect"
                    width="100%"
                    height="48px"
                    animation="wave"
                  />
                </DescriptionLoadingWrapper>
                <LocationLoadingWrapper>
                  <Skeleton
                    variant="rect"
                    width="5%"
                    height="13px"
                    style={{ marginRight: '5px' }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rect"
                    width="45%"
                    height="13px"
                    animation="wave"
                  />
                </LocationLoadingWrapper>
                <ReviewLoadingWrapper>
                  <Skeleton
                    variant="rect"
                    width="5%"
                    height="13px"
                    style={{ marginRight: '5px' }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rect"
                    width="45%"
                    height="13px"
                    animation="wave"
                  />
                </ReviewLoadingWrapper>
                <OptionLoadingWrapper>
                  <Skeleton
                    variant="rect"
                    width="5%"
                    height="13px"
                    style={{ marginRight: '5px' }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rect"
                    width="45%"
                    height="13px"
                    animation="wave"
                  />
                </OptionLoadingWrapper>
                <Divider />
                <PriceWrapper isMobile>
                  <Skeleton
                    variant="rect"
                    width="60%"
                    height="23px"
                    style={{ display: 'inline-block', marginBottom: '10px' }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="rect"
                    width="50%"
                    height="19px"
                    style={{ display: 'inline-block' }}
                    animation="wave"
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
          <Skeleton
            variant="rect"
            height={isLarge ? '249px' : '100%'}
            style={{
              borderRadius: isLarge ? '4px 4px 0px 0px' : '4px 0px 0px 4px',
            }}
            animation="wave"
          />
        </Grid>
        <Grid item xs={12} lg={9}>
          <ContentWrapper isMobile={false}>
            <Grid container>
              {isLarge && (
                <Grid item xs={12}>
                  <ContentHeaderWrapper>
                    <Skeleton
                      variant="rect"
                      width="90%"
                      height="19px"
                      style={{ marginBottom: '2px' }}
                      animation="wave"
                    />
                    <Skeleton
                      variant="rect"
                      width="30%"
                      height="18px"
                      animation="wave"
                    />
                  </ContentHeaderWrapper>
                </Grid>
              )}
              <Grid item sm={6} md={7} lg={7}>
                <ContentLeftWrapper isMobile={false} isLarge={isLarge}>
                  {!isLarge && (
                    <ContentHeaderWrapper>
                      <TitleWrapper>
                        <Skeleton
                          variant="rect"
                          width="90%"
                          height="19px"
                          style={{ marginBottom: '2px' }}
                          animation="wave"
                        />
                        <Skeleton
                          variant="rect"
                          width="30%"
                          height="18px"
                          animation="wave"
                        />
                      </TitleWrapper>
                    </ContentHeaderWrapper>
                  )}
                  <DescriptionLoadingWrapper>
                    <Skeleton
                      variant="rect"
                      width="100%"
                      height="55px"
                      animation="wave"
                    />
                  </DescriptionLoadingWrapper>
                  <LocationLoadingWrapper>
                    <Skeleton
                      variant="rect"
                      width="5%"
                      height="16px"
                      style={{ marginRight: '8px' }}
                      animation="wave"
                    />
                    <Skeleton
                      variant="rect"
                      width="45%"
                      height="16px"
                      animation="wave"
                    />
                  </LocationLoadingWrapper>
                  <ReviewLoadingWrapper>
                    <Skeleton
                      variant="rect"
                      width="5%"
                      height="16px"
                      style={{ marginRight: '8px' }}
                      animation="wave"
                    />
                    <Skeleton
                      variant="rect"
                      width="45%"
                      height="16px"
                      animation="wave"
                    />
                  </ReviewLoadingWrapper>
                  <OptionLoadingWrapper>
                    <Skeleton
                      variant="rect"
                      width="5%"
                      height="16px"
                      style={{ marginRight: '8px' }}
                      animation="wave"
                    />
                    <Skeleton
                      variant="rect"
                      width="45%"
                      height="16px"
                      animation="wave"
                    />
                  </OptionLoadingWrapper>
                </ContentLeftWrapper>
              </Grid>
              <Grid item sm={6} md={5} lg={5}>
                <ContentRightWrapper isMobile={false} isLarge={isLarge}>
                  <PriceWrapper isMobile={false} isLarge={isLarge}>
                    <Skeleton
                      variant="rect"
                      width="80%"
                      height="28px"
                      style={{ display: 'inline-block', marginBottom: '17px' }}
                      animation="wave"
                    />
                    <Skeleton
                      variant="rect"
                      width="90%"
                      height="25px"
                      style={{ display: 'inline-block' }}
                      animation="wave"
                    />
                  </PriceWrapper>
                  {!isLarge && (
                    <Skeleton
                      variant="rect"
                      width="100%"
                      height="42px"
                      animation="wave"
                      style={{ marginTop: '13px' }}
                    />
                  )}
                </ContentRightWrapper>
              </Grid>
            </Grid>
          </ContentWrapper>
          {isLarge && (
            <ContentWrapper isMobile={false}>
              <Skeleton
                variant="rect"
                width="100%"
                height="42px"
                animation="wave"
              />
            </ContentWrapper>
          )}
        </Grid>
      </Grid>
    </SearchItemWrapper>
  );
};

export default SearchItem;
