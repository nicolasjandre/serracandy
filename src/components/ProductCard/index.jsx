import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DefaultButton } from "../../components/DefaultButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { formatPreco } from "../../utils/formatPreco";

export function ProductCard({ product, user }) {
    return (
        <Box width="400px">
            <Box
                component="img"
                sx={{
                    height: "350px",
                    width: "100%",
                }}
                alt={product.imgAlt}
                src={product.imgUrl ? product.imgUrl : "public/images/noimage.png"}
            />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="50px"
                width="100%"
            >
                <Typography fontFamily="Montserrat" fontSize="1.2rem">
                    {product.nome}
                </Typography>
                <Typography fontFamily="Montserrat" fontSize="1.6rem">
                    {formatPreco(product.preco)}
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
                    {product.feedbacksPositivos} Favoritos
                </Typography>
                <FavoriteIcon
                    sx={{ fontSize: "2.5rem", cursor: "pointer" }}
                    // @ts-ignore
                    color={ user && user.favorite ? "error" : "grey"}
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
                    sx={{ padding: "0" }}
                >
                    <AddShoppingCartIcon
                        sx={{
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
