import React from "react";
import { Container, Content, Title, Logo } from "./styles";
import InputText from "../../components/form/InputText";
import { ScrollView } from "react-native";
import Button from "../../components/form/Button";
import ImgLogo from "../../../assets/logo.png";

const Signin = (): React.JSX.Element => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Content>
          <Logo source={ImgLogo} />
          <Title>Faça seu logon</Title>
          <InputText placeholder="Email" />
          <InputText placeholder="Senha" />
          <Button text="Entrar" />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Signin;
