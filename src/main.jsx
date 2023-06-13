import { ThemeProvider } from "@mui/material";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartModal } from "./components/Modal/CartModal";
import { AuthContextProvider } from "./contexts/AuthContext";
import { CartContextProvider } from "./contexts/CartContext";
import { Cadastro } from "./routes/Cadastro";
import { Checkout } from "./routes/Checkout";
import { Contato } from "./routes/Contato";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Produto } from "./routes/Produto";
import { Shop } from "./routes/Shop";
import { Sobre } from "./routes/Sobre";
import theme from "./styles/theme";

const Wrapper = ({ children }) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AuthContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Wrapper>
                            <CartModal />
                            <ToastContainer autoClose={1800} />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/cadastro" element={<Cadastro />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/contato" element={<Contato />} />
                                <Route path="/shop" element={<Shop />} />
                                <Route path="/sobre" element={<Sobre />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/produto/:productId" element={<Produto />} />
                            </Routes>
                        </Wrapper>
                    </BrowserRouter>
                </CartContextProvider>
            </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
