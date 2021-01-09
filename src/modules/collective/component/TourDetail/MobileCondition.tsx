import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import ReactHtmlParser from 'react-html-parser';
import Heading from 'common/src/components/Heading';
import { h2Style, BoxCondition, CondTitle, IconCond, ExCondPanel, ExCondTab, ExCondTitle, ExCondDetail } from './Mobile.style';
import { AddCircleOutlineRounded, RemoveCircleOutlineRounded, CheckRounded, CloseRounded, ReportProblemRounded, BlockRounded, ChevronRightRounded } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import { TourDetailProps } from './Interface';

const MobileCondition = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, handleTabToggle } = props;

    return (
      <BoxCondition id="condition-tour">
        <CondTitle><IconCond htmlColor={ColorManager.default.primaryColor} /><Heading content={i18n.t('collective.detail.remarks.title')} {...h2Style} /></CondTitle>
        {tourDetail?.remarks ? (
          <>
            {tourDetail?.remarks.include.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.include')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.include.map<React.ReactNode>((x, index) => <div key={`include${index}`} className="cond-detail"><CheckRounded htmlColor="#4caf50" />{ReactHtmlParser(x.detail)}</div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.exclude.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.exclude')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.exclude.map<React.ReactNode>((x, index) => <div key={`exclude${index}`} className="cond-detail"><CloseRounded htmlColor="red" />{ReactHtmlParser(x.detail)}</div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.payment.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.payment')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.payment.map<React.ReactNode>((x, index, arr) =>
                    < div key={`payment${index}`} className="cond-detail">{arr.length - 1 === index ? '' : <ReportProblemRounded htmlColor="#ffc107" />}{ReactHtmlParser(x.detail)}</div>
                  ).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.cancel.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.cancel')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.cancel.map<React.ReactNode>((x, index) => <div key={`cancel${index}`} className="cond-detail"><BlockRounded htmlColor="red" />{ReactHtmlParser(x.detail)}</div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.other.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.other')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.other.map<React.ReactNode>((x, index) => <div key={`other${index}`} className="cond-detail"><ChevronRightRounded htmlColor="#409" />{ReactHtmlParser(x.detail)}</div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.irresponsibility.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.irresponsibility')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.irresponsibility.map<React.ReactNode>((x, index) => <div key={`irresponsibility${index}`} className="cond-detail"><ChevronRightRounded htmlColor="#409" />{ReactHtmlParser(x.detail)}</div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.recommend.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.recommend')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.recommend.map<React.ReactNode>((x, index) => <div key={`recommend${index}`} className="cond-detail"><ChevronRightRounded htmlColor="#409" />{ReactHtmlParser(x.detail)}</div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.visa.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.visa')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.visa.map<React.ReactNode>((x, index) => <div key={`visa${index}`} className="cond-detail"><ChevronRightRounded htmlColor="#409" /><div>{ReactHtmlParser(x.detail)}</div></div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
            {tourDetail?.remarks.important.length > 0 ? (
              <ExCondPanel onClick={handleTabToggle}>
                <ExCondTab>
                  <AddCircleOutlineRounded className="Plus-SVG" /><RemoveCircleOutlineRounded className="Minius-SVG" /><ExCondTitle>{i18n.t('collective.detail.remarks.important')}</ExCondTitle>
                </ExCondTab>
                <ExCondDetail className="condDetail">
                  {tourDetail?.remarks.important.map<React.ReactNode>((x, index) => <div key={`important${index}`} className="cond-detail"><ChevronRightRounded htmlColor="#409" />{ReactHtmlParser(x.detail)}</div>).reduce((prev, curr) => [prev, '', curr])}
                </ExCondDetail>
              </ExCondPanel>
            ) : undefined}
          </>
        ) : undefined}
      </BoxCondition>
    )
  })
)

export default MobileCondition;