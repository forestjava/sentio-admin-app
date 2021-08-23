import React from "react"
import { Stack, Heading, Text, Flex, Spacer, Button,
  Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"

import * as Stores from "../../modules/Stores"
import { useObservableStore } from "../../modules/useObservableStore"

import { Tenant } from "../../modules/Types";

import { useParams } from "react-router-dom";
import { useEnvironment } from "../../modules/environments";
import { GoBack } from "../Molecules/GoBack";

import { AdminTenantProfile } from "../Organisms/AdminTenantProfile";
import { AdminTenantManagers } from "../Organisms/AdminTenantManagers";
import { ErrorLabel } from "../Atoms/ErrorLabel";

type TParams = { tenantId: string };

export const AdminTenantsEdit = () => {

  const store = useObservableStore(Stores.Tenants)
  const { tenantId } = useParams<TParams>();
  
  const [ tenant ] = React.useState(store.data.find(t => t.id == tenantId))
  if (!tenant) return <ErrorLabel>{tenantId} not found</ErrorLabel> // TODO error messaging system [SEC]

  const { goBack, goInstead } = useEnvironment()

  // save handler
  const save = () => {
    console.log("TODO save", tenant)
    goBack()
  }

  // cancel handler
  const cancel = () => {
    console.log("TODO cancel")
    goBack()
  }

  return (
    <Stack direction="column" spacing="30px"  minWidth="600px" position="relative">
      <GoBack position="absolute" left="-20px" top="-40px" />

      <Flex width="100%">
        <Heading as="h1" size="md">{tenant.name}</Heading>
        <Spacer />
        <Text>ID: {tenant.id}</Text>
      </Flex>

      <Tabs>
        <TabList>
          <Tab>Tenant profile</Tab>
          <Tab>Tenant managers </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AdminTenantProfile tenant={tenant}>
              <Flex width="100%">
                <Button onClick={cancel} variant="outline">Cancel</Button>
                <Spacer />
                <Button onClick={save}>Save changes</Button>
              </Flex>
            </AdminTenantProfile>
          </TabPanel>
          <TabPanel>
            <AdminTenantManagers tenant={tenant}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
  
    </Stack>
  )
}
