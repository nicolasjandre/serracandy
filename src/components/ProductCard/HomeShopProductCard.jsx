import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DefaultButton } from "../DefaultButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { formatPreco } from "../../utils/formatPreco";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function HomeShopProductCard({ product, user }) {
    const { setCartModalOpen, addToCartBySum } = useContext(CartContext);

    function handleAddToCart(prod) {
        addToCartBySum(prod, 1);
        setCartModalOpen(true);
    }

    return (
        <Box width="400px">
            <Link to={`/produto/${product.id}`}>
                <Box
                    component="img"
                    sx={{
                        ":hover": {
                            scale: "1.04",
                        },
                        height: "350px",
                        width: "100%",
                        cursor: "pointer",
                        transitionDuration: "250ms",
                    }}
                    alt={product.imgAlt}
                    src={product.imgUrl ? product.imgUrl : "public/images/noimage.png"}
                />
            </Link>
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
                    color={user && user.favorite ? "error" : "grey"}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="50px"
                width="100%"
            >
                <DefaultButton
                    href={`/produto/${product.id}`}
                    sx={{
                        fontFamily: "Montserrat",
                        width: "60%",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    Ver detalhes
                </DefaultButton>
                <IconButton
                    onClick={() => handleAddToCart(product)}
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
