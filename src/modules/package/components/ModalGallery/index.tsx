import React, { FunctionComponent, useState } from 'react';
import Slider from 'react-slick';
import { Backdrop, Fade, Modal } from '@material-ui/core';
import useToggle from 'modules/package/Hook/useToggle';
import Slide from './Slide';
import Thumbnail from './Thumbnail';
import {
  ClearRoundedIcon,
  OpenModalWrapper,
  ModalContentWrapper,
  CloseButtonWrapper,
  GalleryWrapper,
  SliderWrapper,
  ThumbnailWrapper,
  CloseButton,
} from './Style';

type Props = {
  children?: JSX.Element;
  photos: any[];
  index: number;
};

const ModalGallery: FunctionComponent<Props> = ({
  children,
  photos,
  index,
}) => {
  const [nav1, setNav1] = useState<Slider>();
  const [nav2, setNav2] = useState<Slider>();

  const { toggle, handleOpen, handleClose } = useToggle();

  return (
    <>
      <OpenModalWrapper onClick={handleOpen}>{children}</OpenModalWrapper>
      <Modal
        open={toggle}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={toggle}>
          <ModalContentWrapper>
            <CloseButtonWrapper>
              <CloseButton onClick={handleClose}>
                <ClearRoundedIcon />
              </CloseButton>
            </CloseButtonWrapper>
            <GalleryWrapper>
              <SliderWrapper>
                <Slide
                  photos={photos}
                  index={index}
                  nav={nav2}
                  setNav={setNav1}
                />
              </SliderWrapper>
              <ThumbnailWrapper>
                <Thumbnail
                  photos={photos}
                  index={index}
                  nav={nav1}
                  setNav={setNav2}
                />
              </ThumbnailWrapper>
            </GalleryWrapper>
          </ModalContentWrapper>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalGallery;
