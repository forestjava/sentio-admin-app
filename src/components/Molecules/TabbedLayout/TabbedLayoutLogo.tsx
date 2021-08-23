import React from "react"
import { HasIcon } from "./types";

import { Stack, Image, Box } from "@chakra-ui/react";

export const TabbedLayoutLogo: React.FC<HasIcon> = ({ icon, children }) => (
  <Stack direction="row" padding="18px 30px" spacing="8px" fontSize="xl" color="brand.base" >
      <Image src={icon} />
      <Box>{ children }</Box>
  </Stack>
)
