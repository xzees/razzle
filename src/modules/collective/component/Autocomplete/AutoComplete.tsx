import React from 'react';
import { withHooksHOC, IHooksAutocompleteProps } from './withHooksHOC';
import styled from 'styled-components';
// import { TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOnRounded';
import PublicIcon from '@material-ui/icons/PublicRounded';
import { Skeleton } from '@material-ui/lab';
import { Label } from 'common/components/Label';

// const theme = createMuiTheme({
//   overrides: {
//     MuiInputLabel: { // Name of the component ⚛️ / style sheet
//       root: { // Name of the rule
//         color: "orange",
//         "&$focused": { // increase the specificity for the pseudo class
//           color: "blue"
//         }
//       }
//     }
//   }
// });

interface AutoCompleteState {
  textSearch: string,
  onOpen: boolean,
  placeholder: string,
  options: any
}

class AutoCompleteComponent extends React.PureComponent<IHooksAutocompleteProps, AutoCompleteState> {

  constructor(props: IHooksAutocompleteProps) {
    super(props)
    this.state = {
      onOpen: false,
      textSearch: '',
      placeholder: '',
      options: []
    }
  }

  renderInput() {
    const inputProps = this.props.data.getInputProps()
    let optionProp = { ...inputProps }
    return (
      // <ThemeProvider theme={theme}>
      <styles.TextField
        {...optionProp}
        variant="outlined"
        placeholder={this.props.placeholder}
        InputProps={{
          startAdornment: (
            <styles.startTextField>
              <LocationIcon />
            </styles.startTextField>
          ),
          style: { fontSize: 21 },
        }}
        onKeyUp={this.props.onKeyUp}
      />
      // </ThemeProvider>
    )
  }
  renderItem() {
    return (
      <styles.ulDivOutSide>
        <styles.ulAutocomplete className="listbox" {...this.props.data.getListboxProps()}>
          <styles.ulDivInSide>
            {this.props.data.groupedOptions.map((option: any, index: any) => (
              <li className="item" {...this.props.data.getOptionProps({ option, index })}>
                {(option.searchType == 'Country' ? <PublicIcon /> : <LocationIcon />)}
                {option.title}
              </li>
            ))}
          </styles.ulDivInSide>
        </styles.ulAutocomplete>
      </styles.ulDivOutSide>
    )
  }
  renderLoading() {
    return (
      <styles.ulDivOutSide>
        <styles.ulAutocomplete className="listbox" >
          <styles.ulDivInSide>
            <li className="load">
              <Skeleton height={29} width="30%" animation="wave" />
              <Skeleton height={29} width="100%" animation="wave" />
            </li>
            <li className="load">
              <Skeleton height={29} width="30%" animation="wave" />
              <Skeleton height={29} width="100%" animation="wave" />
            </li>
            <li className="load">
              <Skeleton height={29} width="30%" animation="wave" />
              <Skeleton height={29} width="100%" animation="wave" />
            </li>
          </styles.ulDivInSide>
        </styles.ulAutocomplete>
      </styles.ulDivOutSide>
    )
  }
  renderNotfind() {
    return (
      <styles.ulDivOutSide>
        <styles.ulAutocomplete className="listbox">
          <styles.ulDivInSide>
            <li className="load">ไม่พบข้อมูลที่ค้นหา</li>
          </styles.ulDivInSide>
        </styles.ulAutocomplete>
      </styles.ulDivOutSide>
    )
  }


  renderInputMobile() {
    const inputProps = this.props.data.getInputProps()
    let optionProp = { ...inputProps }
    return (
      <styles.TextFieldMobile
        {...optionProp}
        variant="outlined"
        placeholder={this.props.placeholder}
        InputProps={{
          style: { fontSize: 21 },
        }}
        autoFocus={this.props.isMobile}
        onKeyUp={this.props.onKeyUp}
      />
    )
  }
  renderItemMobile() {
    return (
      <styles.ulDivOutSide>
        <styles.ulAutocompleteMobile className="listbox" {...this.props.data.getListboxProps()}>
          <styles.ulDivInSideMobile>
            {this.props.data.groupedOptions.map((option: any, index: any) => (
              <li className="item" {...this.props.data.getOptionProps({ option, index })}>
                {(option.searchType == 'Country' ? <PublicIcon /> : <LocationIcon />)}
                {option.title}
              </li>
            ))}
          </styles.ulDivInSideMobile>
        </styles.ulAutocompleteMobile>
      </styles.ulDivOutSide>
    )
  }
  renderLoadingMobile() {
    return (
      <styles.ulDivOutSide>
        <styles.ulAutocompleteMobile className="listbox" >
          <styles.ulDivInSide>
            <li className="load">
              <styles.Skeleton height={29} width="30%" animation="wave" />
              <styles.Skeleton height={29} width="100%" animation="wave" />
            </li>
          </styles.ulDivInSide>
        </styles.ulAutocompleteMobile>
      </styles.ulDivOutSide>
    )
  }
  renderNotfindMobile() {
    return (
      <styles.ulDivOutSide>
        <styles.ulAutocompleteMobile className="listbox">
          <styles.ulDivInSide>
            <li className="load">
              <Label>ไม่พบข้อมูล</Label>
            </li>
          </styles.ulDivInSide>
        </styles.ulAutocompleteMobile>
      </styles.ulDivOutSide>
    )
  }

