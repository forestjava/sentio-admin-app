import React from "react"
import { Image, Tooltip } from "@chakra-ui/react"

import img from "./info.svg"

export const Info: React.FC = ({ children }) => (
  <Tooltip label={children}>
    <Image display="inline" src={img} px="8px" />
  </Tooltip>
)
