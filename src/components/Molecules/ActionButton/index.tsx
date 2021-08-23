import React from "react"
import { Button, Image, Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverBody } from "@chakra-ui/react"
import img from "./ellipsis.svg"

interface ActionButtonProps {
  options: { id: string, title: string, action: (id: string) => void, style?: object}[]
}

export const ActionButton: React.FC<ActionButtonProps> = ({ options }) => (
  <Popover closeOnBlur={true} placement="right-start">
    <PopoverTrigger>
      <Button variant="ghost"><Image src={img} /></Button>
    </PopoverTrigger>
    <Portal>
      <PopoverContent 
        boxShadow="0px 4px 16px rgba(3, 29, 44, 0.1)"
        _focus={{outline: "none"}}
        width="200px"
      >
        <PopoverArrow />
          { options.map((option, optionIdex)  => (
            <Button
              variant="ghost"
              fontWeight="normal"
              justifyContent="start" 
              key={`${option.id}/${optionIdex}`} 
              {...option.style}
              onClick={ () => { option.action(option.id) } }
              >
                { option.title }
            </Button>
          ))}
      </PopoverContent>
    </Portal>
  </Popover>
)