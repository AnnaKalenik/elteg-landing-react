import React from 'react';
import Promo from './Promo.jsx';

import '../../css/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">

                <div className="header_main">
                    <div className="header logo"><a href="#">Элтэг <span>+</span></a></div>
                    <nav className="header_nav">
                        <ul className="header_nav_list">
                            <li className="header_nav_list_item"><a href="#">Главная</a></li>
                            <li className="header_nav_list_item"><a href="#">О компании</a></li>
                            <li className="header_nav_list_item"><a href="#">Услуги</a></li>
                            <li className="header_nav_list_item"><a href="#">Контакты</a></li>
                            <li className="header_nav_list_item"><a href="#">Заявка</a></li>
                        </ul>
                        <button className="header_btn_burger" onClick={(e) => e.target.classList.toggle('active')}>
                            <span className="burger_elem1"></span>
                            <span className="burger_elem2"></span>
                            <span className="burger_elem3"></span>
                        </button>
                    </nav>
                </div>
                <Promo />

            </div>
        </header>
    )
}

export default Header;