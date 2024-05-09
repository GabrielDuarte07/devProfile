import React, { useEffect } from "react";
import Home from "./src/pages/Home";
import { ThemeProvider } from "styled-components/native";
import AppTheme from "./src/global/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App(): React.JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) return <></>;

  return (
    <ThemeProvider theme={AppTheme}>
      <Home></Home>
    </ThemeProvider>
  );
}
