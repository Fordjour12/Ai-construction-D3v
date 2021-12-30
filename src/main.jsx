import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
