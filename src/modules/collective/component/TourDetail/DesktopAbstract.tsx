import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import { BoxAbstract, h2Style } from './Desktop.style';
import ColorManager from 'common/Manager/ColorManager';
import { GradeRounded } from '@material-ui/icons';
import { TourDetailProps } from './Interface';

const DesktopAbstract = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;
    return (
      <>
        {tourDetail?.description ? (
          <BoxAbstract id="abstract">
            <div style={{ display: 'flex' }}><GradeRounded htmlColor={ColorManager.default.primaryColor} style={{ marginRight: 5 }} /><Heading content={i18n.t('collective.detail.hilight')} {...h2Style} /></div>
            <p>{tourDetail?.description}</p>
          </BoxAbstract>
        ) : undefined}
      </>
    )
  })
)

export default DesktopAbstract;