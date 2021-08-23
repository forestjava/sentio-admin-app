import React from "react"
import { Stack, Button, Flex, Heading, Spacer, } from "@chakra-ui/react"
import { Table, Thead, Th, Tbody, Tr, Td, } from "../Atoms/Table"
import { ActionButton } from "../Molecules/ActionButton"

import * as Stores from "../../modules/Stores"
import { observer } from "mobx-react"
import { useObservableStore } from "../../modules/useObservableStore"

import { useEnvironment } from "../../modules/environments"

export const ManagerAgentsList: React.FC = observer(() => {

    const store = useObservableStore(Stores.Agents)
    const { goAhead } = useEnvironment()

    // view handler
    const add = () => {
        goAhead("add")
    }

    // view handler
    const edit = (id: string) => {
        goAhead(id)
    }

    // delete handler
    const remove = (id: string) => {
        const i = store.data.findIndex(agent => agent.id == id)
        store.data.splice(i, 1)
    }

    return (
        <Stack direction="column" spacing="30px" alignItems="left">
            <Flex>
                <Heading size="md">Agent admin</Heading>
                <Spacer />
                <Button onClick={() => add()}>Add agent</Button>
            </Flex>
            <Table>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>First name</Th>
                        <Th>Last name</Th>
                        <Th>Email</Th>
                        <Th>Reserved agent</Th>
                        <Th>Status</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { store.data.map(agent =>
                        <Tr key={agent.id}>
                            <Td>{agent.id}</Td>
                            <Td>{agent.firstName}</Td>
                            <Td>{agent.lastName}</Td>
                            <Td>{agent.email}</Td>
                            <Td>{agent.reserved? "Yes": "No"}</Td>
                            <Td>{agent.status}</Td>
                            <Td><ActionButton options={[
                                {id: agent.id, title: "Open agent profile", action: edit},
                                {id: agent.id, title: "Delete agent", action: remove, style: { color: "brand.danger" }}
                            ]}/></Td>
                        </Tr>
                    ) }
                </Tbody>
            </Table>
        </Stack>
    )
})
