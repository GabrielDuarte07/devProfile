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
import InputControl from "../../components/form/InputControl";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Button from "../../components/form/Button";
import ImgLogo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { useForm, FieldValues } from "react-hook-form";

type NavigationProps = {
  goBack: () => void;
};

interface IFormFields extends FieldValues {
  name?: string;
  email?: string;
  password?: string;
}

const Signup = (): React.JSX.Element => {
  const { control, handleSubmit } = useForm<IFormFields>();
  const { goBack } = useNavigation<NavigationProps>();

  const handleSignUp = ({ name, email, password }: IFormFields): void => {
    console.log(name, email, password);
  };

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
            <InputControl placeholder="Nome Completo" name="name" control={control} />
            <InputControl placeholder="Email" name="email" control={control} />
            <InputControl placeholder="Senha" name="password" control={control} />
            <Button text="Criar conta" onPress={handleSubmit(handleSignUp)} />
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
