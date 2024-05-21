import React, { ReactNode, createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import api from "../services/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../interfaces/IUser";

interface PropsContext {
  user: IUser;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
}

interface PropsContextProvider {
  children: ReactNode;
}

interface PropsStateContext {
  token: string;
  user: IUser;
}

export const authContext = createContext<PropsContext>({} as PropsContext);

const tokenKey = "@DevProfile:token";
const userKey = "@DevProfile:user";

const AuthContextProvider = ({ children }: PropsContextProvider): React.JSX.Element => {
  const [data, setData] = useState<PropsStateContext>({} as PropsStateContext);

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const response = await api.post("auth", { email, password });
      const { data, status } = response;
      if (status >= 400) {
        Alert.alert("Erro de login", data.error);
        return;
      }

      const user = {
        id: Number(data.user.id),
        name: data.user.name,
        email: data.user.email,
        avatar_url: data.user.avatar,
      };

      await AsyncStorage.setItem(tokenKey, data.token);
      await AsyncStorage.setItem(userKey, JSON.stringify(user));
      setData({ token: data.token, user });
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Erro no app, contate o suporte");
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem(tokenKey);
    await AsyncStorage.removeItem(userKey);
    setData({} as PropsStateContext);
  };

  useEffect(() => {
    async function checkUserLogged() {
      const token = await AsyncStorage.getItem(tokenKey);
      const user = await AsyncStorage.getItem(userKey);

      if (token && user) {
        setData({ token, user: JSON.parse(user) });
      }
    }

    checkUserLogged();
  }, []);

  return (
    <authContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
