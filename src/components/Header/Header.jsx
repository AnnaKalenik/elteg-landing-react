import React from 'react';
import Promo from './Promo.jsx';

import '../../css/header.css';

const Header = () => {
    const addNav = (event) => {
        event.currentTarget.classList.toggle('active');

        const nav = document.querySelector('.header_nav_list');

        nav.classList.toggle('active');
    }

    return (
        <header className="header" id="header">
            <div className="container">

                <div className="header_main">
                    <div className="header logo"><a href="#header">Элтэг <span>+</span></a></div>
                    <nav className="header_nav">
                        <ul className="header_nav_list">
                            <li className="header_nav_list_item"><a href="#header">Главная</a></li>
                            <li className="header_nav_list_item"><a href="#about">О компании</a></li>
                            <li className="header_nav_list_item"><a href="#services">Услуги</a></li>
                            <li className="header_nav_list_item"><a href="#contacts">Контакты</a></li>
                            <li className="header_nav_list_item"><a href="#form">Заявка</a></li>
                        </ul>
                        <button className="header_btn_burger" onClick={addNav}>
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