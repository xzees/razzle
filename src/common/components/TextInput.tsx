import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputBase, {
  InputBaseClassKey,
  InputBaseProps,
} from "@material-ui/core/InputBase";
import FontManager from "common/Manager/FontManager";
import ColorManager from "common/Manager/ColorManager";

interface Styles extends Partial<Record<InputBaseClassKey, string>> {}

interface Input extends InputBaseProps {
  classes: Styles;
}

type Root = {
  fontfamily?: string;
  fontsize?: string;
  width?: string | number;
  bordercolor?: string;
  height?: string | number;
  padding?: string | number;
  borderRadius?: number;
};

export const TextInput = withStyles({
  root: (props: Root) => ({
    width: props.width || "100%",
    height: props.height || 45,
    border: `1px solid ${props.bordercolor || ColorManager.default.black}`,
    padding: props.padding || "10px 12px",
    borderRadius: props.borderRadius || 4,
  }),
  input: (props: Root) => ({
    fontFamily: props.fontfamily || FontManager.default.primaryFont,
    fontSize: props.fontsize || FontManager.default.text,
  }),
})(({ classes, ...props }: Input) => {
  return (
    <>
      <InputBase
        classes={{ root: classes.root, input: classes.input }}
        {...props}
      />
    </>
  );
});
