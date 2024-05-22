import React, { useState } from "react";
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
  navigate: (screen: string) => void;
};

interface IFormFields {
  email?: string;
}

const formSchema = yup.object({
  email: yup.string().email("E-mail invalido").required("E-mail obrigatório"),
});

const ForgottenPassword = (): React.JSX.Element => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver<IFormFields>(formSchema),
  });
  const { goBack, navigate } = useNavigation<NavigationProps>();

  const handleForgottenPassword = async ({ email }: IFormFields): Promise<void> => {
    setLoading(true);
    const data = {
      email,
    };
    try {
      await api.post("password/forgotten", data);
      Alert.alert("E-mail enviado", "E-mail de mudança de senha enviado com sucesso");
      navigate("ResetPassword");
    } catch (e) {
      Alert.alert("Erro ao registrar", "Houve um erro ao mandar e-mail para nova senha");
    } finally {
      setLoading(false);
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
            <Title>Recupere sua senha</Title>

            <InputControl
              placeholder="Email"
              name="email"
              control={control}
              error={errors.email && errors.email.message}
            />

            <Button
              text="Enviar e-mail"
              onPress={handleSubmit(handleForgottenPassword)}
              disabled={loading}
            />
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

export default ForgottenPassword;
