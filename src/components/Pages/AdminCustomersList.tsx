import React from "react"
import { Stack, Button, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react"
import { Table, Thead, Th, Tbody, Tr, Td, } from "../Atoms/Table"
import { RemoveButton } from "../Molecules/RemoveButton"

import * as Stores from "../../modules/Stores"
import { observer } from "mobx-react"
import { useObservableStore } from "../../modules/useObservableStore"
import { Customer } from "../../modules/Types";

import { t } from "../../modules/strings"
import { useEnvironment } from "../../modules/environments"

export const AdminCustomersList: React.FC = observer(() => {

    const store = useObservableStore(Stores.Customers)
    const { goAhead } = useEnvironment()

    // create handler
    const add = () => {
      goAhead("add")
    }
    
    // view handler
    const edit = (id: string) => {
      goAhead(id)
    }

    // delete handler
    const remove = (id: string) => {
      const i = store.data.findIndex(customer => customer.id == id)
      store.data.splice(i, 1)
    }

    return (
        <Stack direction="column" spacing="26px" align="start">
            <Flex width="100%">
                <Heading as="h1" size="md">Customer management</Heading>
                <Spacer />
                <Button onClick={() => add()}>Add customer</Button>
            </Flex>
            <Table>
                <Thead >
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Phone</Th>
                        <Th>Customer profile</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { store.data.map(customer =>
                        <Tr key={customer.id}>
                            <Td>{customer.firstName}</Td>
                            <Td>{customer.lastName}</Td>
                            <Td>{customer.phone}</Td>
                            <Td>{customer.profile}</Td>
                            <Td><RemoveButton onClick={() => remove(customer.id)}/></Td>
                        </Tr>
                    ) }
                </Tbody>
            </Table>
        </Stack>
    )
})
