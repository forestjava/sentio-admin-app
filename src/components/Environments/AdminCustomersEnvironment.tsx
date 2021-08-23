import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { AdminCustomersAdd } from "../Pages/AdminCustomersAdd" 
//import { AdminCustomersEdit } from "../Organisms/AdminCustomersEdit" 
import { AdminCustomersList } from "../Pages/AdminCustomersList" 

export const AdminCustomersEnvironment = () => {
  const { path, url } = useRouteMatch();

  return (            
    <Switch>
      <Route exact path={`${path}/add`}>
          <AdminCustomersList />
          <AdminCustomersAdd />
      </Route>
      <Route exact path={`${path}/:customerId`}>
        {/* 
        <AdminCustomersList />
        <AdminCustomersEdit /> 
        */}
      </Route>
      {/* default */}
      <Route exact path={path}>
          <AdminCustomersList />
      </Route>
  </Switch>
)
}