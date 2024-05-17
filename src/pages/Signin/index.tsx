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
import InputControl from "../../components/form/InputControl";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Button from "../../components/form/Button";
import ImgLogo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import {} from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type NavigationProps = {
  navigate: (screen: string) => void;
};

interface IFormFields {
  email?: string;
  password?: string;
}

const formSchema = yup.object({
  email: yup.string().email("Email invalido").required("Email obrigatorio"),
  password: yup.string().required("senha obrigatoria"),
});

const Signin = (): React.JSX.Element => {
  const { navigate } = useNavigation<NavigationProps>();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver<IFormFields>(formSchema),
  });

  const handleSignIn = ({ email, password }: IFormFields): void => {
    console.log(email, password);
  };

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
            <InputControl
              placeholder="Email"
              name="email"
              control={control}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              error={errors.email && errors.email.message}
            />
            <InputControl
              placeholder="Senha"
              name="password"
              control={control}
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <Button text="Entrar" onPress={handleSubmit(handleSignIn)} />
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
