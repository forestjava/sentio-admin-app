import React from "react"
import { Table, Thead, Th, Tbody, Tr, Td, } from "../Atoms/Table"

import { Tenant } from "../../modules/Types";

interface AdminTenantManagersProps {
  tenant: Tenant
}

export const AdminTenantManagers: React.FC<AdminTenantManagersProps> = ({ tenant }) => {
  return (
    <Table>
      <Thead >
          <Tr>
              <Th>ID</Th>
              <Th>Role</Th>
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Email</Th>
          </Tr>
      </Thead>
      <Tbody>
          { tenant.managers.map(manager => 
              <Tr key={manager.id}>
                  <Td>{manager.id}</Td>
                  <Td>{manager.role}</Td>
                  <Td>{manager.firstName}</Td>
                  <Td>{manager.lastName}</Td>
                  <Td>{manager.email}</Td>
              </Tr>
          ) }
      </Tbody>
  </Table>
)
}  
