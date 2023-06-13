import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        orange: {
            main: "#ED7201",
        },
        grey: {
            // @ts-ignore
            main: "#D9D9D9",
        },
        filter: {
            main: "#EBC5A3",
        },
        footer: {
            main: "#5E544C",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: "Montserrat",
    },
});

export default theme;
