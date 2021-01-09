import React from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Parampath from 'common/models/Parampath';
import i18n from 'utilities/I18n';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/HomeRounded';
import { TourBreadcrumbs, FilterBar, SelectSort } from './Desktop.style';

type Props = {
  [key: string]: any;
  stores?: RootStore;
  match?: Parampath;
  tourCode?: string;
  handleSort: any;
  seoTour?: any;
}

const DesktopTop = inject("stores")(
  observer((props: Props) => {
    const {
      handleSort,
      seoTour,
      sortBy
    } = props

    function RenderLink(Type: string, Path: string, Name: string) {
      if (Name != "ทัวร์ต่างประเทศ" && Name != "ทัวร์ในประเทศ") {
        return (
          <Link color="inherit" href={Path} >{Type == 'outbound' ? i18n.t('collective.list.bc.outbound') : i18n.t('collective.list.bc.domestic')}</Link>
        )
      } else { return undefined; }
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <TourBreadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" style={{ alignItems: 'center', display: 'flex' }}> <HomeIcon style={{ width: 20, height: 20, marginRight: 4 }} /> {i18n.t('collective.list.bc.home')} </Link>
          {seoTour?.tourLinkParent ?
            (<Link color="inherit" href={seoTour?.tourLinkParent} >{seoTour?.tourParentTH}</Link>)
            : seoTour?.tourLink ? RenderLink(seoTour?.tourType, seoTour?.tourLink, seoTour?.tourTitleTH) : undefined
          }
          <Typography color="textPrimary">{seoTour?.tourTitleTH}</Typography>
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