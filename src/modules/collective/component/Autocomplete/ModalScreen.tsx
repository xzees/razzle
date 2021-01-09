import React from "react"
import { TextField, Dialog, Slide, IconButton } from "@material-ui/core"
import { TransitionProps } from "@material-ui/core/transitions"
import { TextInput } from 'common/components/TextInput'
import styled from 'styled-components';
import AutoCompleteComponent from "modules/collective/component/Autocomplete/AutoComplete";
import ColorManager from "common/Manager/ColorManager";
import FontManager from 'common/Manager/FontManager';
import { Label } from "common/components/Label";

type Props = {
  children?: any
  label: string
  fullscreen?: boolean
  closeBtnAign?: "left" | "right"
  closeBtnIcon?: any,
  title?: any,
  onChange?: any,
  getOptionLabel: any,
  headerColor?: any
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction={"up"} ref={ref} {...props} />
})

const ModalScreen = (props: Props) => {
  const { fullscreen, label } = props
  const [state, setState] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleClickOpen = () => {
    setState(true)
  }

  const handleClose = () => {
    setState(false)
  }

  const inputChange = (e: any, value: any) => {
    setState(false)
    setValue(value)
    console.log(value)
    props.onChange(e, value)
  }

  return (
    <>
      <styles.TextField
        readOnly={true}
        value={props.getOptionLabel(value)}
        placeholder={label}
        onClick={handleClickOpen}
      />
      <Dialog
        open={state}
        TransitionComponent={Transition}
        style={{ zIndex: 99999 }}
        fullScreen={fullscreen ? true : false}
      >
        <styles.header style={{
          backgroundColor: (props.headerColor ? props.headerColor : '#440099')
        }}>
          <styles.divInHeaderLeft>
            <Label style={{ color: ColorManager.default.white, fontFamily: FontManager.default.secondaryFont, fontSize: '1.5625rem' }}>{props.title}</Label>
          </styles.divInHeaderLeft>
          <styles.divInHeaderRight>
            <IconButton onClick={handleClose} >
              {props.closeBtnIcon}
            </IconButton>
          </styles.divInHeaderRight>
        </styles.header>
        <div style={{ padding: '1rem' }}>
          <AutoCompleteComponent isMobile={true} {...props} onChange={inputChange} />
        </div>
      </Dialog>
    </>
  )
}

const styles = {
  TextField: styled.input`
    background: white;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 21px;
    padding: 10px 20px;
    width: 100%;
  `,
  header: styled.div`
    display: flex;
  `,
  divInHeaderLeft: styled.div`
    flex: 1;
    align-self: center;
    margin-left: 1rem!important;
  `,
  divInHeaderRight: styled.div`
    flex: initial;
    align-self: center;
  `,
}

export default ModalScreen 
