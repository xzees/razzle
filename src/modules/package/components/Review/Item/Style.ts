import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ItemWrapperProps {
  mb?: string | number;
  p?: string | number;
}

interface ItemLayoutWrapperProps {
  columnGap?: string | number;
  mb?: string | number;
}

interface ReviewDetailWrapperProps {
  textAlign?: 'left' | 'center' | 'right' | 'justify';
}

interface ItemContentWrapperProps {
  mt?: string | number;
}

interface TextWrapperProps {
  mt?: string | number;
  mb?: string | number;
}

interface RepliesWrapperProps {
  mt?: string | number;
}

interface ImgProps {
  size?: string | number;
}

interface ScoreTextProps {
  fontSize?: string | number;
  lineHeight?: string | number;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${ColorManager.default.greyColor};
  background-color: ${ColorManager.default.white};
  ${(props: ItemWrapperProps) => (props.p ? `padding: ${props.p};` : '')}
  ${(props: ItemWrapperProps) =>
    props.mb
      ? `
    &:not(:last-child) {
      margin-bottom: ${props.mb};
    }
  `
      : ''}
`;

export const ItemLayoutWrapper = styled.div<ItemLayoutWrapperProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  ${(props: ItemLayoutWrapperProps) =>
    props.columnGap ? `grid-column-gap: ${props.columnGap};` : ''}
  ${(props: ItemLayoutWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
`;

export const ItemAvartarRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContentWrapper = styled.div<ItemContentWrapperProps>`
  ${(props: ItemContentWrapperProps) =>
    props.mt ? `margin-top: ${props.mt};` : ''}
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 26px;
`;

export const RepliesWrapper = styled.div<RepliesWrapperProps>`
  ${(props: RepliesWrapperProps) =>
    props.mt ? `margin-top: ${props.mt};` : ''}
`;

export const ReviewDetailWrapper = styled.div<ReviewDetailWrapperProps>`
  ${(props: ReviewDetailWrapperProps) =>
    props.textAlign ? `text-align: ${props.textAlign};` : ''}
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TextWrapper = styled.div<TextWrapperProps>`
  ${(props: TextWrapperProps) => (props.mt ? `margin-top: ${props.mt};` : '')}
  ${(props: TextWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
`;

export const ImageAvatar = styled.img<ImgProps>`
  ${(props: ImgProps) =>
    props.size
      ? `
    width: ${props.size};
    height: ${props.size};
  `
      : ''}
  border-radius: 50%;
  box-shadow: 0px 1px 1px 0 rgba(1, 1, 1, 0.2);
`;

export const FlagImage = styled.img`
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 23px;
  height: 21px;
  box-shadow: 0px 2px 2px 0 rgba(1, 1, 1, 0.2);
`;

export const ScoreText = styled.h3<ScoreTextProps>`
  margin: 0px;
  color: ${ColorManager.default.fifthColor};
  font-family: '${FontManager.default.secondaryFont}';
  ${(props: ScoreTextProps) =>
    props.fontSize ? `font-size: ${props.fontSize};` : ''}
  font-weight: normal;
  ${(props: ScoreTextProps) =>
    props.lineHeight ? `line-height: ${props.lineHeight};` : ''}
`;

export const TitleText = styled.h3`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.large};
  font-weight: normal;
  line-height: 20px;
`;

export const MessageText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 20px;
`;

export const Divider = styled.hr`
  border: none;
  margin: 0px;
  border-top: 3px dashed ${ColorManager.default.greyColor};
`;

export const ReviewerText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
  line-height: 20px;
`;

export const CaptionText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 20px;
  & > span {
    color: ${ColorManager.default.text};
  }
`;
