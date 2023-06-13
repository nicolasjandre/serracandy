import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import './style.css';

export function Footer() {
    return (
        <div className="footer">
            <div className='emailList'>
                <div className='email'>
                    <h2>NEWSLETTER</h2>
                    <input type="email" placeholder='Email para contato'/>
                    <button className='send'><SendIcon /></button>
                </div>

                <div className='socialMedia'>
                    <ul>
                        <li className='socialLink'><InstagramIcon fontSize='large'/></li>
                        <li className='socialLink'><FacebookIcon fontSize='large'/></li>
                        <li className='socialLink'><YouTubeIcon fontSize='large'/></li>
                        <li className='socialLink'><TwitterIcon fontSize='large'/></li>
                    </ul>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='brand'>
                    <h2>Luna</h2>
                    <span>A experiência artesanal que você merece</span>
                </div>
                <div className='company'>
                    <ul>
                        <li className='companyLinks'>Sobre</li>
                        <li className='companyLinks'>Trabalhe Conosco</li>
                        <li className='companyLinks'>Eventos</li>
                    </ul>
                </div>
                <div className='terms'>
                    <ul>
                        <li className='termsLiks'>Termos e Condições</li>
                        <li className='termsLiks'>Política de Privacidade</li>
                        <li className='termsLiks'>Política de Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Marlon