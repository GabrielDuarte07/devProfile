import React, { ReactNode, createContext } from "react";
import { Alert } from "react-native";
import api from "../services/api/api";

interface IPropsContext {
  name: string;
  signIn(email: string, password: string): Promise<void>;
}

interface IPropsContextProvider {
  children: ReactNode;
}

export const authContext = createContext<IPropsContext>({} as IPropsContext);

const AuthContextProvider = ({ children }: IPropsContextProvider): React.JSX.Element => {
  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const response = await api.post("auth", { email, password });
      const { data, status } = response;
      if (status >= 400) {
        Alert.alert("Erro de login", data.error);
        return;
      }
      Alert.alert("sucesso", "login valido");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Erro no app, contate o suporte");
    }
  };
  return (
    <authContext.Provider value={{ name: "Dunha", signIn }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
