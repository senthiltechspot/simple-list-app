import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { ChakraProvider } from "@chakra-ui/react";

const provider = new AuthProvider(`ba73e0c99103c2dfdce19a163f3c6b2cc8b1de97`); // required
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ProvideAuth>
  </React.StrictMode>
);
