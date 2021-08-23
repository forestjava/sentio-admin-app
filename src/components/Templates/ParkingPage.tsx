import React from "react"
import { BrandedFormLayout } from "../Templates/BrandedFormLayout";
import { DiceusLogo } from "../Molecules/Logos"
import { Divider, VStack } from "@chakra-ui/react"
import { Link } from "../Atoms/Link"

export const ParkingPage = () => (
  <BrandedFormLayout heading="Sentio CX project stage">
    <VStack>
      <DiceusLogo />
      <Divider orientation="horizontal" />
      <Link to="/login">Sentio common login page</Link>
      <Link to="/admin">Sentio Admin page</Link>
      <Link to="/manager">Sentio Manager page</Link>
      <Link to="/agent">Sentio Agent page</Link>
    </VStack>
  </BrandedFormLayout>
)