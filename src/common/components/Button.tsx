import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Btn, { ButtonProps, ButtonClassKey } from "@material-ui/core/Button";
import FontManager from "common/Manager/FontManager";
import ColorManager from "common/Manager/ColorManager";

interface Styles extends Partial<Record<ButtonClassKey, string>> {
}

interface BtnProps extends ButtonProps {
  classes: Styles;
}

type Root = {
  background?: string;
  fontFamily?: string;
  fontSize?: string;
  width?: string | number;
  textcolor?: string;
  height?: string | number;
  padding?: string | number;
};

export const Button = withStyles({
  root: (props: Root) => ({
    background: props.background || ColorManager.default.primaryColor,
    borderRadius: 4,
    boxShadow: "unset",
    border: 0,
    color: props.textcolor || ColorManager.default.white,
    width: props.width || "100%",
    height: props.height || 45,
    padding: props.padding || "0 30px",
    '&:hover': {
      backgroundColor: ColorManager.default.secondaryColor,
      borderColor: ColorManager.default.secondaryColor,
      boxShadow: 'none',
    },
  }),
  label: (props: Root) => ({
    fontFamily: props.fontFamily || FontManager.default.primaryFont,
    fontSize: props.fontSize || FontManager.default.text,
  }),
  outlined: (props: Root) => ({
    borderRadius: '4px',
    background: props.background || ColorManager.default.transparent,
    color: props.textcolor || ColorManager.default.secondaryColor,
    fontFamily: props.fontFamily || FontManager.default.secondaryFont,
    fontSize: props.fontSize || FontManager.default.text,
    fontWeight: 'normal',
    border: `2px solid ${props.background || ColorManager.default.secondaryColor}`,
    '&:hover': {
      color: props.textcolor || ColorManager.default.white,
      borderColor: props.background || ColorManager.default.secondaryColor,
    }
  })
})(({ classes, ...props }: BtnProps) => {
  return (
    <Btn classes={{ root: classes.root, label: classes.label, outlined: classes.outlined }} {...props} />
  );
});
