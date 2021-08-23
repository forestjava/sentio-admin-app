import React from "react"
import { Text } from "@chakra-ui/react";

export const ErrorLabel: React.FC = ({ children }) => (
    <Text color="brand.danger" fontSize="sm" >{ children }</Text>
)