import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ConfirmPage } from "../Pages/ConfirmPage";
import { LoginPage } from "../Pages/LoginPage";

export const LoginEnvironment = () => {
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <LoginPage />
      </Route>
      <Route exact path={`${path}/confirm`}>
        <ConfirmPage />
      </Route>
    </Switch>
  )
}