import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HomepageBanner } from "../../components/HomepageBanner";
import { ProductCard } from "../../components/ProductCard";
import { Box, Stack, Typography } from "@mui/material";

export function Home() {
    return (
        <>
            <Box padding="20px">
                <Header />

                <HomepageBanner imgAlt={null} />

                <Box>
                    <Typography
                        marginY="2.5vw"
                        textAlign="center"
                        fontSize="4rem"
                        fontFamily="Montserrat"
                    >
                        Nossos destaques
                    </Typography>
                    <Stack
                        gap="30px"
                        flexWrap="wrap"
                        justifyContent="space-evenly"
                        flexDirection="row"
                    >
                        <ProductCard favorite={true} imgAlt={null} imgSrc={null} />
                        <ProductCard favorite={true} imgAlt={null} imgSrc={null} />
                        <ProductCard favorite={false} imgAlt={null} imgSrc={null} />
                        <ProductCard favorite={false} imgAlt={null} imgSrc={null} />
                        <ProductCard favorite={true} imgAlt={null} imgSrc={null} />
                        <ProductCard favorite={false} imgAlt={null} imgSrc={null} />
                    </Stack>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

// Nicolas
