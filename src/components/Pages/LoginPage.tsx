import React from "react"
import { BrandedFormLayout } from "../Templates/BrandedFormLayout";
import { Link } from "../Atoms/Link";
import { ErrorLabel } from "../Atoms/ErrorLabel";
import { VStack, FormControl, FormLabel, Input, Checkbox, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { useMutation } from 'urql';
import { useEnvironment } from "../../modules/environments";

type LoginFormValues = {
    username: string
    password: string
}

const LoginQuery = `
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      access_token
      error_code
      message
      refresh_token
    }
  }`

export const LoginPage: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>()
    const [ { error, fetching }, sendLoginData ] = useMutation(LoginQuery); 
    const { goAhead } = useEnvironment()

    const submit = (formValues: LoginFormValues) => {
        /*
        sendLoginData(formValues).then(data => {
            console.log("TODO: store loginData to Auth", data)
            if (!data.error) goWith("confirm")
        })
        */
        goAhead("confirm")
    }
   
    return (
        <BrandedFormLayout heading="Log in to Sentio">
            <VStack spacing={30} as="form" width="100%" onSubmit={handleSubmit(submit)}>
                <FormControl>
                    <FormLabel size="sm">Email</FormLabel>
                    <Input 
                        size="lg" 
                        type="email" 
                        placeholder="example@email.com" 
                        {...register("username", {required: {value: true, message: "Please enter your email"}, })} 
                        isInvalid={errors.username? true: false} 
                    />
                    { errors.username? <ErrorLabel>{errors.username.message}</ErrorLabel>: null }
                </FormControl>
                <FormControl>
                    <FormLabel size="sm">Password</FormLabel>
                    <Input 
                        size="lg"
                        type="password" 
                        placeholder="Password" 
                        {...register("password", {required: {value: true, message: "Please enter your password"}, })} 
                        isInvalid={errors.username? true: false} 
                    />
                    { errors.password? <ErrorLabel>{errors.password.message}</ErrorLabel>: null }
                </FormControl>
                {/*
                <FormControl>
                    <Checkbox defaultIsChecked >Remember me</Checkbox>
                </FormControl>
                */}
                <Button type="submit" width="100%" size="lg" isLoading={fetching} >Next</Button>
                { error? <ErrorLabel>{error.message}</ErrorLabel>: null }
                <Link to="/reset">Forgot your password</Link>
            </VStack>
        </BrandedFormLayout>    
    )
}
