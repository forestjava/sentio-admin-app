import React from "react"

import { TabbedLayout,  } from "../Templates/TabbedLayout";
import { TabbedLayoutLogo, TabbedLayoutLinksList, TabbedLayoutLink } from "../Molecules/TabbedLayout";

import icons from "./icons";

import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import { ManagerTenant } from "../Pages/ManagerTenant";
import { ManagerAgentsEnvironment } from "../Environments/ManagerAgentsEnvironment";
import { ManagerBotEnvironment } from "../Environments/ManagerBotEnvironment"

export const ManagerEnvironment = () => {
    const { path, url } = useRouteMatch();

    return (
        <TabbedLayout
            logo={
                <TabbedLayoutLogo icon={icons.manager} >SentioManager</TabbedLayoutLogo>
            }
            tabs={
                <TabbedLayoutLinksList>
                    <TabbedLayoutLink icon={icons.managerTenant} to={`${path}/tenant`}>Tenant admin</TabbedLayoutLink>
                    <TabbedLayoutLink icon={icons.managerAgents} to={`${path}/agents`}>Agent admin</TabbedLayoutLink>
                    <TabbedLayoutLink icon={icons.managerBot} to={`${path}/bot`}>Bot builder</TabbedLayoutLink>
                </TabbedLayoutLinksList>
            }
        >    
            <Switch>
                <Route path={`${path}/tenant`}>
                    <ManagerTenant />
                </Route>
                <Route path={`${path}/agents`}>
                    <ManagerAgentsEnvironment />
                </Route>
                <Route path={`${path}/bot`}>
                    <ManagerBotEnvironment />
                </Route>
                {/* default */}
                <Route exact path={path}>
                    <Redirect to={`${path}/tenant`} />
                </Route>
            </Switch>
        </TabbedLayout>
    )    
}
