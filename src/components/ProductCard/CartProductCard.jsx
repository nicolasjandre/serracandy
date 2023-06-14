// @ts-nocheck
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { formatPreco } from "../../utils/formatPreco";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Close } from "@mui/icons-material";

export function CartProductCard({ product }) {
    const { addToCartByInputQuantity, removeProductFromCart, clearCart } = useContext(CartContext);

    function handleWhenInputQuantityChange(input) {
        if (input.value <= 0) input.value = 1;
        if (input.value > product.quantidade) input.value = product.quantidade;

        addToCartByInputQuantity(product, parseInt(input.value));
    }

    function handleRemoveProductFromCart() {
        removeProductFromCart(product);
    }

    function handleRemoveAll() {
        clearCart();
    }


    return (
        <Box display="flex" width="100%" height="100px" position="relative">
            <IconButton
                onClick={() => handleRemoveProductFromCart()}
                // @ts-ignore
                color="orange"
                aria-label="Adicionar ao carrinho"
                sx={{ position: "absolute", right: "0", cursor: "pointer", p: "0" }}
            >
                <Close color="error" />
            </IconButton>
            <Box
                component="img"
                sx={{
                    height: "100%",
                    width: "100px",
                    transitionDuration: "250ms",
                }}
                alt={product.nome}
                src={product.imgUrl ? product.imgUrl : "public/images/noimage.png"}
            />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                pl="20px"
                width="100%"
            >
                <Typography fontFamily="Montserrat">{product.nome}</Typography>
                <Typography fontFamily="Montserrat">
                    Valor un: {formatPreco(product.preco)}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <label id="qtd" style={{ fontFamily: "Montserrat" }}>
                            Qtd:{" "}
                        </label>
                        <TextField
                            onChange={(e) => handleWhenInputQuantityChange(e.target)}
                            id="qtd"
                            type="number"
                            defaultValue={product.qtdCarrinho}
                            size="small"
                            // @ts-ignore
                            color="orange"
                            variant="filled"
                            sx={{ width: "35px", ml: "7px" }}
                            // @ts-ignore
                            inputProps={{
                                sx: {
                                    maxHeight: "100%",
                                    fontSize: "1vw",
                                    fontFamily: "Montserrat",
                                    p: "0",
                                },
                                min: 1,
                                max: 99,
                            }}
                            InputLabelProps={{
                                sx: { display: "none" },
                            }}
                        />
                    </Box>
                    <Typography fontFamily="Montserrat">
                        Total: {formatPreco(product.preco * product.qtdCarrinho)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
