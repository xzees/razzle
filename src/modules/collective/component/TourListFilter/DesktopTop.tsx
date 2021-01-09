import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/HomeRounded';
import { TourBreadcrumbs, FilterBar, SelectSort } from './Desktop.style';

type Props = {
  handleSort: any;
  servSeo?: any;
  seoTour?: any;
  sortBy?: string;
}

const DesktopTop = inject("stores")(
  observer((props: Props) => {
    const {
      handleSort,
      servSeo,
      seoTour,
      sortBy
    } = props

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <TourBreadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{ alignItems: 'center', display: 'flex' }}> <HomeIcon style={{ width: 20, height: 20, marginRight: 4 }} /> {i18n.t('collective.list.bc.home')} </Link>
          <Link color="inherit" href={servSeo?.tourLink ? servSeo?.tourLink : seoTour?.tourLink} >
            {servSeo?.tourType == 'outbound' ? i18n.t('collective.list.bc.outbound') : seoTour?.tourType == 'outbound' ? i18n.t('collective.list.bc.outbound') : i18n.t('collective.list.bc.domestic')}
          </Link>
          <Typography color="textPrimary">{servSeo?.tourTitleTH}{seoTour?.tourTitleTH}</Typography>
        </TourBreadcrumbs>

        <FilterBar >
          <SelectSort onChange={e => handleSort(e)} value={sortBy}>
            <option value="minPrice">{i18n.t('collective.list.sb.lowprice')}</option>
            <option value="maxPrice">{i18n.t('collective.list.sb.hiprice')}</option>
            <option value="default">{i18n.t('collective.list.sb.rectour')}</option>
            <option value="rating">{i18n.t('collective.list.sb.rating')}</option>
          </SelectSort>
        </FilterBar>
      </div>
    )
  })
)

export default DesktopTop;