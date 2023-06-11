import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/cadastro",
        element: <Cadastro />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/contato",
        element: <Contato />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/sobre",
        element: <Sobre />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/produto/:productId",
        element: <Produto />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CartContextProvider>
                <CartModal />
                <RouterProvider router={router} />
            </CartContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
