import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HomepageBanner } from "../../components/HomepageBanner";
import { HomeShopProductCard } from "../../components/ProductCard/HomeShopProductCard";
import { Box, Stack, Typography } from "@mui/material";
import { DefaultButton } from "../../components/DefaultButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("/produtos");

            const filteredProducts = response.data.filter((item) => item.quantidade > 0);

            const sortedProducts = [...filteredProducts].sort(
                (a, b) => b.feedbacksPositivos - a.feedbacksPositivos
            );

            setProducts(sortedProducts.slice(0, 6));
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <Box padding="20px">
                <HomepageBanner imgAlt={null} />

                <Box>
                    <Typography
                        marginY="1vw"
                        textAlign="center"
                        fontSize="3rem"
                        fontFamily="Montserrat"
                    >
                        Nossos destaques
                    </Typography>
                    <Stack
                        columnGap="100px"
                        rowGap="40px"
                        flexWrap="wrap"
                        justifyContent="space-evenly"
                        flexDirection="row"
                    >
                        {products.map((product) => (
                            // @ts-ignore
                            <HomeShopProductCard key={product.id} product={product} />
                        ))}
                    </Stack>
                    <Box display="flex" justifyContent="center" my="4vw">
                        <Link to="/shop">
                            <DefaultButton sx={{ textDecoration: "none" }}>
                                <Typography
                                    textAlign="center"
                                    fontSize="1.5vw"
                                    width="20vw"
                                    maxWidth="280px"
                                >
                                    VER TODOS
                                </Typography>
                            </DefaultButton>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

// Nicolas
