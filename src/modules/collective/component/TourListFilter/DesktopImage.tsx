import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import { BoxTourImg, ImgBox, ImgCard, TourImg, CaptionImg } from './Desktop.style';
import { TourListProps } from './Interface';

const DesktopImage = inject("stores")(
  observer((props: TourListProps) => {
    const {
      tourData,
      index
    } = props

    return (
      <BoxTourImg className="Box-Tour-Img">
        <ImgBox className="Img-Box">
          <ImgCard className="Img-Card">
            <a href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank">
              {index === 0 ? (<TourImg visibleByDefault height={249} src={tourData?.coverImage} alt={tourData?.title} title={tourData?.title} />)
                : (<TourImg effect="blur" height={249} src={tourData?.coverImage} alt={tourData?.title} title={tourData?.title} />)
              }
              <CaptionImg className="Caption-Img">{i18n.t('collective.list.button.view')}</CaptionImg>
            </a>
          </ImgCard>
        </ImgBox>
      </BoxTourImg>
    )
  })
)

export default DesktopImage;