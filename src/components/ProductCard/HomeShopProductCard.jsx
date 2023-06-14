// @ts-nocheck
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DefaultButton } from "../DefaultButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { formatPreco } from "../../utils/formatPreco";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import "../../styles/LoginCadastro/style.css";

export function HomeShopProductCard({ product }) {
    const { setCartModalOpen, addToCartBySum } = useContext(CartContext);
    const { setAuthenticatedUser, authenticatedUser } = useContext(AuthContext);

    async function handleAddOrRemoveFavorite() {
       
        if (
            Object.keys(authenticatedUser).length === 0 &&
            authenticatedUser.constructor === Object &&
            localStorage.getItem("serracandy@token") === null
        ) {
            console.log("ola")
            return toast.error("Você precisa estar logado para favoritar um item.");
        }

        const alreadyFavorited = authenticatedUser.favoritos.find((id) => id === product.id);

        if (alreadyFavorited) {
            await api.patch(`/users/${authenticatedUser.id}`, {
                ...authenticatedUser,
                favoritos: authenticatedUser.favoritos.filter((id) => id !== product.id),
            });

            setAuthenticatedUser({
                ...authenticatedUser,
                favoritos: authenticatedUser.favoritos.filter((id) => id !== product.id),
            });

            await api.patch(`/produtos/${product.id}`, {
                ...product,
                favoritos: product.favoritos--,
            });
        } else {
            const updatedFavoritos = [...authenticatedUser.favoritos, product.id];

            await api.patch(`/users/${authenticatedUser.id}`, {
                ...authenticatedUser,
                favoritos: updatedFavoritos,
            });

            setAuthenticatedUser({
                ...authenticatedUser,
                favoritos: updatedFavoritos,
            });

            await api.patch(`/produtos/${product.id}`, {
                ...product,
                favoritos: product.favoritos++,
            });
        }
    }

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
                    alt={product.nome}
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
                    {product.favoritos} Favoritos
                </Typography>
                <IconButton
                    onClick={() => handleAddOrRemoveFavorite()}
                    // @ts-ignore
                    color="orange"
                    aria-label="Adicionar ao carrinho"
                    sx={{ padding: "0" }}
                >
                    <FavoriteIcon
                        sx={{ fontSize: "2.5rem", cursor: "pointer" }}
                        // @ts-ignore
                        color={
                            authenticatedUser &&
                            authenticatedUser.favoritos &&
                            authenticatedUser.favoritos.find((id) => id === product.id)
                                ? "error"
                                : "grey"
                        }
                    />
                </IconButton>
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
