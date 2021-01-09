import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import ModalGallery from '../ModalGallery';
import {
  GridLayoutWrapper,
  GridLayoutWrapperMobile,
  ImageWrapper,
  RibbonWrapper,
  RibbonWrapperMobile,
  ViewMoreWrapper,
  Image,
  Text,
} from './Style';

type Props = {
  photos: any[];
  isMobile: boolean;
};

const PhotoGridList: FunctionComponent<Props> = ({ photos, isMobile }) => {
  if (isMobile) {
    return (
      <GridLayoutWrapperMobile count={photos.length}>
        {_.map(_.take(photos, 3), (photo: any, index: number) => {
          return (
            <ImageWrapper>
              <Image
                src={_.find(photo?.urls || [], { sizeType: 'RAW' })?.resource}
                alt=""
                isBorderRadius={false}
              />
              {index === 0 && (
                <RibbonWrapperMobile>
                  <Text fontSize="14px" lineHeight="0.7">
                    คะแนน
                  </Text>
                  <Text
                    fontWeight="medium"
                    fontSize="22px"
                    lineHeight="0.7"
                    mt="5px"
                  >
                    7.8
                  </Text>
                  <Text fontSize="14px" lineHeight="0.7" mt="5px">
                    (2,909)
                  </Text>
                </RibbonWrapperMobile>
              )}
              {photos.length > 3 && index === 2 && (
                <ViewMoreWrapper fontSize="small">
                  {`ดูรูปทั้งหมด (${photos.length})`}
                </ViewMoreWrapper>
              )}
            </ImageWrapper>
          );
        })}
      </GridLayoutWrapperMobile>
    );
  }

  return (
    <GridLayoutWrapper count={photos.length}>
      {_.map(_.take(photos, 7), (photo: any, index: number) => {
        return (
          <ImageWrapper>
            <ModalGallery photos={photos} index={index}>
              <>
                <Image
                  src={_.find(photo?.urls || [], { sizeType: 'RAW' })?.resource}
                  alt=""
                  isBorderRadius
                />
                {index === 0 && (
                  <RibbonWrapper>
                    <Text fontSize="14px" lineHeight="0.7">
                      คะแนน
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize="22px"
                      lineHeight="0.7"
                      mt="5px"
                    >
                      7.8
                    </Text>
                    <Text fontSize="14px" lineHeight="0.7" mt="5px">
                      (2,909)
                    </Text>
                  </RibbonWrapper>
                )}
                {photos.length > 7 && index === 6 && (
                  <ViewMoreWrapper>
                    {`ดูรูปทั้งหมด (${photos.length})`}
                  </ViewMoreWrapper>
                )}
              </>
            </ModalGallery>
          </ImageWrapper>
        );
      })}
    </GridLayoutWrapper>
  );
};

export default PhotoGridList;
