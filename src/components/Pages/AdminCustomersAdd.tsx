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
import { Customer } from "../../modules/Types";

import { useEnvironment } from "../../modules/environments";

export const AdminCustomersAdd = () => {

  const store = useObservableStore(Stores.Customers)
  const [ customer ] = React.useState(new Customer())

  const { goBack } = useEnvironment()

  const add = () => {
    // create in storage just for debug
    customer.id = (store.data.length + 1).toString().padStart(4, "0") // just for demonstration goals
    store.data.push(customer)
    goBack()
  }

  const cancel = () => {
    goBack()
  }

  return (
    <Modal size="xl" isOpen={true} onClose={cancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new customer</ModalHeader>
        <ModalBody>
          <Stack direction="column" spacing="20px">
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name" 
                defaultValue={customer.firstName}
                onChange={e => customer.firstName = e.target.value}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="last name" 
                defaultValue={customer.lastName}
                onChange={e => customer.lastName = e.target.value}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="Phone" 
                defaultValue={customer.phone}
                onChange={e => customer.phone = e.target.value}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Customer profile</FormLabel>
              <Input
                placeholder="Customer profile" 
                defaultValue={customer.profile}
                onChange={e => customer.profile = e.target.value}
              />
            </FormControl>
            <Flex width="100%">
                <Button onClick={() => cancel()}>Cancel</Button>
                <Spacer />
                <Button onClick={() => add()}>Add customer</Button>
            </Flex>
          </Stack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )  
}