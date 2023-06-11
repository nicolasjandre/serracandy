import { Box, Divider, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { handleEscKey } from "../../utils/handleEscKey";
import { CartProductCard } from "../../components/ProductCard/CartProductCard";
import { Close, ShoppingCart } from "@mui/icons-material";
import { DefaultButton } from "../../components/DefaultButton";
import { formatPreco } from "../../utils/formatPreco";

export function CartModal() {
    const { isCartModalOpen, setCartModalOpen, cart, cartTotal } = useContext(CartContext);

    function handleCloseModal() {
        setCartModalOpen(false);
    }

    handleEscKey(handleCloseModal);

    return (
        <Drawer
            PaperProps={{
                sx: {
                    width: "500px",
                },
            }}
            anchor="right"
            open={isCartModalOpen}
        >
            <Box display="flex" flexDirection="column" alignItems="center" p="1.3rem">
                <IconButton
                    onClick={handleCloseModal}
                    // @ts-ignore
                    color="orange"
                    aria-label="Adicionar ao carrinho"
                    sx={{
                        position: "absolute",
                        right: "20px",
                        top: "27px",
                        cursor: "pointer",
                        p: "0",
                    }}
                >
                    <Close color="error" fontSize="large" />
                </IconButton>
                <Typography
                    display="flex"
                    alignItems="center"
                    mb="2rem"
                    variant="h1"
                    fontSize="2.2rem"
                    fontFamily="Montserrat"
                >
                    Carrinho{" "}
                    <ShoppingCart
                        // @ts-ignore
                        color="orange"
                        fontSize="large"
                        sx={{ marginLeft: "10px" }}
                    />
                </Typography>
                <Stack width="100%" spacing="1.5rem">
                    {cart.length > 0 ? (
                        cart.map((prod) => (
                            <Box key={prod.id}>
                                <CartProductCard product={prod} />
                                <Divider sx={{ mt: "25px" }} />
                            </Box>
                        ))
                    ) : (
                        <Typography textAlign="center" fontFamily="Montserrat">
                            Nenhum item adicionado
                        </Typography>
                    )}
                </Stack>
                {cart.length > 0 && (
                    <>
                        <Typography my="1.5rem" fontFamily="Montserrat" fontSize="1.5rem">
                            Total: {formatPreco(cartTotal)}
                        </Typography>
                        <DefaultButton>FINALIZAR COMPRA</DefaultButton>
                    </>
                )}
            </Box>
        </Drawer>
    );
}
