import React from 'react';
import Promo from './Promo.jsx';

import '../../css/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">

                <div className="header_main">
                    <div className="header_logo"><a href="#">Элтэг <span>+</span></a></div>
                    <nav className="header_nav">
                        <ul className="header_nav_list">
                            <li className="header_nav_list_item"><a href="#">Главная</a></li>
                            <li className="header_nav_list_item"><a href="#">О компании</a></li>
                            <li className="header_nav_list_item"><a href="#">Услуги</a></li>
                            <li className="header_nav_list_item"><a href="#">Расчеты</a></li>
                            <li className="header_nav_list_item"><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <Promo />

            </div>
        </header>
    );
};

export default Header;