import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const ZoneWrapper = styled.div`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
`;

export const CountWrapper = styled.div`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
  text-align: right;
`;

export const CityWrapper = styled.div`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
`;

export const UnitWrapper = styled.div`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
  text-align: right;
`;

export const ListItem = styled.li`
  padding: 18px 20px 16px;
  border-bottom: 1px solid ${ColorManager.default.greyColor};
  &:hover {
    cursor: pointer;
    background-color: ${ColorManager.default.primaryColor};
    & ${ZoneWrapper}, ${CityWrapper}, ${CountWrapper}, ${UnitWrapper} {
      color: ${ColorManager.default.white};
    }
  }
`;
