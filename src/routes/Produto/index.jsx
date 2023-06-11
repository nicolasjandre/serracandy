import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../hooks/useProducts";
import { Box, Input, Link, Stack, Typography } from "@mui/material";
import { formatPreco } from "../../utils/formatPreco";
import { DefaultButton } from "../../components/DefaultButton";

export function Produto() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId).then((product) => setProduct(product));
    }, []);

    return (
        <>
            <Header />
            <Box padding="20px">
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
                            <Input
                                defaultValue={1}
                                inputComponent={}
                                sx={{
                                    width: "20%",
                                    backgroundColor: "orange",
                                    fontFamily: "Montserrat",
                                    textAlign: "center",
                                    justifyContent: "center",
                                }}
                            />
                            <DefaultButton
                                sx={{
                                    fontFamily: "Montserrat",
                                    width: "100%",
                                    minHeight: "40px",
                                    maxHeight: "3.5vw",
                                    fontSize: "clamp(1rem, 1.5vw, 2rem)",
                                }}
                            >
                                Comprar
                            </DefaultButton>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

// Marlon
