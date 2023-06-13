import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "react-modal";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Box } from "@mui/material";
Modal.setAppElement("#root");

export function Sobre() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffffbc",
            width: "700px",
            height: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
    };

    return (
        <>
            <Header />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxHeight: "500px",
                    margin: "6vw auto 7vw",
                    backgroundColor: "#EBC5A3",
                    maxWidth: "1200px",
                }}
            >
                <div
                    style={{
                        padding: "60px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "35px",
                            marginBottom: "14px",
                        }}
                    >
                        Sobre nós
                    </h1>

                    <p style={{ fontSize: "20px" }}>
                        Nós somos o grupo 01 da residência de software,
                        <br />
                        2023.1 nesse site desenvolvemos um modelo
                        <br />
                        de e-commerce ligada a área de alimentos,
                        <br />
                        neste site você terá a experiência de navegar em uma
                        <br />
                        loja virtual online, este site foi construído através
                        <br />
                        da linguagem de programação JavaScript,
                        <br />
                        <br />
                        juntamente com o framework ReactJs
                    </p>
                    <Button
                        onClick={handleOpenModal}
                        variant="contained"
                        href="#contained-buttons"
                        style={{
                            backgroundColor: "#ED7201",
                            marginTop: "20px",
                            left: "150px",
                        }}
                    >
                        Saber mais
                    </Button>
                </div>
                <div
                    style={{
                        maxHeight: "500px",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: "auto",
                            width: "100%",
                            maxHeight: "100%",
                        }}
                        alt="Doces"
                        src="images/doces-sobre.png"
                    />
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    // @ts-ignore
                    style={customStyles}
                >
                    <h1
                        style={{
                            fontSize: "45px",
                            marginBottom: "20px",
                        }}
                    >
                        Desenvolvedores:
                    </h1>
                    <ul>
                        <li>NICOLAS JANDRE DE FARIA</li>
                        <li>PEDRO DE PAULA OLIVEIRA</li>
                        <li>MARLON VIANA SOUZA</li>
                        <li>JOANA ALEXANDRE DE SOUZA</li>
                        <li>HECHELLIN JESSI MACHADO VIANA</li>
                    </ul>
                    <Button
                        onClick={handleCloseModal}
                        variant="contained"
                        style={{
                            backgroundColor: "#ED7201",
                            marginTop: "100px",
                        }}
                    >
                        Voltar
                    </Button>
                </Modal>
            </div>
            <Footer />
        </>
    );
}
