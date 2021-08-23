import React from "react"
import { HasIcon } from "./types";

import { Stack, Image, Box } from "@chakra-ui/react";
import { Link, LinkProps } from "../../Atoms/Link"
import { useLocation } from "react-router";

interface StringLocator {
  to: string
}

export const TabbedLayoutLink: React.FC<HasIcon & LinkProps & StringLocator> = ({ to, icon, children }) => {
  const current = useLocation().pathname.startsWith(to)
  return (
      <Link to={to} bg={current? "#ECF1F3": "" }>
          <Stack direction="row" minHeight="36px" padding="4px" spacing="8px" align="center">
              <Image src={icon} />
              <Box>{ children }</Box>
          </Stack>
      </Link>
  )
}
