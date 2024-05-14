import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { Control, Controller } from "react-hook-form";
import InputText from "../InputText";

interface InputControlProps extends TextInputProps {
  name: string;
  control: Control;
}

const InputControl = ({
  name,
  control,
  ...others
}: InputControlProps): React.JSX.Element => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputText onChangeText={onChange} value={value} {...others} />
        )}
        name={name}
      />
    </Container>
  );
};

export default InputControl;
