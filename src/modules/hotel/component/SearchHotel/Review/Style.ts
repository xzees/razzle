import styled from 'styled-components';
import { Grid, Box, withStyles } from '@material-ui/core'
import Container from 'common/src/components/UI/Container'
import Chip from '@material-ui/core/Chip';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';

export const BoxReview = styled.div<any>`
  color: ${(props: any)=> props.color || ColorManager.default.fourthColor};
  font-size: ${(props: any) => props.fontSize ? props.fontSize : FontManager.default.TEXT_20} !important;
  line-height: 0.8;
`;

export const SpanRate = styled.span`
  color: ${(props: any)=> props.color || ColorManager.default.redColor};
`;
