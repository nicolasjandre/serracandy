import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import './style.css';
export function Header() {
    return (
        <div className='container'>
            <ul className='leftnav'>
                <Link className='link' to="/">HOME</Link>
                <Link className='link' to="/shop">DOCES +</Link>
            </ul>
            
            <div>
                <Link className='logo' to="/">SERRACANDY</Link>
            </div>


            <ul className='rightnav'>
                <Link className='link' to="/sobre">SOBRE</Link>
                <Link className='link' to="/contato">CONTATO</Link>
                <Link className='link' to="/checkout"><ShoppingCartOutlinedIcon /></Link>
                <Link className='link' to="/login"><LoginOutlinedIcon /></Link>
            </ul>
        </div>
    );
}

// Marlon