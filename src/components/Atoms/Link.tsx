import React from "react"
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom"

export type LinkProps = ChakraLinkProps & RouterLinkProps;

export const Link = (props: LinkProps) => (
    <ChakraLink as={RouterLink} {...props} />
)
