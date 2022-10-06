import React from "react";
import { Switch, HashRouter } from "react-router-dom";
import { authR, protectedR, publicR } from "./routes";
import ScrollToTop from "./routes/validators/ScrollToTop";
import {
  createRoutesAuth,
  createRoutesProtected,
  createRoutesPublic,
} from "./routes/validators/routeGenerators";

// import NotFound from "components/NotFound";

function AppRouter() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        {createRoutesProtected(protectedR)}
        {createRoutesAuth(authR)}
        {createRoutesPublic(publicR)}
      </Switch>
    </HashRouter>
  );
}

export default AppRouter;
