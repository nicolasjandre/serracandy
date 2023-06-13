import { useState } from 'react';
import imagem from './img/138737789269a7750ddc695b9ff2a12c.png';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
Modal.setAppElement('#root')

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
            top: '5%',
            left: '27%',
            right: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '500px',
            backgroundColor: '#ebc5a3bd'
        }
    };

    return (
        <div className="container"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

            <div className='box'
                style={{
                    backgroundColor: '#EBC5A3',
                    padding: '45px',
                    marginTop: "100px"
                }}>
                <h1 className="title"
                    style={{
                        fontSize: '35px',
                        marginBottom: '14px'
                    }}>Sobre nós</h1>

                <p
                    style={{ fontSize: '20px' }}>Nós somos o grupo 01 da residência de software,
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
                    <br /><br />
                    juntamente com o framework ReactJs
                </p>
                <Button
                    className='modal-button'
                    onClick={handleOpenModal}
                    variant="contained"
                    href="#contained-buttons"
                    style={{
                        backgroundColor: '#ED7201',
                        marginTop: '20px',
                        left: "150px"
                    }}
                >
                    Saber mais
                </Button>
            </div>
            <div className='imagens'
                style={{
                    marginLeft: '0px',
                    marginTop: '100px'
                }}>
                <img
                    src={imagem}
                    alt="Imagem do site"
                    style={{
                        width: '900%',
                        height: 'auto', maxWidth: '475px',
                        maxHeight: '432px'
                    }}
                />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <h1 className="title" style={{
                    fontSize: '45px',
                    marginBottom: '20px',
                    color: '#ffffffd2'
                }}>Desenvolvedores:</h1>
                <div className='perfis' style={{
                    textAlign: 'center',
                    marginBottom: '20px'
                }}>

                </div>


                <Button className='modal-button' onClick={handleCloseModal} variant="contained"
                    style={{
                        backgroundColor: "#ED7201",
                        position: 'fixed',
                        justifyContent: "center",
                        marginTop: "450px"
                    }}>
                    Voltar
                </Button>

            </Modal>

        </div>
    );
}


// Hechellin