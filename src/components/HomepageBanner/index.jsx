import { Box, Typography } from "@mui/material";
import { DefaultButton } from "../../components/DefaultButton";
import { Link } from "react-router-dom";

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
                src="images/home.jpg"
            />
            <Box textAlign="center" position="absolute" bottom="27.5%">
                <Typography lineHeight="11.9vw" color="white" fontSize="8.1vw" letterSpacing="4px">
                    DOCES
                </Typography>
                <Typography color="white" fontSize="1.3vw" letterSpacing="2px" mb="3.5vw">
                    OS MELHORES DA SERRA
                </Typography>
                <Link to="/shop">
                    <DefaultButton
                        sx={{
                            fontSize: "1.5vw",
                            textDecoration: "none",
                            width: "17vw",
                        }}
                    >
                        EXPLORAR
                    </DefaultButton>
                </Link>
            </Box>
        </Box>
    );
}
