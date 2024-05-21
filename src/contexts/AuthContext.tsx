import React, { ReactNode, createContext } from "react";

interface IPropsContext {
  name: string;
}

interface IPropsContextProvider {
  children: ReactNode;
}

export const authContext = createContext<IPropsContext>({} as IPropsContext);

const AuthContextProvider = ({ children }: IPropsContextProvider): React.JSX.Element => {
  return (
    <authContext.Provider value={{ name: "Dunha" }}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
