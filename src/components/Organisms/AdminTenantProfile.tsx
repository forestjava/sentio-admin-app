import React from "react"
import { Stack, FormControl, FormLabel, Input, Checkbox, } from "@chakra-ui/react"
import { NumberInput } from "../Atoms/NumberInput";

import { Tenant, safeUpdateCountSkills, safeUpdateCountMediafows } from "../../modules/Types";

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

interface AdminTenantProfileProps {
  tenant: Tenant
}

export const AdminTenantProfile: React.FC<AdminTenantProfileProps> = ({ tenant, children }) => {
  
  const [, updateView] = React.useState(tenant.count_mediaflows)

  return (
    <Stack direction="column" spacing="20px">
      <FormControl {...formContolStyle}>
        <FormLabel {...formLabelStyle}>Tenant name</FormLabel>
        <Input
            placeholder="Enter name"
            required
            defaultValue={tenant.name}
            onChange={e => tenant.name = e.target.value}
        />
      </FormControl>
      <FormControl {...formContolStyle}>
        <FormLabel {...formLabelStyle}>Nr of skills</FormLabel>
        <NumberInput
            defaultValue={tenant.count_skills}
            onChange={(_, value) => {
              //tenant.updateCountSkills(value)
              safeUpdateCountSkills(tenant, value)
            }}
        />
      </FormControl>
      <FormControl {...formContolStyle}>
        <FormLabel {...formLabelStyle}>Nr of mediaflows</FormLabel>
        <NumberInput
            defaultValue={tenant.count_mediaflows}
            onChange={(_, value) => {
              //tenant.updateCountMediafows(value)
              safeUpdateCountMediafows(tenant, value, updateView)
            }}
        />
      </FormControl>
      { tenant.mediaflows.map((flow, i) => 
        <FormControl {...formContolStyle} key={`mediaflows[${i}]`}>
          <FormLabel {...formLabelStyle}>Mediaflow {i+1}</FormLabel>
          <Input
              placeholder={`Name the mediaflow ${i+1}`}
              required={true}
              defaultValue={flow.name}
              onChange={e => flow.name = e.target.value}
          />
        </FormControl>
      ) }
      <FormControl {...formContolStyle}>
        <FormLabel {...formLabelStyle}>Media selection</FormLabel>
        <Checkbox
          defaultChecked={tenant.media_bot}
          onChange={e => tenant.media_bot = e.target.checked}
        >Bot</Checkbox>
      </FormControl>
      <FormControl {...formContolStyle}>
        <FormLabel {...formLabelStyle}></FormLabel>
        <Checkbox
          defaultChecked={tenant.media_chat}
          onChange={e => tenant.media_chat = e.target.checked}
        >Chat</Checkbox>
      </FormControl>
      <FormControl {...formContolStyle}>
        <FormLabel {...formLabelStyle}></FormLabel>
        <Checkbox
          defaultChecked={tenant.media_voice}
          onChange={e => tenant.media_voice = e.target.checked}
        >Voice</Checkbox>
      </FormControl>
      <FormControl {...formContolStyle}>
        <FormLabel {...formLabelStyle}></FormLabel>
        <Checkbox
          defaultChecked={tenant.media_video}
          onChange={e => tenant.media_video = e.target.checked}
        >Video</Checkbox>
      </FormControl>
      { children }
    </Stack>
  )  
}
