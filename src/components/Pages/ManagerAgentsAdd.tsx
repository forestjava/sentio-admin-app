import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Flex, Spacer, Button, Stack
} from "@chakra-ui/react"

import * as Stores from "../../modules/Stores"
import { useObservableStore } from "../../modules/useObservableStore"
import { Agent } from "../../modules/Types";

import { useEnvironment } from "../../modules/environments";

export const ManagerAgentsAdd = () => {

  const store = useObservableStore(Stores.Agents)
  const [ agents ] = React.useState([new Agent()])
  const [, update ] = React.useState(agents.length)

  const { goBack } = useEnvironment()

  const add = () => {
    agents.push(new Agent())
    update(agents.length)
  }

  const invite = () => {
    // create in storage just for debug
    agents.forEach((agent, i) => agent.id = (store.data.length + 1 + i).toString().padStart(4, "0")) // just for demonstration goals
    store.data.push(...agents)
    goBack()
  }

  const cancel = () => {
    goBack()
  }

  return (
    <Modal size="xl" isOpen={true} onClose={cancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new agent</ModalHeader>
        <ModalBody>
          <Stack direction="column" spacing="20px">
            { agents.map((agent, i) =>
              <FormControl key={`agents[${i}]`}>
                <Input
                  placeholder="Enter email" 
                  defaultValue={agent.email}
                  onChange={e => agent.email = e.target.value}
                />
              </FormControl>
            ) }
            <Button 
              variant="link" 
              color="brand.base" 
              _hover={{ color: "brand.hover" }} 
              alignSelf="start" 
              onClick={add}>
                + Add more emails
            </Button>
            <Flex width="100%">
                <Button onClick={() => cancel()} variant="outline">Cancel</Button>
                <Spacer />
                <Button onClick={() => invite()}>Invite agent</Button>
            </Flex>
          </Stack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )  
}