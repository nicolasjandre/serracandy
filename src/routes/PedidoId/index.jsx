import { Box, Stack, Typography } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { ProductCheckoutCard } from "../../components/ProcutCheckoutCard";
import { formatPreco } from "../../utils/formatPreco";
import { formatarData } from "../../utils/formatData";

export function PedidoId() {
    const [pedido, setPedido] = useState(null);
    const { authenticatedUser } = useContext(AuthContext);
    const [produtos, setProdutos] = useState([]);
    const { pedidoId } = useParams();

    useEffect(() => {
        const fetchPedido = async () => {
            const response = await api.get(`/pedidos/${pedidoId}`);
            setPedido(response.data);
        };

        fetchPedido();
    }, []);

    useEffect(() => {
        const fetchProdutos = async () => {
            setProdutos([]);

            if (pedido) {
                const promises = pedido.itens.map(async (produto) => {
                    const response = await api.get(`/produtos/${produto.idProduto}`);

                    const produtoDb = {
                        ...response.data,
                        qtdCarrinho: produto.quantidade,
                    };
                    return produtoDb;
                });

                const produtos = await Promise.all(promises);
                setProdutos(produtos);
            }
        };

        fetchProdutos();
    }, [pedido]);

    return (
        <>
            <Header />
            <Box maxWidth="1200px" marginX="auto" my="3vw">
                <Link to="/pedidos" style={{ textDecoration: "none" }}>
                    <Typography
                        fontSize="clamp(1.5rem, 2.5vw, 2.5rem)"
                        fontFamily="Abril Fatface"
                        color="#000000"
                        sx={{
                            ":hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        VOLTAR
                    </Typography>
                </Link>
                <Stack>
                    <Stack my="2vw" flexDirection="row" justifyContent="space-between">
                        <Typography fontSize="1.6vw">
                            ID do pedido: {pedido && pedido.id}
                        </Typography>
                        <Typography fontSize="1.6vw">
                            {pedido && formatarData(new Date(pedido.data))}
                        </Typography>
                    </Stack>
                </Stack>
                {produtos &&
                    produtos.map((product) => (
                        <ProductCheckoutCard key={product.id + "produto"} item={product} />
                    ))}
                <Stack flexDirection="row" justifyContent="space-between">
                    <Typography my="2vw" fontSize="1.6vw">
                        Frete: {pedido && formatPreco(pedido.frete)}
                    </Typography>
                    <Typography my="2vw" fontSize="1.6vw">
                        Desconto:{" "}
                        {pedido && pedido.desconto > 0
                            ? formatPreco(pedido.desconto)
                            : "R$ 0,00"}
                    </Typography>
                    <Typography my="2vw" fontSize="1.6vw">
                        Total: {pedido && formatPreco(pedido.valorTotal)}
                    </Typography>
                </Stack>
            </Box>
            <Footer />
        </>
    );
}
