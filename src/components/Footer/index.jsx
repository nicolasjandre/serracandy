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
                    <h2>JOIN OUR MAILING LIST</h2>
                    <input type="email" placeholder='Your Email' />
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
                    <span>the artisanal experience you deserve</span>
                </div>
                <div className='company'>
                    <ul>
                        <li className='companyLinks'>About</li>
                        <li className='companyLinks'>Jobs</li>
                        <li className='companyLinks'>Events</li>
                    </ul>
                </div>
                <div className='terms'>
                    <ul>
                        <li className='termsLiks'>Terms and conditions</li>
                        <li className='termsLiks'>privacy policy</li>
                        <li className='termsLiks'>cookie policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Marlon