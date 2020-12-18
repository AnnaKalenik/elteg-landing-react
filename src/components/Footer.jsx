import React from 'react';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="promo_wrapper">
                    <div className="footer logo"><a href="#header">Элтэг <span>+</span></a></div>
                    <div className="footer_copyright">ООО «ЭлтэгПлюс» &copy;2020</div>
                    <div className="footer_developer">Дизайн и разработка<br /><span>annakalenikalex@gmail.com</span></div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;