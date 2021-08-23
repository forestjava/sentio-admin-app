import React from "react"
import { Button, ButtonProps, Image, } from "@chakra-ui/react"
import img from "./delete.svg"

export const RemoveButton: React.FC<ButtonProps> = (props) => (
  <Button variant="ghost" {...props} >
    <Image src={img} />
  </Button>
)
