import React from "react"
import { BrandedFormLayout } from "../Templates/BrandedFormLayout";
import { VStack, FormControl, FormLabel, Input, Button, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";
import { GoBack } from "../Molecules/GoBack";

import { t } from "../../modules/strings"

type FormValues = {
    code: string
}

export const ConfirmPage = () => {
    const { register, handleSubmit } = useForm<FormValues>()
    const history = useHistory()

    const submit = (data: FormValues) => {
        console.log("TODO: send through Backend API", data)
        const next = "/admin" // get from Backend API
        history.push(next)
    }

    const resend = (evt: React.MouseEvent) => {
        evt.preventDefault();
        console.log("TODO: send through Backend API", "using Auth storage")
    }

    return (
        <BrandedFormLayout heading={ t("2ZbZpV") }>
            <VStack spacing={30} as="form" width="100%" onSubmit={handleSubmit(submit)}>
                <FormControl>
                    <FormLabel>{ t("O2i4J8") }</FormLabel>
                    <Input 
                        placeholder={ t("peT0xQ") } 
                        {...register("code", { required: {value: true, message: t("lY4Zr1")}, })} 
                    />
                </FormControl>
                <Button type="submit" width="100%">{ t("nMSrxS") }</Button>
                <Link to="#" onClick={resend}>{ t("Up9qWK") }</Link>
                <GoBack position="absolute" left="-90px" top="40px" />
            </VStack>   
        </BrandedFormLayout>
    )
}