import React from "react";
import { Heading, Spacer, VStack, Box } from "@chakra-ui/react";
import { SentioLogo } from "../Molecules/Logos";

interface Props {
    heading: string
    children: React.ReactNode    
}

export const BrandedFormLayout = (props: Props) => {
    return (
        <Box maxWidth="540px" padding="60px 20px" marginX="auto" position="relative">
            <VStack spacing="20px">
                <SentioLogo />
                <Heading as="h1" size="lg">{props.heading}</Heading>
            </VStack>
            <Spacer height="60px" />
            {props.children}
        </Box>
    );
}