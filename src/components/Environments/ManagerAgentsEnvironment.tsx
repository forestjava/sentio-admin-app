import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { ManagerAgentsAdd } from "../Pages/ManagerAgentsAdd"
import { ManagerAgentsEdit } from "../Pages/ManagerAgentsEdit" 
import { ManagerAgentsList } from "../Pages/ManagerAgentsList" 

export const ManagerAgentsEnvironment = () => {
  const { path, url } = useRouteMatch();

  return (            
    <Switch>
      <Route exact path={`${path}/add`}>
        <ManagerAgentsList />
        <ManagerAgentsAdd />
      </Route>
      <Route exact path={`${path}/:agentId`}>
        <ManagerAgentsEdit />
      </Route>
      {/* default */}
      <Route exact path={path}>
        <ManagerAgentsList />
      </Route>
  </Switch>
)
}