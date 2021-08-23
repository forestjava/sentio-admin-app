import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { AdminTenantsCreate } from "../Pages/AdminTenantsCreate" 
import { AdminTenantsEdit } from "../Pages/AdminTenantsEdit" 
import { AdminTenantsList } from "../Pages/AdminTenantsList" 

export const AdminTenantsEnvironment = () => {
  const { path, url } = useRouteMatch();

  return (            
    <Switch>
      <Route exact path={`${path}/create`}>
          <AdminTenantsCreate />
      </Route>
      <Route exact path={`${path}/:tenantId`}>
          <AdminTenantsEdit />
      </Route>
      {/* default */}
      <Route exact path={path}>
          <AdminTenantsList />
      </Route>
  </Switch>
)
}