import React from "react";
import {
  Container,
  Content,
  Logo,
  Title,
  BackToSignIn,
  BackToSignInTitle,
  Icon,
} from "./styles";
import InputText from "../../components/form/InputText";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Button from "../../components/form/Button";
import ImgLogo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = {
  goBack: () => void;
};

const Signup = (): React.JSX.Element => {
  const { goBack } = useNavigation<NavigationProps>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Content>
            <Logo source={ImgLogo} />
            <Title>Crie sua Conta</Title>
            <InputText placeholder="Nome Completo" />
            <InputText placeholder="Email" />
            <InputText placeholder="Senha" />
            <Button text="Criar conta" />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para Login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};

export default Signup;
