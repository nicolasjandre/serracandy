import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Cadastro } from "./routes/Cadastro";
import { Login } from "./routes/Login";
import { Contato } from "./routes/Contato";
import { Shop } from "./routes/Shop";
import { Sobre } from "./routes/Sobre";
import { Checkout } from "./routes/Checkout";
import { Produto } from "./routes/Produto";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import { CartContextProvider } from "./contexts/CartContext";
import { CartModal } from "./components/Modal/CartModal";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CartContextProvider>
                <BrowserRouter>
                    <CartModal />
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
                </BrowserRouter>
            </CartContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
