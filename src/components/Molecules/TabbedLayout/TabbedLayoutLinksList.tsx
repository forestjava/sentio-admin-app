import React from "react"
import { Stack } from "@chakra-ui/react";

export const TabbedLayoutLinksList: React.FC = ({ children }) => (
  <Stack direction="column" padding="10px 18px 10px 22px" align="stretch">
      { children }
  </Stack>
)
