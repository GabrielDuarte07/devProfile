import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Stack = createNativeStackNavigator();

const AuthRoutes = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Singin" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Singin" component={Signin}></Stack.Screen>
      <Stack.Screen name="Singup" component={Signup}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthRoutes;
