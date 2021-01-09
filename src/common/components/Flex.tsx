import React from 'react'
import styled from 'styled-components';

type Props = {
  centerY?: boolean,
  centerX?: boolean,
  touchable?: boolean,
  autoAdjust?: boolean,
  adjustedHorizontalPosition?: 'left' | 'center',
}

export const FlexColumn = (props: Props & React.HTMLAttributes<HTMLDivElement>) => (
  <styles.FlexColumn {...props} className={`d-flex flex-column ${props.className || ''}`}>
    {props.children}
  </styles.FlexColumn>
)

export const FlexRow = (props: Props & React.HTMLAttributes<HTMLDivElement>) => (
  <styles.FlexRow {...props} className={`d-flex flex-row ${props.className || ''}`}>
    {props.children}
  </styles.FlexRow>
)

const styles = {
  FlexColumn: styled("div")`
    display: flex;
    height: 500px;
    transition: 0.35s;
    justify-content: ${(props: Props) => props.centerY ? 'center' : 'initial'};
    align-items: ${props => props.centerX ? 'center' : 'initial'};
    cursor: ${props => props.touchable ? 'pointer !important' : 'initial'};
    *{
      cursor: ${props => props.touchable ? 'pointer !important' : 'initial'};
    }
  `,
  FlexRow: styled("div")`
    transition: 0.35s;
    justify-content: ${(props: Props) => props.centerX ? 'center' : 'initial'};
    align-items: ${props => props.centerY ? 'center' : 'initial'};
    cursor: ${props => props.touchable ? 'pointer !important' : 'initial'};
    * {
      cursor: ${props => props.touchable ? 'pointer !important' : 'initial'};
    }
    @media (max-width: 768px) {
      align-items: ${props => props.autoAdjust ? 'normal' : props.centerY ? 'center' : 'initial'} !important;
      flex-direction: ${props => props.autoAdjust ? 'column' : 'row'};
    }
  `
}