import React from "react"
import { Button, ButtonProps, Image, Stack, Text } from "@chakra-ui/react"

import img from "./back.svg"
import { t } from "../../../modules/strings"

import { useEnvironment } from "../../../modules/environments"

export const GoBack: React.FC<ButtonProps> = (props) => {
  const { goBack } = useEnvironment()

  return (
    <Button variant="ghost" {...props} onClick={() => goBack()} >
      <Stack direction="row" spacing="12px" align="center">
        <Image src={img} />
        <Text size="sm">{ t("QWcB94") }</Text>
      </Stack>  
    </Button>
  )
}