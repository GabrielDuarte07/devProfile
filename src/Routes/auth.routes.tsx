import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgottenPassword from "../pages/ForgottenPassword";

const Stack = createNativeStackNavigator();

const AuthRoutes = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={Signin}></Stack.Screen>
      <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
      <Stack.Screen name="ForgottenPassword" component={ForgottenPassword}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthRoutes;
