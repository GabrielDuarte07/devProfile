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

type NavigationProps = {
  goBack: () => void;
};

interface IFormFields {
  name?: string;
  email?: string;
  password?: string;
}

const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail invalido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

const Signup = (): React.JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver<IFormFields>(formSchema),
  });
  const { goBack } = useNavigation<NavigationProps>();

  const handleSignUp = async ({ name, email, password }: IFormFields): Promise<void> => {
    const data = {
      name,
      email,
      password,
    };
    try {
      await api.post("users", data);
      Alert.alert("sucesso", "ok");
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
            <Title>Crie sua Conta</Title>
            <InputControl
              placeholder="Nome Completo"
              name="name"
              control={control}
              error={errors.name && errors.name.message}
            />
            <InputControl
              placeholder="Email"
              name="email"
              control={control}
              error={errors.email && errors.email.message}
            />
            <InputControl
              placeholder="Senha"
              name="password"
              control={control}
              error={errors.password && errors.password.message}
              secureTextEntry
            />
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
