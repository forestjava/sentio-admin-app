import React from "react"

import { TabbedLayout } from "../Templates/TabbedLayout";
import { TabbedLayoutLogo, TabbedLayoutLinksList, TabbedLayoutLink } from "../Molecules/TabbedLayout";
import icons from "./icons";

import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { AdminTenantsEnvironment } from "./AdminTenantsEnvironment";
import { AdminBotEnvironment } from "./AdminBotEnvironment";
import { AdminCustomersEnvironment } from "./AdminCustomersEnvironment";

export const AdminEnvironment = () => {
    const { path, url } = useRouteMatch();

    return (
        <TabbedLayout
            logo={
                <TabbedLayoutLogo icon={icons.admin} >SentioAdmin</TabbedLayoutLogo>
            }
            tabs={
                <TabbedLayoutLinksList>
                    <TabbedLayoutLink icon={icons.adminTenants} to={`${path}/tenants`}>Tenant administration</TabbedLayoutLink>
                    <TabbedLayoutLink icon={icons.adminBot} to={`${path}/bot`}>Bot configuration</TabbedLayoutLink>
                    <TabbedLayoutLink icon={icons.adminCustomers} to={`${path}/customers`}>Customer management</TabbedLayoutLink>
                </TabbedLayoutLinksList>
            }
        >    
            <Switch>
                <Route path={`${path}/tenants`}>
                    <AdminTenantsEnvironment />
                </Route>
                <Route path={`${path}/bot`}>
                    <AdminBotEnvironment />
                </Route>
                <Route path={`${path}/customers`}>
                    <AdminCustomersEnvironment />
                </Route>
                {/* default */}
                <Route exact path={path}>
                    <Redirect to={`${path}/tenants`} />
                </Route>
            </Switch>
        </TabbedLayout>
    )    
}
