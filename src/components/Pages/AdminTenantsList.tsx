import React from "react"
import { Stack, Button, Flex, Heading, Spacer } from "@chakra-ui/react"
import { Table, Thead, Th, Tbody, Tr, Td, } from "../Atoms/Table"
import { ActionButton } from "../Molecules/ActionButton"

import * as Stores from "../../modules/Stores"
import { observer } from "mobx-react"
import { useObservableStore } from "../../modules/useObservableStore"

import { t } from "../../modules/strings"
import { useEnvironment } from "../../modules/environments"

export const AdminTenantsList: React.FC = observer(() => {

    const store = useObservableStore(Stores.Tenants)
    const { goAhead } = useEnvironment()

    // create handler
    const create = () => {
        goAhead("create")
    }
    
    // view handler
    const edit = (id: string) => {
        goAhead(id)
    }

    // delete handler
    const remove = (id: string) => {
        const i = store.data.findIndex(tenant => tenant.id == id)
        store.data.splice(i, 1)
    }

    return (
        <Stack direction="column" spacing="26px" align="start">
            <Flex width="100%">
                <Heading as="h1" size="md">{t("vDVP5a")}</Heading>
                <Spacer />
                <Button onClick={() => create()}>{t("MXjaMd")}</Button>
            </Flex>
            <Table>
                <Thead >
                    <Tr>
                        <Th>{t("ovYcxH")}</Th>
                        <Th>{t("wwBd0X")}</Th>
                        <Th textAlign="center">{t("9aJbh6")}</Th>
                        <Th textAlign="center">{t("DGuB0b")}</Th>
                        <Th textAlign="center">{t("gGJTtF")}</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { store.data.map(tenant => 
                        <Tr key={tenant.id}>
                            <Td>{tenant.id}</Td>
                            <Td>{tenant.name}</Td>
                            <Td textAlign="center">{tenant.count_skills}</Td>
                            <Td textAlign="center">{tenant.count_mediaflows}</Td>
                            <Td textAlign="center">{tenant.count_managers}</Td>
                            <Td><ActionButton options={[
                                {id: tenant.id, title: t("Lb0tUu"), action: edit},
                                {id: tenant.id, title: t("FNtCxD"), action: remove, style: { color: "brand.danger" }}
                            ]}/></Td>
                        </Tr>
                    ) }
                </Tbody>
            </Table>
        </Stack>
    )
})
