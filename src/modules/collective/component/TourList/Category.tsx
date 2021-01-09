import React from 'react';
import styled from 'styled-components';
import Container from 'common/src/components/UI/Container';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';
import SEOModel from 'modules/collective/Models/TourList/SEOModel';
import CategoryModel from 'modules/collective/Models/TourList/CategoryModel';
import { Grid } from '@material-ui/core';
import MuiAcc from '@material-ui/core/Accordion';
import MuiAccSum from '@material-ui/core/AccordionSummary';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowRight from "@material-ui/icons/ArrowForwardIosRounded";
import { getYearAndFutureTH } from 'common/Manager/Helper';

type Props = { seoModel?: SEOModel; categoryData: CategoryModel[]; isMobile?: boolean; }

const Category = (props: Props) => {
  const { seoModel, categoryData, isMobile } = props;

  React.useEffect(() => {
    if (isMobile) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      var categoryContent: any = document.getElementById("category-content");
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        categoryContent?.classList.add('mb40');
      } else {
        categoryContent?.classList.remove('mb40');
      }
    }
  }, [isMobile]);

  return (
    <CateContainer >
      <CateDiv id="category-content" >
        <CateTitle >{`${seoModel?.tourTitleTH} ${getYearAndFutureTH()}`}</CateTitle>
        {categoryData?.length > 0 ?
          categoryData?.map((cateVal, cateIndex) => (
            <Accordion key={`acc${cateIndex}`} defaultExpanded={isMobile === true ? false : true} disabled={isMobile === true ? false : true}>
              <MuiAccSum
                expandIcon={isMobile === true ? <ExpandMoreIcon /> : undefined}
                aria-controls={`cate${cateIndex}-content`}
                id={`cate${cateIndex}-header`}
              >
                <CateLabel >{cateVal?.categoryNameTH}</CateLabel>
              </MuiAccSum>
              <FilterBox >
                <Grid container >
                  {cateVal?.categoryData.map((cateData, cateDataIndex) => (
                    <Grid key={`cateData${cateDataIndex}`} item xs={12} sm={4} md={4} lg={4} >
                      <CateLink href={cateData.path} ><ArrowRightIcon />{cateData.nameTH}</CateLink>
                    </Grid>
                  ))}
                </Grid>
              </FilterBox>
            </Accordion>
          ))
          : undefined
        }
      </CateDiv >
    </CateContainer>
  );
}
const CateContainer = styled(Container)`
  .mb40 {
    margin-bottom: 40px;
  }
`
const CateDiv = styled.div`
  margin-top: 60px;
`
const CateTitle = styled.p`
  color: ${ColorManager.default.primaryColor};
  display: block;
  font-size: 2.0625rem;
  font-family: ${FontManager.default.secondaryFont};
  font-weight: normal;
  line-height: 1;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (min-width: 575px){
    font-size: 2.1875rem;
  }
  @media screen and (min-width: 768px){
    font-size: 2.3125rem;
  }
  @media screen and (min-width: 990px){
    font-size: 2.8125rem;
  }
  @media screen and (min-width: 1440px){
    font-size: 3.3125rem;
  }
`;

const Accordion = styled(MuiAcc)`
  background-color: unset !important;
  border: 1px solid ${ColorManager.default.fourthColor};
  border-radius: 4px !important;
  box-shadow: unset !important;
  margin: 0 !important;
  margin-bottom: 20px !important;
  :before {
    content: unset !important;
  }
  .MuiAccordionSummary-root.Mui-disabled {
    background: ${ColorManager.default.greyColor};
    border-radius: 4px 4px 0 0;
    opacity: 1;
  }
  .MuiAccordionSummary-root {
    min-height: unset !important;
    padding: 0;
  }
  .MuiAccordionSummary-content, .MuiAccordionSummary-content.Mui-expanded {
    align-items: center;
    justify-content: center;
    margin: 0 !important;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    background: ${ColorManager.default.greyColor};
    border-radius: 4px 4px 0 0;
  }
  .MuiAccordionSummary-expandIcon {
    margin-right: 0;
    padding: 0;
    position: absolute;
    right: 12px;
  }
  .MuiCollapse-container {
    border-top: 1px solid ${ColorManager.default.fourthColor};
    padding: 0 1rem;
  }
`
const ExpandMoreIcon = styled(ExpandMore)`
  margin: 0 !important;
  padding: 0 !important;
`

const CateLabel = styled.p`
  font-family: ${FontManager.default.secondaryFont};
  font-size: 1.5625rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding: 12px 0;
  width: -webkit-fill-available;
  text-align: center;
  @media screen and (min-width: 575px){
    font-size: 1.6875rem;
  }
  @media screen and (min-width: 768px){
    font-size: 1.8125rem;
  }
  @media screen and (min-width: 990px){
    font-size: 1.9375rem;
  }
  @media screen and (min-width: 1440px){
    font-size: 1.9375rem;
  }
`
const FilterBox = styled.div`
  margin: 10px 0;
`
const CateLink = styled.a`
  color: ${ColorManager.default.primaryColor};
  display: flex;
  font-size: 1.4375rem;
  margin-right: 20px;
  white-space: pre-wrap;
  @media screen and (max-width: 599px){
    margin-right: 0;
  }
  // @media screen and (min-width: 575px){
  //   font-size: 1.4375rem;
  // }
  @media screen and (min-width: 768px){
    font-size: 1.5625rem;
  }
  // @media screen and (min-width: 990px){
  //   font-size: 1.6875rem;
  // }
  // @media screen and (min-width: 1440px){
  //   font-size: 1.6875rem;
  // }
`
const ArrowRightIcon = styled(ArrowRight)`
  color: ${ColorManager.default.primaryColor};
  display: inline-flex !important;
  font-size: 14px !important;
  margin-top: 6px;
  margin-right: 10px;
  @media screen and (min-width: 768px){
    margin-top: 8px;
  }
`

export default Category;