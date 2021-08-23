import React from "react"
import { Switch, Route } from "react-router-dom";

import { ParkingPage } from "../Templates/ParkingPage"
import { ResetPasswordPage } from "../Pages/ResetPasswordPage";

import { LoginEnvironment } from "../Environments/LoginEnvironment"
import { ManagerEnvironment } from "../Environments/ManagerEnvironment";
import { AdminEnvironment } from "./AdminEnvironment";

export const AppEnvironment = () => (
  <Switch>
    <Route exact path="/">
      <ParkingPage />
    </Route>
    <Route path="/login">
      <LoginEnvironment />
    </Route>
    <Route path="/admin">
      <AdminEnvironment />
    </Route>
    <Route path="/manager">
      <ManagerEnvironment />
    </Route>
    <Route path="/agent">
      <p>TODO: Flutter agent</p>
    </Route>
    <Route path="/reset">
      <ResetPasswordPage />
    </Route>
  </Switch>
)