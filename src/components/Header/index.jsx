import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

import "./style.css";
import { IconButton } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
    const { setCartModalOpen } = useContext(CartContext);
    const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("serracandy@token");
        setAuthenticatedUser({});
        navigate("/login");
    }

    return (
        <div className="container">
            <ul className="leftnav">
                <Link className="link" to="/">
                    INÍCIO
                </Link>
                <Link className="link" to="/shop">
                    DOCES
                </Link>
                <Link className="link" to="/pedidos">
                    PEDIDOS
                </Link>
            </ul>

            <div>
                <Link className="logo" to="/">
                    SERRACANDY
                </Link>
            </div>

            <ul className="rightnav">
                <Link className="link" to="/sobre">
                    SOBRE
                </Link>
                <Link className="link" to="/contato">
                    CONTATO
                </Link>
                {(Object.keys(authenticatedUser).length > 0 &&
                    authenticatedUser.constructor === Object) ||
                localStorage.getItem("serracandy@token") !== null ? (
                    <p className="link" onClick={handleLogout}>
                        SAIR
                    </p>
                ) : (
                    <Link className="link" to="/login">
                        LOGIN
                    </Link>
                )}
                <IconButton
                    onClick={() => setCartModalOpen(true)}
                    // @ts-ignore
                    aria-label="Adicionar ao carrinho"
                    sx={{
                        "&:hover": { backgroundColor: "transparent" },
                        cursor: "pointer",
                        p: "0",
                        color: "#000000",
                    }}
                >
                    <ShoppingCartOutlinedIcon />
                </IconButton>
            </ul>
        </div>
    );
}

// Marlon
