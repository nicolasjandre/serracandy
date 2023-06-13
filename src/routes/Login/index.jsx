import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DefaultButton } from "../../components/DefaultButton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import "../../styles/LoginCadastro/style.css";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        Object.keys(authenticatedUser).length > 0 &&
            authenticatedUser.constructor === Object ||
            localStorage.getItem("serracandy@token") !== null &&
            navigate("/");
    }, []);

    const handleChangeNome = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeSenha = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            // @ts-ignore
            localStorage.setItem(`serracandy@token`, JSON.stringify(response.data.accessToken));

            setAuthenticatedUser(response.data.user);

            navigate("/shop");
            toast.success(`Boas compras, ${response.data.user.nome}!`);
        } catch (err) {
            toast.error(err.response.data);
        }

        resetForm();
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Header />
            <div className="tela-completa">
                <div className="img">
                    <img src="../../public/images/bolos-padaria.png" alt="Bolos de Padaria" />
                </div>
                <div className="tela-completa-form">
                    <h2>Login</h2>
                    <form className="form" onSubmit={handleSubmitForm}>
                        <div className="campo-form">
                            <label>Email</label>
                            <input type="text" value={email} onChange={handleChangeNome} />
                        </div>
                        <div className="campo-form">
                            <label>Senha</label>
                            <input type="password" value={password} onChange={handleChangeSenha} />
                        </div>
                        <div className="links">
                            <Link className="link" to="/sobre">
                                Recuperar senha
                            </Link>
                            <Link className="link" to="/cadastro">
                                Cadastre-se
                            </Link>
                        </div>
                        <DefaultButton className="button-form" type="submit">
                            <Typography
                                fontSize="1vw"
                                width="10vw"
                                maxWidth="200px"
                                alignItems="center"
                            >
                                ENTRAR
                            </Typography>
                        </DefaultButton>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
// Joana
