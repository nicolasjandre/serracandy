import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DefaultButton } from "../../components/DefaultButton";
import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../../styles/LoginCadastro/style.css";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";

export function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authenticatedUser && navigate("/")
    }, [])

    const handleChangeNome = (e) => {
        setNome(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeSenha = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users", {
                email,
                password,
                nome,
                favoritos: [],
            });

            console.log(response.data);

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
        setNome("");
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
                    <h2>Cadastro</h2>
                    <form className="form" onSubmit={handleSubmitForm}>
                        <div className="campo-form">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" value={nome} onChange={handleChangeNome} />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                value={password}
                                onChange={handleChangeSenha}
                            />
                        </div>
                        <DefaultButton className="button-form" type="submit">
                            <Typography fontSize="1vw" width="10vw" maxWidth="200px">
                                CADASTRAR
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
