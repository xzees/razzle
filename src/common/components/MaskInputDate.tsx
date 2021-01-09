import React from "react";
import MaskedInput from "react-text-mask";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

export const MaskInputDate = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;
  const autoCorrectedDatePipe = createAutoCorrectedDatePipe("dd/mm/yyyy");
  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", "2", "5", /\d/, /\d/]}
      placeholderChar={"\u2000"}
      pipe={autoCorrectedDatePipe}
    />
  );
};
