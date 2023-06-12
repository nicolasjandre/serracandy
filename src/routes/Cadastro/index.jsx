import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { DefaultButton } from "../../components/DefaultButton";
import { Typography } from "@mui/material";
import { useState } from "react";

import '../../components/Login/style.css';

export function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState([])

    const handleChangeNome = (e) => {
        setNome(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeSenha = (e) => {
        setSenha(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        setUsuario([...usuario, {
            nome: nome, 
            email: email,
            senha: senha
        }])

        resetForm()
    }

    const resetForm = () => {
        setNome('')
        setEmail('')
        setSenha('')
    }

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
                                <input type="text" id="nome" value={nome} onChange={handleChangeNome}/>
                            </div>
                            <div className="campo-form">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={email} onChange={handleChangeEmail}/>
                            </div>
                            <div className="campo-form">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" value={senha} onChange={handleChangeSenha}/>
                            </div>
                            <DefaultButton className="button-form" type="submit">
                                <Typography fontSize="1vw" width="10vw" maxWidth="200px"  >
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