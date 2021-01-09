import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

export const SelectDatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const ButtonDatePicker = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 42px;
  padding: 10px 20px;
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.orangeColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 15px;
  & > span {
    margin-left: 8px;
  }
`;
