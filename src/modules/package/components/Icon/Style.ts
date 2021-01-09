import styled from 'styled-components';
import { AppImage } from 'common/components';

export const AppImageIcon = styled(AppImage)`
  margin-right: 5px;
  width: ${(props: any) => props.width || '12px'};
  ${(props: any) =>
    props.height ? `height: ${(props: any) => props.height};` : ''};
`;