  render() {
    return (
      <div {...this.props.data.getRootProps()}>
        {(this.props.isMobile ? this.renderInputMobile() : this.renderInput())}
        {/* {this.renderInput()} */}
        {this.props.data.groupedOptions.length > 0 ? (
          this.props.isMobile ? this.renderItemMobile() : this.renderItem()
        ) : null}
        {
          (this.props.data.inputValue.length > 2
            && this.props.data.groupedOptions.length == 0
            && this.props.notfind == false
            && this.props.data.focused)
            && this.props.loading == true
            ? (
              this.props.renderLoading ? this.props.renderLoading() :
                this.props.isMobile ? this.renderLoadingMobile() : this.renderLoading()
            ) : null
        }
        {
          (this.props.data.groupedOptions.length == 0
            && this.props.data.focused)
            && this.props.notfind == true
            ? (
              this.props.renderNotfind ? this.props.renderNotfind() :
                this.props.isMobile ? this.renderNotfindMobile() : this.renderNotfind()
            ) : null
        }
      </div>
    )
  }
}

const styles = {
  TextField: styled(TextField)`
    background: white;
    border-radius: 4px;
    width: 100%;
    input {
      padding: 11px 25px 11px 11px;
    }
  `,
  ulDiv: styled.div`
    font-size: 21px !important;
    color: #440099;
    position: relative;
    width: 100%;
  `,
  ulDivOutSide: styled.div`
    font-size: 21px !important;
    color: #440099;
    position: relative;
    width: 100%;
    border-radius: 5px;
  `,
  ulDivInSide: styled.div`
    max-height: 260px;
    overflow: auto;
    border-radius: 5px;
    ::-webkit-scrollbar{
      border-radius: 5px;
      width: 6px;
    }
    ::-webkit-scrollbar-thumb{
      background-color: #440099;
      border: 1px solid #420999;
      border-radius: 5px;
    }
  `,
  startTextField: styled.div`
    font-size: 21px !important;
    color: #dddddd;
    display: flex;
    align-items: center;
  `,
  ulAutocomplete: styled.ul`
    width: 100%;
    border-radius: 4px;
    margin: 0;
    padding: 0;
    z-index: 1;
    position: absolute;
    list-style: none;
    background-color: white
    overflow: auto;
    margin-top: 12px;
    box-shadow: 0 3px 12px 1px rgba(0,0,0,0.26);
    ::before {
      border-bottom-color: #ffff !important;
      border-width: 12px !important;
      margin-top: -12px;
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 5%;
      top: -12px;
      border: solid transparent;
    }
    li.item:active {
      background-color: #440099;
      color: white;
      cursor:pointer
    }
    li.load {
      background-color: white;
      padding: 8px 15px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    li.item {
      background-color: white;
      display: flex;
      padding: 8px 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor:pointer;
    }
    li.item:hover {
      background-color: #440099;
      color: white;
      cursor: pointer
    }
    li.item svg {
      margin-right: 5px;
    }
  `,
  TextFieldMobile: styled(TextField)`
    background: white;
    border-radius: 4px;
    width: 100%;
    input {
      padding: 10px 25px 10px 15px;
    }
  `,
  ulAutocompleteMobile: styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 1;
    position: absolute;
    list-style: none;
    background-color: white
    overflow: auto;
    margin-top:11px;
    
    li.item:active {
      background-color: #2977f5;
      color: white;
      cursor:pointer
    }
    li.load {
      background-color: white;
      padding: 8px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      // border-bottom: 1px solid #c1c1c1;
    }
    li.item {
      background-color: white;
      display: flex;
      // padding: 8px 10px;
      padding: 10px 10px 10px 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor:pointer;
      border-bottom: 1px solid #c1c1c1;
    }
    li.item:hover {
      background-color: #2977f5;
      color: white;
      cursor: pointer
    }
    li.item svg {
      margin-right: 5px;
    }
  `,
  ulDivInSideMobile: styled.div`
    overflow: auto;
  `,
  Skeleton: styled(Skeleton)`
    padding: 0;
  `,
}

export default withHooksHOC(AutoCompleteComponent);