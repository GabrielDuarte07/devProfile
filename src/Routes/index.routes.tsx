import React, { useContext } from "react";
import AuthRoutes from "./auth.routes";
import { authContext } from "../contexts/AuthContext";
import AppRoutes from "./app.routes";

const Routes = (): React.JSX.Element => {
  const { user } = useContext(authContext);
  return user?.id ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
