import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from 'react-router-dom';
import { DefaultButton } from "../../components/DefaultButton";
import { Typography } from "@mui/material";
import { useState } from "react";

import '../../components/Login/style.css';

export function Login() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState([])

    const handleChangeNome = (e) => {
        setNome(e.target.value)
    }

    const handleChangeSenha = (e) => {
        setSenha(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        setUsuario([...usuario, {
            nome: nome, 
            senha: senha
        }])

        resetForm()
    }

    const resetForm = () => {
        setNome('')
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
                        <h2>Login</h2>
                        <form className="form" onSubmit={handleSubmitForm}>
                            <div className="campo-form">
                                <label>Email</label>
                                <input type="text" value={nome} onChange={handleChangeNome}/>
                            </div>
                            <div className="campo-form">
                                <label>Senha</label>
                                <input type="password" value={senha} onChange={handleChangeSenha}/>
                            </div>
                            <div className="links">
                                <Link className='link' to="/sobre">Recuperar senha</Link>
                                <Link className='link' to="/Cadastro">Cadastre-se</Link>
                            </div>
                            <DefaultButton className="button-form" type="submit">
                                <Typography fontSize="1vw" width="10vw" maxWidth="200px" alignItems="center" >
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