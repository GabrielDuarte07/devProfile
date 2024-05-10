import React from "react";
import { Container, Content, Title } from "./styles";
import InputText from "../../components/form/InputText";
import { ScrollView } from "react-native";

const Signin = (): React.JSX.Element => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Content>
          <Title>Faça seu logon</Title>
          <InputText placeholder="Email" />
          <InputText placeholder="Senha" />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Signin;
