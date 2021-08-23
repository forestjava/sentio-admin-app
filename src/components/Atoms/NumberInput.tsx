import React from "react"
import { 
    NumberInputProps, 
    NumberInput as ChakraNumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    NumberIncrementStepper, 
    NumberDecrementStepper 
} from "@chakra-ui/react"

export const NumberInput:React.FC<NumberInputProps> = (props) => (
    <ChakraNumberInput {...props} >
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
    </ChakraNumberInput>
) 
