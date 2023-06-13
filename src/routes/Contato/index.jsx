import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import emailjs from '@emailjs/browser'
import image2 from './img/769e51d6baa87e27001aadd48de9a4a4.png'
import imagem from './img/b5afa4e4d1ae81b8e9762f49acf90040.png'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Contato() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos!!")
            return;
        }
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_wmdbt0l", "template_2x5oeej", templateParams, "xS0C4br-PZ1hLySxv")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')
            }, (err) => {
                console.log('Erro: ', err)

            })
    }

    return (

        
        <div className="Container"
        
            style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                flexDirection: "column",
                padding: "14px"
            }}>

            <CssBaseline />
            <Container maxWidth="sm"
                style={{ marginLeft: 350 }}>


                <form className="form"
                    style={{
                        marginBottom: 100,
                        padding: 10, width: "100%",
                        marginLeft: 300
                    }} onSubmit={sendEmail} >

                    <div className="imagens"
                        style={{ marginRight: 10000 }}>
                        <img src={image2} alt="Imagem serracandy"
                            style={{
                                width: 395,
                                marginTop: 50,
                                height: 460,
                                marginLeft: -600,
                                position: "absolute",
                                border: "5px solid #ffffff4a"
                            }} />

                        <img src={imagem} alt="Imagem serracandy"
                            style={{
                                width: 395,
                                marginTop: 120,
                                height: 460,
                                marginLeft: -350,
                                position: "absolute",
                                border: "5px solid #ffffffa7"
                            }} />
                    </div>

                    <div className="Formulario"
                        style={{
                            marginTop: 90,
                            marginLeft: 150
                        }}>

                        <h1 className="title"
                            style={{
                                marginTop: 25,
                                marginBottom: "14px",
                                fontSize: 35
                            }}>    Fale conosco   </h1>
                        <br />

                        <TextField className="input"
                            style={{
                                marginBottom: "14px",
                                padding: 1
                            }} label="Nome" variant="outlined" type="text" onChange={(e) => setName(e.target.value)}
                            value={name} />
                        <br />

                        <TextField className="input"
                            style={{
                                marginBottom: "14px",
                                padding: 1
                            }} label="Email" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                        <br />
                        <br />

                        <TextField className="textarea"
                            style={{
                                marginBottom: "14px",
                                padding: 5
                            }} placeholder="Digite seu feedback" label="Seu Feedback" multiline rows={4} onChange={(e) => setMessage(e.target.value)}
                            value={message} />

                        <Button variant="contained"
                            style={{
                                display: "flex",
                                margin: 40,
                                marginTop: 20,
                                backgroundColor: "#ED7201"
                            }} type="submit" value="Enviar" endIcon={<SendIcon />}>Enviar</Button>

                    </div>
                </form>

            </Container>
            );

        </div>

    );
}


// Hechellin