import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { HomeShopProductCard } from "../../components/ProductCard/HomeShopProductCard";

import "./style.css";


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
            <div className="vitrine">
                {products.map((product) => (
                    // @ts-ignore
                    <HomeShopProductCard key={product.id} product={product} user={null} />
                ))}
            </div>
            <Footer />
        </>
    );
}
