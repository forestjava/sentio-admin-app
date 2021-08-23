import React from "react"
import { Stack, Box, Button, Flex, Heading, Spacer, Checkbox, CloseButton, Input, } from "@chakra-ui/react"
import { NumberInput } from "../Atoms/NumberInput"
import { Table, Thead, Th, Tbody, Tr, Td, } from "../Atoms/Table"
import { Measure } from "../Atoms/Measure"
import { Info } from "../Molecules/Info"

import * as Stores from "../../modules/Stores"
import { observer } from "mobx-react"
import { useObservableStore } from "../../modules/useObservableStore"

export const ManagerTenant: React.FC = observer(() => {
    
    const store = useObservableStore(Stores.Tenant)

    // save handler
    const save = () => {
        console.log("TODO save")
    }

    // cancel handler
    const cancel = () => {
        console.log("TODO cancel")
    }

    return (
        <Stack direction="column" spacing="30px">
            <Heading as="h1" size="md">Tenant admin</Heading>
            <Stack direction="column" spacing="30px">
                <Heading as="h2" size="sm">Skills</Heading>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Skills</Th>
                            <Th>Routing weight</Th>
                            <Th>Thresholds<Measure>, sec</Measure><Info>0 - 99 seconds</Info></Th>
                            <Th textAlign="center">Self-administered</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { store.data.skills.map(skill =>
                            <Tr key={skill.id}>
                                <Td>{skill.id}</Td>
                                <Td><Input defaultValue={skill.name} onChange={e => skill.name = e.target.value} /></Td>
                                <Td><NumberInput defaultValue={skill.weight} onChange={(_, value) => skill.weight = value} /></Td>
                                <Td><NumberInput defaultValue= {skill.threshold} onChange={(_, value) => skill.threshold = value} /></Td>
                                <Td textAlign="center"><Checkbox defaultChecked={skill.selfish} onChange={e => skill.selfish = e.target.checked} /></Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Stack>
            <Stack direction="column" spacing="30px">
                <Heading as="h2" size="sm">Mediaflows</Heading>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Mediaflows</Th>
                            <Th>Phone<Info>Phone number should be unique for each mediaflow</Info></Th>
                            <Th>SLA<Measure>, sec</Measure><Info>Service level of agents<br/>5 - 120 seconds</Info></Th>
                            <Th>TRA<Measure>, sec</Measure><Info>Threshold of reserved agents<br/>0 - 120 seconds</Info></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { store.data.mediaflows.map(flow =>
                            <Tr key={flow.id}>
                                <Td>{flow.name}</Td>
                                <Td><Input defaultValue={flow.phone} onChange={e => flow.phone = e.target.value} /></Td>
                                <Td><NumberInput defaultValue={flow.SLA} onChange={(_, value) => flow.SLA = value} /></Td>
                                <Td><NumberInput defaultValue={flow.TRA} onChange={(_, value) => flow.TRA = value} /></Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Stack>
            <Flex>
                <Button variant="outline" onClick={() => cancel()}>Cancel</Button>
                <Spacer />
                <Button variant="solid" onClick={() => save()}>Save changes</Button>
            </Flex> 
        </Stack>
    )
})
