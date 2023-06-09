import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DefaultButton } from "../../components/DefaultButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export function ProductCard({ imgAlt, imgSrc, favorite }) {
    return (
        <Box width="400px">
            <Box
                component="img"
                sx={{
                    height: "350px",
                    width: "100%",
                }}
                alt={imgAlt}
                src={imgSrc ? imgSrc : "public/images/noimage.png"}
            />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="50px"
                width="100%"
            >
                <Typography fontFamily="Montserrat" fontSize="1.2rem">
                    Nome do produto
                </Typography>
                <Typography fontFamily="Montserrat" fontSize="1.6rem">
                    R$19,99
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="50px"
                width="100%"
            >
                <Typography fontFamily="Montserrat" fontSize="1.2rem">
                    17 Favoritos
                </Typography>
                <FavoriteIcon
                    sx={{ fontSize: "2.5rem", cursor: "pointer" }}
                    // @ts-ignore
                    color={favorite ? "error" : "grey"}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="50px"
                width="100%"
            >
                <DefaultButton sx={{ fontFamily: "Montserrat", width: "60%" }}>
                    Comprar
                </DefaultButton>
                <IconButton
                    // @ts-ignore
                    color="orange"
                    aria-label="Adicionar ao carrinho"
                >
                    <AddShoppingCartIcon
                        sx={{
                            padding: "0",
                            fontSize: "2.5rem",
                            cursor: "pointer",
                            ":hoverbackgroundColor": "red",
                        }}
                    />
                </IconButton>
            </Box>
        </Box>
    );
}

// Nicolas
