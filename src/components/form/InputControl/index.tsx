import React from "react";
import { TextInputProps } from "react-native";
import { Container, Error } from "./styles";
import { Control, Controller } from "react-hook-form";
import InputText from "../InputText";

interface InputControlProps extends TextInputProps {
  name: string;
  control: Control;
  error?: string;
}

const InputControl = ({
  error,
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
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputControl;
