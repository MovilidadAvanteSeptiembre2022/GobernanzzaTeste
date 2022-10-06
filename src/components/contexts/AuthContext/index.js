import React, { createContext, useContext } from "react";



export const AuthContext = createContext();

export function AuthContextProvider(props) {

  return (
    <>
    </>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
