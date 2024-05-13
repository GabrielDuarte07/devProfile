import React, { useEffect } from "react";
// import Home from "./src/pages/Home";
//import Signin from "./src/pages/Signin";
import { ThemeProvider } from "styled-components/native";
import AppTheme from "./src/global/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes/index.routes";

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
      <ThemeProvider theme={AppTheme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
