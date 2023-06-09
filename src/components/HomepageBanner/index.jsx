import { Box, Typography } from "@mui/material";
import { DefaultButton } from "../../components/DefaultButton";

export function HomepageBanner({ imgAlt }) {
    return (
        <Box display="flex" justifyContent="center" position="relative">
            <Box
                component="img"
                sx={{
                    height: "auto",
                    width: "100%",
                    maxHeight: "600px",
                    maxWidth: "1858px",
                }}
                alt={imgAlt}
                src="public/images/home.jpg"
            />
            <Box textAlign="center" position="absolute" bottom="27.5%">
                <Typography lineHeight="11.9vw" color="white" fontSize="8.1vw" letterSpacing="4px">
                    DOCES
                </Typography>
                <Typography color="white" fontSize="1.3vw" letterSpacing="2px">
                    OS MELHORES DA SERRA
                </Typography>
                <DefaultButton
                    sx={{
                        marginTop: "3.5vw",
                        height: "clamp(45px, 3.7vw, 70px)",
                        width: "21vw",
                    }}
                >
                    <Typography fontSize="1.5vw">EXPLORAR</Typography>
                </DefaultButton>
            </Box>
        </Box>
    );
}
