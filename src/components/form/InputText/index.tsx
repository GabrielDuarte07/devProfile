import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";
import theme from "../../../global/styles/theme";

const InputText = ({ ...textInputProps }: TextInputProps): React.JSX.Element => {
  return <Container {...textInputProps} placeholderTextColor={theme.colors.grey500} />;
};

export default InputText;
