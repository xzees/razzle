import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { Pagination as MuiPagination } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface PaginationWrapperProps {
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
}

export const Pagination = withStyles({
  root: {
    '& .MuiPaginationItem': {
      '&-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        width: '41px',
        height: '40px',
        margin: '0px',
        borderRadius: '4px',
        color: ColorManager.default.fifthColor,
        backgroundColor: ColorManager.default.greyColor,
        fontFamily: `${FontManager.default.secondaryFont}`,
        fontSize: FontManager.default.medium,
        fontWeight: 'normal',
        lineHeight: '18px',
      },
      '&-page': {
        '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {
          color: ColorManager.default.white,
          backgroundColor: ColorManager.default.fifthColor,
        },
        '&.Mui-disabled': {
          color: ColorManager.default.fourthColor,
        },
      },
    },
  },
  ul: {
    '& > li': {
      margin: '0px 4px',
    },
    '& > li:first-child': {
      marginLeft: '0px',
    },
    '& > li:last-child': {
      marginRight: '0px',
    },
  },
})(MuiPagination);

export const ReviewWrapper = styled.div`
  padding-top: 26px;
`;

export const DropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 14px;
`;

export const ItemWrapper = styled.div`
  margin-top: 17px;
  margin-bottom: 41px;
`;

export const PaginationWrapper = styled.div<PaginationWrapperProps>`
  display: flex;
  justify-content: ${(props: PaginationWrapperProps) =>
    props.justifyContent || 'flex-start'};
  align-items: center;
  height: 100%;
`;
