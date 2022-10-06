import React from "react";

import { Route, Redirect } from "react-router-dom";
import { reverseURL } from "components/app/Router/utils";

import { useAuth } from "components/contexts/AuthContext";

export default function AuthToHome({ children, ...rest }) {
  const { userTokens } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userTokens ? (
          <Redirect
            to={{
              pathname: reverseURL({ name: "home" }),
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
