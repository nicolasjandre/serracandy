import { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import emailjs from "@emailjs/browser";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Box } from "@mui/material";

export function Contato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos!!");
            return;
        }
        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };
        emailjs
            .send("service_wmdbt0l", "template_2x5oeej", templateParams, "xS0C4br-PZ1hLySxv")
            .then(
                (response) => {
                    console.log("EMAIL ENVIADO", response.status, response.text);
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (err) => {
                    console.log("Erro: ", err);
                }
            );
    }

    return (
        <>
            <Header />
            <Box maxWidth="1200px" display="flex" m="6vw auto">
                <form
                    onSubmit={sendEmail}
                    style={{ backgroundColor: "#EBC5A3", display: "flex", alignItems: "center" }}
                >
                    <div style={{ margin: "0 10vw" }}>
                        <h1
                            style={{
                                marginTop: 25,
                                marginBottom: "14px",
                                fontSize: 35,
                            }}
                        >
                            {" "}
                            Fale conosco{" "}
                        </h1>
                        <br />

                        <TextField
                            style={{
                                marginBottom: "14px",
                                padding: 1,
                            }}
                            label="Nome"
                            variant="outlined"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <br />

                        <TextField
                            style={{
                                marginBottom: "14px",
                                padding: 1,
                            }}
                            label="Email"
                            variant="outlined"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <br />
                        <br />

                        <TextField
                            style={{
                                marginBottom: "14px",
                                padding: 5,
                            }}
                            placeholder="Digite seu feedback"
                            label="Seu Feedback"
                            multiline
                            rows={4}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                        <Button
                            variant="contained"
                            style={{
                                display: "flex",
                                margin: 40,
                                marginTop: 20,
                                backgroundColor: "#ED7201",
                            }}
                            type="submit"
                            value="Enviar"
                            endIcon={<SendIcon />}
                        >
                            Enviar
                        </Button>
                    </div>
                </form>

                <Box
                    component="img"
                    sx={{
                        height: "auto",
                        width: "100%",
                        maxHeight: "600px",
                        maxWidth: "1858px",
                    }}
                    alt=""
                    src="images/paes-contato.png"
                />
            </Box>
            <Footer />
        </>
    );
}
