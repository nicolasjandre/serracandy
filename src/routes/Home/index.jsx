import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HomepageBanner } from "../../components/HomepageBanner";
import { HomeShopProductCard } from "../../components/ProductCard/HomeShopProductCard";
import { Box, Stack, Typography } from "@mui/material";
import { DefaultButton } from "../../components/DefaultButton";
import { useMostFavoritedProducts } from "../../hooks/useProducts";
import { useEffect, useState } from "react";
import { CartModal } from "../../components/Modal/CartModal";
import { Link } from "react-router-dom";

export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        useMostFavoritedProducts().then((products) => setProducts(products));
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
                            <HomeShopProductCard key={product.id} product={product} user={null} />
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
