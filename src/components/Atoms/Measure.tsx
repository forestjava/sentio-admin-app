import React from "react"
import { Text } from "@chakra-ui/react"

export const Measure: React.FC = ({ children }) => (
  <Text as="span" size="sm" fontWeight="normal" >{ children }</Text>
)