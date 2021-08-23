import React from "react";
import { ObservableStore } from "./ObservableStore";
import { useToast, Spinner } from "@chakra-ui/react";

export function useObservableStore<T>(store: ObservableStore<T>) {
    // start loading 
    React.useEffect(() => {
        if (store.status == "initial") store.load()
    }, [])
    
    // status toasts
    const toast = useToast()
    const loadingToast = () => {
        toast({
            position: "top",
            render: () => <Spinner />,
            duration: null
        })
    }
    const errorToast = () => {
        toast({
            position: "top",
            status: "error",
            title: store.error? store.error.message: "An observable store has error status",
            duration: null,
            isClosable: true
        })
    }
    const clearToasts = () => {
        toast.closeAll()
    }

    // show/hide status toasts with every render
    React.useEffect(() => {
        switch (store.status) {
            case "loading": loadingToast(); break;
            case "saving": loadingToast(); break;
            case "error": errorToast(); break;
            default: clearToasts()
        }
    })

    return store
} 