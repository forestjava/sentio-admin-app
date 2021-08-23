import React from "react"
import { BrandedFormLayout } from "../Templates/BrandedFormLayout";
import { VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { GoBack } from "../Molecules/GoBack";

type FormValues = {
    email: string
}

export const ResetPasswordPage = () => {
    const { register, handleSubmit } = useForm<FormValues>()

    const submit = (data: FormValues) => {
        console.log("TODO: send through Backend API", data)
    }

    return (
        <BrandedFormLayout heading="Reset my password">
            <VStack spacing={30} as="form" width="100%" onSubmit={handleSubmit(submit)}>
                <FormControl>
                    <FormLabel>E-mail</FormLabel>
                    <Input size="lg" type="email" placeholder="example@email.com" {...register("email", { required: {value: true, message: "Please enter your email"}, })} />
                </FormControl>
                <Button type="submit" width="100%">Reset my password</Button>
                <GoBack position="absolute" left={-90} top={50} />
            </VStack>   
        </BrandedFormLayout>
    )
}