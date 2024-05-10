import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps): React.JSX.Element => {
  return (
    <Container {...rest}>
      <Title>{text}</Title>
    </Container>
  );
};

export default Button;
