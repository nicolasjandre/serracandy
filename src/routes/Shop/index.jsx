import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { HomeShopProductCard } from "../../components/ProductCard/HomeShopProductCard";


export function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("/produtos");

            const filteredProducts = response.data.filter((item) => item.quantidade > 0);

            setProducts(filteredProducts);
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            {products.map((product) => (
                // @ts-ignore
                <HomeShopProductCard key={product.id} product={product} user={null} />
            ))}
            <Footer />
        </>
    );
}
