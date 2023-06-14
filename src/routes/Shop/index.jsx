import { api } from "../../services/api";
import { useEffect, useState, useContext } from "react";

import { Header } from "../../components/Header";
import  Search  from "../../components/Search";
import { HomeShopProductCard } from "../../components/ProductCard/HomeShopProductCard";
import { Footer } from "../../components/Footer";

import "./style.css";

export function Shop() {
    const [products, setProducts] = useState([]);
    const [produtosOrdenados, setProdutosOrdenados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("/produtos");
            const filteredProducts = response.data.filter((item) => item.quantidade > 0);

            setProducts(filteredProducts);
            setProdutosOrdenados(filteredProducts);
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />

            <div>
                <Search produtos={products} setProdutos={setProdutosOrdenados} />
            </div>

            <div className="shop">
                {produtosOrdenados.length > 0 ? produtosOrdenados.map ((product) => (
                    // @ts-ignore
                    <HomeShopProductCard key={product.id} product={product} user={null} />
                )) : (
                    <p>Nenhum produto encontrado!</p>
                )}
            </div>
            <Footer />
        </>
    );
}
