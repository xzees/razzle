
import styled from 'styled-components'
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';

type Props = {
  thin?: boolean,
  underline?: boolean,
  bold?: boolean,
  bolder?: boolean,
  color?: string,
  fontSize?: string,
  singleLine?: boolean,
  hideOverflow?: boolean,
  lineHeight?: string | number
}

export const Label = styled("label")`
    color: ${(props: Props) => props.color || ColorManager.default.text};
    font-size: ${(props: Props) => props.fontSize || FontManager.default.text};
    margin: 0px;
    padding: 0px;
    line-height: ${(props: Props) => props.lineHeight || props.fontSize || FontManager.default.text};
    white-space: ${(props: Props) => props.singleLine ? 'pre' : 'unset'};
    text-overflow: ${(props: Props) => props.singleLine ? 'ellipsis' : 'initial'};
    overflow: ${(props: Props) => props.hideOverflow ? 'hidden' : 'initial'};
    font-weight: ${(props: Props) => props.thin ? 100 : props.bold ? 'bold' : props.bolder ? 900 : 'normal'};
    text-decoration: ${(props: Props) => props.underline ? 'underline' : 'inherit'};
`

export const ThinLabel = styled(Label)`
  font-weight: 'light';
`

export const SubLabel = styled(Label)`
  font-size: 0.9em;
`

export const RemarkLabel = styled(Label)`
  font-size: ${FontManager.default.remark};
`

export const Remark = styled(Label)`
  font-size: 0.7em;
`