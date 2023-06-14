// @ts-nocheck
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CartContext, CartContextProvider } from "../../contexts/CartContext";
import { formatPreco } from "../../utils/formatPreco";
import { DefaultButton } from "../../components/DefaultButton";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ProductCheckoutCard } from "../../components/ProcutCheckoutCard";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ed7201",
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderColor: (theme) => theme.palette.primary.main,
                },
                input: {
                    color: (theme) => theme.palette.primary.main,
                },
            },
        },
    },
});

function CarrinhoCompras({ handleRemoveAll }) {
    const { cart, cartTotal } = useContext(CartContext);
    const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
    const [pedidos, setPedidos] = useState([]);
    const [cupom, setCupom] = useState("");
    const navigate = useNavigate();
    const frete = 22.7;

    useEffect(() => {
        const fetchPedidosDb = async () => {
            const response = await api.get("/pedidos");
            setPedidos(response.data);
        };

        fetchPedidosDb();
    }, []);

    useEffect(() => {
        if (
            (Object.keys(authenticatedUser).length === 0 &&
                authenticatedUser.constructor === Object) ||
            localStorage.getItem("serracandy@token") === null
        ) {
            navigate("/login");
            toast.error("Você precisa estar logado para finalizar a compra!");
        }
    }, []);

    async function adicionarPedido(novoPedido) {
        const updatedUser = { ...authenticatedUser };
        updatedUser.pedidos = [...(updatedUser.pedidos || []), novoPedido];

        await api.patch(`/users/${authenticatedUser.id}`, {
            pedidos: updatedUser.pedidos,
        });

        await api.post("/pedidos", novoPedido);

        setAuthenticatedUser(updatedUser);
    }

    const aplicarDesconto = () => {
        if (cupom === "SERRATEC10") {
            return cartTotal * 0.9;
        }
        return cartTotal;
    };

    const handleCupomChange = (event) => {
        setCupom(event.target.value);
    };

    async function atualizarEstoque(produto) {
        await api.patch(`/produtos/${produto.id}`, {
            quantidade: produto.quantidade - produto.qtdCarrinho,
        });
    }

    const handleFinalizarCompra = async () => {
        const novoPedido = {
            itens: cart.map((item) => ({ idProduto: item.id, quantidade: item.qtdCarrinho })),
            frete,
            desconto: parseFloat((cartTotal - aplicarDesconto()).toFixed(2)),
            valorTotal: aplicarDesconto() + frete,
            idUser: authenticatedUser.id,
            id: pedidos.length + 1,
            data: new Date(),
        };

        await adicionarPedido(novoPedido);
        await cart.forEach((produto) => {
            atualizarEstoque(produto);
        });
        toast.success("Compra finalizada com sucesso!");
        handleRemoveAll();
        navigate("/pedidos");
    };

    async function finalizarCompra() {
        await handleFinalizarCompra();
    }

    return (
        <Container maxWidth="md" sx={{ mb: "70px" }}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Typography
                        variant="h4"
                        display="flex"
                        justifyContent="center"
                        align="center"
                        alignItems="center"
                        sx={{ mb: 2.5 }}
                    >
                        Carrinho de Compras
                        <ShoppingCartIcon fontSize="large" sx={{ ml: "10px" }} />
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    {cart.map((item) => (
                        <ProductCheckoutCard key={item.id} item={item} />
                    ))}
                </Grid>
                <Grid item xs={5}>
                    <Paper sx={{ p: 2 }}>
                        <Grid container spacing={2}>
                            <ThemeProvider theme={theme}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Código promocional"
                                        fullWidth
                                        InputProps={{
                                            color: "primary",
                                        }}
                                        value={cupom}
                                        onChange={handleCupomChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="CEP"
                                        fullWidth
                                        InputProps={{
                                            color: "primary",
                                        }}
                                    />
                                </Grid>
                            </ThemeProvider>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" align="right" sx={{ mt: 1 }}>
                                    Frete: {formatPreco(frete)}
                                </Typography>
                                <Typography variant="subtitle1" align="right">
                                    Subtotal: {formatPreco(cartTotal + frete)}
                                </Typography>
                                <Typography variant="subtitle1" align="right">
                                    Desconto: {formatPreco(cartTotal - aplicarDesconto())}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    align="right"
                                    sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                                >
                                    Total: {formatPreco(aplicarDesconto() + frete)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <DefaultButton sx={{ width: "100%" }} onClick={finalizarCompra}>
                                    Finalizar Compra
                                </DefaultButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export function Checkout() {
    const { clearCart } = useContext(CartContext);
    return (
        <CartContextProvider>
            <Header />
            <CarrinhoCompras handleRemoveAll={clearCart} />
            <Footer />
        </CartContextProvider>
    );
}
