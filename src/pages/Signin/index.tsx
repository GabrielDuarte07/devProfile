import React from "react";
import {
  Container,
  Content,
  Title,
  Logo,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  CreateAccount,
  CreateAccountTitle,
  Icon,
} from "./styles";
import InputText from "../../components/form/InputText";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Button from "../../components/form/Button";
import ImgLogo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = {
  navigate: (screen: string) => void;
};

const Signin = (): React.JSX.Element => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Content>
            <Logo source={ImgLogo} />
            <Title>Faça seu logon</Title>
            <InputText placeholder="Email" />
            <InputText placeholder="Senha" />
            <Button text="Entrar" />
            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha Senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount onPress={() => navigate("Signup")}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};

export default Signin;
