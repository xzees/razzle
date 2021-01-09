import React from "react";
import {
  Dialog,
  Box,
  Slide,
  IconButton,
  InputLabel,
  Grow,
  Grid,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { TransitionProps } from "@material-ui/core/transitions";
import { inject, observer } from "mobx-react";
import FontManager from "common/Manager/FontManager";
import ColorManager from "common/Manager/ColorManager";
import RootStore from "stores";
import { TextInput } from "common/components/TextInput";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import Skeleton from "@material-ui/lab/Skeleton";

type Props = {
  stores?: RootStore;
  onTextChange?: (event: any) => void;
  title?: string;
  children: any;
  fullscreen?: boolean;
  data: any[];
  textvalue?: string;
  placeholder?: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction={"up"} ref={ref} {...props} />;
});

const Modal = inject("stores")(
  observer((props: Props) => {
    const { fullscreen, children, data, textvalue, placeholder } = props;
    const title = props.title || "Title";
    return (
      <>
        <Dialog
          open={props.stores!.UIStore.openModal}
          TransitionComponent={Transition}
          style={{ zIndex: 99999 }}
          fullScreen={fullscreen ? true : false}
        >
          <Box
            pl={4}
            display="flex"
            style={{ backgroundColor: ColorManager.default.primaryColor }}
          >
            <Box flexGrow={1} alignSelf="center">
              <InputLabel
                style={{
                  fontSize: FontManager.default.extraLarge,
                  fontFamily: FontManager.default.secondaryFont,
                  color: ColorManager.default.white,
                }}
              >
                {title}
              </InputLabel>
            </Box>
            <Box onClick={() => props.stores!.UIStore.OnModalClose()}>
              <IconButton aria-label="close">
                <KeyboardArrowDownIcon
                  fontSize="large"
                  htmlColor={ColorManager.default.white}
                />
              </IconButton>
            </Box>
          </Box>
          <Box p={4}>
            <TextInput
              onChange={props.onTextChange}
              onClick={() => props.stores!.UIStore.OnTextClick()}
              placeholder={placeholder}
              value={textvalue}
              endAdornment={
                textvalue !== "" ? (
                  <IconButton
                    aria-label="clear"
                    // onClick={() =>
                    //   props.stores?.PackageRootStore.DestinationStores.ClearText()
                    // }
                  >
                    <HighlightOffRoundedIcon
                      htmlColor={ColorManager.default.black}
                    />
                  </IconButton>
                ) : undefined
              }
            ></TextInput>
            <Box mt={6}>
              <Grow in={props.stores!.UIStore.openText}>
                {data.length > 0 ? (
                  children ? (
                    children
                  ) : undefined
                ) : textvalue === "" ? (
                  <Grid container>
                    <Grid item xs={12}></Grid>
                  </Grid>
                ) : (
                  <Grid container>
                    <Grid item xs={12}>
                      <Skeleton animation="wave" style={{ height: "50px" }} />
                      <Skeleton animation="wave" style={{ height: "50px" }} />
                      <Skeleton animation="wave" style={{ height: "50px" }} />
                    </Grid>
                  </Grid>
                )}
              </Grow>
            </Box>
          </Box>
        </Dialog>
      </>
    );
  })
);

export default Modal;
