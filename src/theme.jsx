import { extendTheme } from "@chakra-ui/react";

const config = { initialColorMode: "light", useSystemColorMode: true };

const theme = extendTheme({
    styles: {
        global: {
            "html,body": {
                margin: 0,
                padding: 0,
                fontFamily: "Lato",
            },
        },
    },
    fonts: { body: "Lato" },
    config,
});

export default theme;
