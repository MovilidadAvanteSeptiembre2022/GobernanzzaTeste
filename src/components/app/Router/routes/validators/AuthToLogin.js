import React from "react";

import { Route, Redirect } from "react-router-dom";

import { reverseURL } from "components/app/Router/utils";
import { useAuth } from "components/contexts/AuthContext";

export default function AuthToLogin({ children, roles, ...rest }) {
  const { userTokens } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const RedirectLogin = () => (
          <Redirect
            to={{
              pathname: reverseURL({ name: "login" }),
              state: { from: location },
            }}
          />
        );
        if (!userTokens) return <RedirectLogin />;
        return children;
      }}
    />
  );
}
