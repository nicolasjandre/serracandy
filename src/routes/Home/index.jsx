import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HomepageBanner } from "../../components/HomepageBanner";
import { ProductCard } from "../../components/ProductCard";
import { Box, Stack, Typography } from "@mui/material";
import { DefaultButton } from "../../components/DefaultButton";
import { useMostFavoritedProducts } from "../../hooks/useProducts";
import { useEffect, useState } from "react";

export function Home() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        useMostFavoritedProducts().then((products) => setProducts(products));
    }, [])

    return (
        <>
            <Box padding="20px">
                <Header />

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
                            <ProductCard key={product.id} product={product} user={null} />
                        ))}
                    </Stack>
                    <Box display="flex" justifyContent="center" my="4vw">
                        <DefaultButton>
                            <Typography fontSize="1.5vw" width="20vw" maxWidth="280px">
                                VER TODOS
                            </Typography>
                        </DefaultButton>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

// Nicolas
