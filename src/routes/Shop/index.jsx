import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeShopProductCard } from "../../components/ProductCard/HomeShopProductCard";
import Search from "../../components/Search";

import { AuthContext } from "../../contexts/AuthContext";
import "./style.css";
import { Box, Pagination } from "@mui/material";
import { getProducts } from "../../services/getProducts";

const pageSize = 6;

export function Shop() {
    const [products, setProducts] = useState([]);
    const [produtosOrdenados, setProdutosOrdenados] = useState([]);
    const { authenticatedUser } = useContext(AuthContext);
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize,
        data: [],
    });

    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;

        window.scrollTo({ top: 0, left: 0 });
        setPagination({ ...pagination, from, to });
    };

    useEffect(() => {
        getProducts(produtosOrdenados, pagination.from, pagination.to).then((response) => {
            setPagination({ ...pagination, count: response.count, data: response.data });
        });
    }, [pagination.from, pagination.to, produtosOrdenados]);

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
                {pagination.data && pagination.data.length > 0 ? (
                    pagination.data.map((product) => (
                        // @ts-ignore
                        <HomeShopProductCard
                            key={product.id}
                            product={product}
                            // @ts-ignore
                            user={authenticatedUser}
                        />
                    ))
                ) : (
                    <p>Nenhum produto encontrado!</p>
                )}
            </div>
            <Box display="flex" justifyContent="center" width="100%" mb="3vw" mt="2vw">
                <Pagination
                    onChange={handlePageChange}
                    count={Math.ceil(pagination.count / pageSize)}
                />
            </Box>
            <Footer />
        </>
    );
}
