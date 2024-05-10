import React from "react";
import { Container, Content, Title } from "./styles";
import InputText from "../../components/form/InputText";
import { ScrollView } from "react-native";
import Button from "../../components/form/Button";

const Signup = (): React.JSX.Element => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Content>
          <Title>Crie sua Conta</Title>
          <InputText placeholder="Nome Completo" />
          <InputText placeholder="Email" />
          <InputText placeholder="Senha" />
          <Button text="Criar conta" />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Signup;
