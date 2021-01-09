import styled from 'styled-components';
import { Skeleton } from '@material-ui/lab';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';
interface ContainerListItemProps {
  isMobile: boolean;
}

interface ListItemLoadingProps {
  inline?: boolean;
}

export const ListBox = styled.ul``;

export const ListItemBoxLoading = styled.div`
  max-height: 275px;
  overflow: auto;
  border-radius: 0px 0px 5px 5px;
  text-align: left;
`;

export const ListItemHeader = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  color: ${ColorManager.default.fourthColor};
  background-color: ${ColorManager.default.greyColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 0.82;
`;

export const ListItemLoading = styled.li<ListItemLoadingProps>`
  ${(props) => (props.inline ? 'display: flex; align-items: center;' : '')}
  background-color: white;
  padding: 8px 15px;
  border-bottom: 1px solid ${ColorManager.default.greyColor};
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 28px;
  border-bottom: 1px solid ${ColorManager.default.greyColor};
`;

export const SkeletonLoadingCountryIcon = styled(Skeleton)`
  margin-right: 8px;
`;

export const ContainerListItem = styled.div<ContainerListItemProps>`
  overflow: auto;
  ${(props) => (props.isMobile ? '' : 'max-height: 300px;')};
`;

export const CityPopularButton = styled.a`
  border: 1px solid ${ColorManager.default.fourthColor};
  border-radius: 4px;
  color: ${ColorManager.default.fourthColor};
  display: table-cell;
  font-size: ${FontManager.default.small};
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin: 7px 20px 7px 0px;
  padding: 3px 17px !important;
  cursor: pointer;
  font-family: 'DBHeaventRoundedMedv32';
  :hover {
    color: white;
    background-color: ${ColorManager.default.fifthColor};
    border: 1px solid ${ColorManager.default.fifthColor};
  }
`;
