import React from "react"
import { Stack } from "@chakra-ui/react";

interface TabbedLayoutProps {
    logo: React.ReactNode
    tabs: React.ReactNode
    children: React.ReactNode
}

export const TabbedLayout: React.FC<TabbedLayoutProps> = ({ logo, tabs, children }) => (
    <Stack direction="row" minHeight="100vh" width="100%" >
        <Stack direction="column" width="285px" align="stretch" padding="0" background="#F7F9FA">
            { logo }
            { tabs }
        </Stack>    
        <Stack direction="column" width="auto" align="start" padding="60px">
            { children }
        </Stack>    
    </Stack>    
)
