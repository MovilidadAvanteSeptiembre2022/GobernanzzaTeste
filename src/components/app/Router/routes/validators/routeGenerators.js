import React from "react";
import { Route } from "react-router-dom";

import AuthToHome from "./AuthToHome";
import AuthToLogin from "./AuthToLogin";

export function createRoutesAuth(authR) {
  return authR.map((route, i) => {
    return (
      <AuthToHome exact path={route.route} key={i}>
        <route.component />
      </AuthToHome>
    );
  });
}
export function createRoutesProtected(protectedR, pathprefix = null) {
  return protectedR.map((route, i) => {
    const path = pathprefix ? `${pathprefix}${route.route}` : route.route;
    return (
      <AuthToLogin roles={route.roles} exact={route.exact} path={path} key={i}>
        <route.component />
      </AuthToLogin>
    );
  });
}

export function createRoutesPublic(publicR) {
  return publicR.map((route, i) => {
    return (
      <Route exact path={route.route} key={i}>
        <route.component />
      </Route>
    );
  });
}
