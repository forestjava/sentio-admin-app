import React from "react"
import { Stack, Heading, Text, Flex, Spacer, Button,
  FormControl, FormLabel, Input, Checkbox } from "@chakra-ui/react"
import { Table, Thead, Th, Tbody, Tr, Td, } from "../Atoms/Table"
import { NumberInput } from "../Atoms/NumberInput"

import * as Stores from "../../modules/Stores"
import { useObservableStore } from "../../modules/useObservableStore"

import { Tenant } from "../../modules/Types";

import { useParams } from "react-router-dom";
import { useEnvironment } from "../../modules/environments";
import { GoBack } from "../Molecules/GoBack";

import { ErrorLabel } from "../Atoms/ErrorLabel";

const formContolStyle = {
  display: "flex",
  direction: "row",
  alignItems: "center",
}

const formLabelStyle = {
  minWidth: "150px",
  margin: 0,
  alignSelf: "center",
}

type TParams = { agentId: string };

export const ManagerAgentsEdit = () => {

  const store = useObservableStore(Stores.Agents)
  const { agentId } = useParams<TParams>();
  
  const [ agent ] = React.useState(store.data.find(t => t.id == agentId))
  if (!agent) return <ErrorLabel>{agentId} not found</ErrorLabel> // TODO error messaging system [SEC]

  const { goBack, goInstead } = useEnvironment()

  // save handler
  const save = () => {
    console.log("TODO save", agent)
    goBack()
  }

  // cancel handler
  const cancel = () => {
    console.log("TODO cancel")
    goBack()
  }

  return (
    <Stack direction="column" spacing="30px" minWidth="600px" position="relative">
      <GoBack position="absolute" left="-20px" top="-40px" />

      <Heading as="h1" size="md">Agent profile</Heading>

      <Stack direction="column" spacing="20px" >
        <Heading as="h2" size="sm">{agent.firstName} {agent.lastName}</Heading>
        <FormControl {...formContolStyle}>
          <FormLabel {...formLabelStyle}>ID</FormLabel>
          <Text>{agent.id}</Text>
        </FormControl>
        <FormControl {...formContolStyle}>
          <FormLabel {...formLabelStyle}>Status</FormLabel>
          <Text>{agent.status}</Text>
        </FormControl>
        <FormControl {...formContolStyle}>
          <FormLabel {...formLabelStyle}>Email</FormLabel>
          <Text>{agent.email}</Text>
        </FormControl>
        <FormControl {...formContolStyle}>
          <FormLabel {...formLabelStyle}>Phone</FormLabel>
          <Text>{agent.phone}</Text>
        </FormControl>
        <FormControl {...formContolStyle}>
          <FormLabel {...formLabelStyle}>Address</FormLabel>
          <Text>{agent.address}</Text>
        </FormControl>
        <FormControl {...formContolStyle}>
          <FormLabel {...formLabelStyle}>Reserved agent</FormLabel>
          <Checkbox
            defaultChecked={agent.reserved}
            onChange={e => agent.reserved = e.target.checked} 
          />
        </FormControl>
      </Stack>

      <Stack direction="column" spacing="20px" >
        <Heading as="h2" size="sm">Skills</Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>Skills</Th>
              <Th>Proficiency level</Th>
            </Tr>
          </Thead>
          <Tbody>
            { agent.skills.map((skill, i) =>
              <Tr key={`skills[${i}]`}>
                <Td>
                  <Checkbox
                    spacing="16px"
                    defaultChecked={skill.active}
                    onChange={e => skill.active = e.target.checked}
                  >{skill.name}
                  </Checkbox>
                </Td>
                <Td>
                  <NumberInput 
                    width="90px"
                    defaultValue={skill.level}
                    onChange={(_, value) => skill.level = value}
                  />
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Stack>

      <Stack direction="column" spacing="20px" >
        <Heading as="h2" size="sm">Mediaflows</Heading>
        { agent.mediaflows.map((flow, i) =>
          <Checkbox key={`mediaflows[${i}]`}
            spacing="16px"
            defaultChecked={flow.active}
            onChange={e => flow.active = e.target.checked}
          >{flow.name}</Checkbox>
        )}
      </Stack>

      <Flex width="100%">
        <Button onClick={cancel} variant="outline">Cancel</Button>
        <Spacer />
        <Button onClick={save}>Save changes</Button>
      </Flex>
  
    </Stack>
  )
}
