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
import { ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import Button from "../../components/form/Button";
import ImgLogo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api/api";

interface NavigationProps {
  navigate(screen: string): void;
}

interface IFormFields {
  token?: string;
  password?: string;
  password_confirmation?: string;
}

const formSchema = yup.object({
  token: yup.string().required("Código obrigatório"),
  password: yup.string().required("senha obrigatória"),
  password_confirmation: yup
    .string()
    .required("Confirmação obrigatória")
    .oneOf([yup.ref("password")], "Confirmação diferente da senha"),
});

const ResetPassword = (): React.JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver<IFormFields>(formSchema),
  });
  const { navigate } = useNavigation<NavigationProps>();

  const handleResetPassword = async ({
    token,
    password,
    password_confirmation,
  }: IFormFields): Promise<void> => {
    const data = {
      token,
      password,
      password_confirmation,
    };
    try {
      await api.post("password/reset", data);
      Alert.alert(
        "Senha alterada",
        "Sua senha foi alterada com sucesso, faça o login novamente",
      );
      navigate("Signin");
    } catch (e) {
      Alert.alert(
        "Erro ao cadastrar",
        "Houve um erro ao realiazar o cadastro, tente novamente",
      );
    }
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
            <Title>Insira o código e senha</Title>
            <InputControl
              placeholder="codigo"
              name="token"
              control={control}
              error={errors.token && errors.token.message}
            />
            <InputControl
              placeholder="Senha"
              name="password"
              control={control}
              error={errors.password && errors.password.message}
              secureTextEntry
            />
            <InputControl
              placeholder="Senha"
              name="password_confirmation"
              control={control}
              error={errors.password_confirmation && errors.password_confirmation.message}
              secureTextEntry
            />
            <Button text="Trocar senha" onPress={handleSubmit(handleResetPassword)} />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => navigate("Signin")}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Voltar para Login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
