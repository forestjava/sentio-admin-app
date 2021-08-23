import React from "react"
import { Box, Stack, Heading, Text, Flex, Spacer, Button } from "@chakra-ui/react"

import * as Stores from "../../modules/Stores"
import { useObservableStore } from "../../modules/useObservableStore"
import { Tenant } from "../../modules/Types";

import { useEnvironment } from "../../modules/environments";
import { AdminTenantProfile } from "../Organisms/AdminTenantProfile";

export const AdminTenantsCreate = () => {

  const store = useObservableStore(Stores.Tenants)
  const [ tenant ] = React.useState(new Tenant())

  const { goBack, goInstead } = useEnvironment()

  // create handler
  const create = () => {
    // create in storage just for debug
    tenant.id = (store.data.length + 1).toString().padStart(4, "0") // just for demonstration goals
    store.data.push(tenant)
    goInstead(tenant.id) // or, goBack() to return to the list
  }

  // cancel handler
  const cancel = () => {
    goBack()
  }

  return (
    <Stack direction="column" spacing="30px" minWidth="600px">

      <Box>
        <Heading as="h1" size="md">Create tenant</Heading>
        <Text>All fields are required</Text>
      </Box>

      <AdminTenantProfile tenant={tenant} >
        <Flex width="100%">
          <Button onClick={() => cancel()} variant="outline">Cancel</Button>
          <Spacer />
          <Button onClick={() => create()}>Create tenant</Button>
        </Flex>
      </AdminTenantProfile>

  
    </Stack>
  )
}
