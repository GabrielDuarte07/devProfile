import React, { useEffect } from "react";
// import Home from "./src/pages/Home";
//import Signin from "./src/pages/Signin";
import { ThemeProvider } from "styled-components/native";
import AppTheme from "./src/global/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes/index.routes";
import AuthContextProvider from "./src/contexts/AuthContext";
import { StatusBar } from "react-native";

preventAutoHideAsync();

export default function App(): React.JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) return <></>;

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <ThemeProvider theme={AppTheme}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
