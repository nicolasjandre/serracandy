import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

import './style.css';
import { IconButton } from '@mui/material';

export function Header() {
    const {setCartModalOpen} = useContext(CartContext)

    return (
        <div className='container'>
            <ul className='leftnav'>
                <Link className='link' to="/">INÍCIO</Link>
                <Link className='link' to="/shop">DOCES +</Link>
            </ul>
            
            <div>
                <Link className='logo' to="/">SERRACANDY</Link>
            </div>


            <ul className='rightnav'>
                <Link className='link' to="/sobre">SOBRE</Link>
                <Link className='link' to="/contato">CONTATO</Link>
                <IconButton
                onClick={() => setCartModalOpen(true)}
                    // @ts-ignore
                    aria-label="Adicionar ao carrinho"
                    sx={{
                        "&:hover": { backgroundColor: "transparent" },
                        cursor: "pointer",
                        p: "0",
                        color: "#000000"
                    }}
                ><ShoppingCartOutlinedIcon/></IconButton>
                <Link className='link' to="/login"><LoginOutlinedIcon /></Link>
            </ul>
        </div>
    );
}

// Marlon