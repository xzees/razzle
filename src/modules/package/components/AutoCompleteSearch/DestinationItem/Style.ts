import styled from 'styled-components';
import { LocationOn } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const NameWrapper = styled.div`
  display: flex;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
`;

export const CountryWrapper = styled.div`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
`;

export const CountryIcon = styled(LocationOn)`
  color: ${ColorManager.default.fourthColor};
  margin-right: 8px;
`;

export const Name = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ListItem = styled.li`
  padding: 18px 20px 16px;
  border-bottom: 1px solid ${ColorManager.default.greyColor};
  &:hover {
    cursor: pointer;
    background-color: ${ColorManager.default.primaryColor};
    & ${NameWrapper}, ${CountryWrapper}, ${CountryIcon} {
      color: ${ColorManager.default.white};
    }
  }
`;
