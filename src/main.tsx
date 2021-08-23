import React from "react"
import ReactDOM from "react-dom"

// API Queries context provider 
import { client, ApiProvider } from "./modules/API";

// UX (Chakra) context provider 
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./theme"

// React router 
import { BrowserRouter } from "react-router-dom";

// Root (App) environment
import { AppEnvironment } from "./components/Environments/AppEnvironment";

// Main render
ReactDOM.render(
  <React.StrictMode>
    <ApiProvider value={client}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <AppEnvironment />
        </BrowserRouter>
      </ChakraProvider>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
