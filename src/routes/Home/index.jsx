import { Box, Typography } from "@mui/material";
import { DefaultButton } from "../../components/DefaultButton";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home() {
    return (
        <>
            <Header />

            <Box display="flex" justifyContent="center" position="relative">
                <Box
                    component="img"
                    sx={{
                        height: "auto",
                        width: "97%",
                        maxHeight: "700px",
                        maxWidth: "1858px",
                    }}
                    alt="The house from the offer."
                    src="public/images/home.jpg"
                />
                <Box textAlign="center" position="absolute" bottom="20%">
                    <Typography
                        lineHeight="14.9vw"
                        color="white"
                        fontSize="13.1vw"
                        letterSpacing="4px"
                    >
                        DOCES
                    </Typography>
                    <Typography color="white" fontSize="1.5vw" letterSpacing="2px">
                        OS MELHORES DA SERRA
                    </Typography>
                    <DefaultButton
                        sx={{
                            marginTop: "4vw",
                            height: "clamp(45px, 4.4vw, 90px)",
                            width: "21vw",
                        }}
                    >
                        <Typography fontSize="1.5vw">EXPLORAR</Typography>
                    </DefaultButton>
                </Box>
            </Box>

            <Footer />
        </>
    );
}

// Nicolas
