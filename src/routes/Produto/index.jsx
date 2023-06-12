import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Box, useMediaQuery, Link, Stack, TextField, Typography } from "@mui/material";
import { formatPreco } from "../../utils/formatPreco";
import { DefaultButton } from "../../components/DefaultButton";
import { CartContext } from "../../contexts/CartContext";
import { api } from "../../services/api";

export function Produto() {
    const [product, setProduct] = useState({});
    const { addToCartBySum, setCartModalOpen } = useContext(CartContext);
    const [inputValue, setInputValue] = useState("1");
    const { productId } = useParams();

    // @ts-ignore
    function handleWhenInputQuantityChange(input) {
        if (input.value <= 0) input.value = 1;
        // @ts-ignore
        if (input.value > product.quantidade) input.value = product.quantidade;

        setInputValue(input.value);
    }

    const handleButtonClick = () => {
        addToCartBySum(product, parseInt(inputValue));
        setCartModalOpen(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(`/produtos/${productId}`);
            setProduct(response.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Box padding="20px" mb="5vw">
                <Box maxWidth="1000px" mx="auto" mt="3vw" mb="2vw">
                    <Link
                        href="/shop"
                        fontSize="clamp(1.5rem, 2.5vw, 2.5rem)"
                        fontFamily="Abril Fatface"
                        color="#000000"
                        sx={{
                            textDecoration: "none",
                            ":hover": {
                                textDecoration: "underline",
                                m: "auto",
                            },
                        }}
                    >
                        VOLTAR
                    </Link>
                </Box>
                <Box
                    mx="auto"
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    maxWidth="1000px"
                    height="450px"
                >
                    <Box width="60%">
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                                height: "100%",
                                maxHeight: "100%",
                            }}
                            // @ts-ignore
                            alt={product.imgAlt}
                            // @ts-ignore
                            src={`${
                                // @ts-ignore
                                product && product.imgUrl
                                    ? // @ts-ignore
                                      product.imgUrl
                                    : "public/images/noimage.png"
                            }`}
                        />
                    </Box>

                    <Stack spacing="3rem" width="40%">
                        <Typography
                            px="20px"
                            fontSize="clamp(1.5rem, 4vw, 2rem)"
                            textAlign="center"
                            fontFamily="Montserrat"
                        >
                            {
                                // @ts-ignore
                                product.nome
                            }
                        </Typography>
                        <Typography
                            px="20px"
                            fontSize="clamp(.6rem, 2.5vw, 1.5rem)"
                            textAlign="center"
                            fontFamily="Montserrat"
                        >
                            {
                                // @ts-ignore
                                product.descricao
                            }
                        </Typography>
                        <Typography
                            fontSize="clamp(1rem, 3vw, 2rem)"
                            textAlign="center"
                            fontFamily="Montserrat"
                        >
                            {formatPreco(
                                // @ts-ignore
                                product.preco
                            )}
                        </Typography>

                        <Box height="100%" display="flex" justifyContent="center" alignItems="end">
                            <Box display="flex" minHeight="40px" maxHeight="3.5vw" width="100%">
                                <TextField
                                    id="Qtd"
                                    onChange={(e) => handleWhenInputQuantityChange(e.target)}
                                    label="Qtd"
                                    type="number"
                                    defaultValue="1"
                                    size={
                                        // @ts-ignore
                                        useMediaQuery((theme) => theme.breakpoints.down("xl"))
                                            ? "small"
                                            : "medium"
                                    }
                                    // @ts-ignore
                                    color="orange"
                                    variant="filled"
                                    // @ts-ignore
                                    inputProps={{
                                        style: {
                                            maxHeight: "100%",
                                            fontSize: "1vw",
                                            fontFamily: "Montserrat",
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: "1vw", fontFamily: "Montserrat" },
                                    }}
                                />

                                <DefaultButton
                                    onClick={handleButtonClick}
                                    sx={{
                                        fontFamily: "Montserrat",
                                        width: "100%",

                                        fontSize: "clamp(1rem, 1.5vw, 2rem)",
                                    }}
                                >
                                    Comprar
                                </DefaultButton>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

// Marlon
