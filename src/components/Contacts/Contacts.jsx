import React from 'react';
import '../../css/contacts.css';

const Contacts = () => {
    return (
        <section className="section contacts">
            <div className="container">

                <div className="contacts_wrapper">
                    <h2 className="title white">Контактная информация<span></span></h2>
                    <ul className="contacts_info">
                        <li className="contacts_address">
                            <div>Беларусь, г.Минск,<br /> Бетонный проезд 13,<br /> офис 29</div>
                        </li>
                        <li  className="contacts_phone">
                            <div><span>Офис/Факс</span><br /> +375(17) 373-10-50</div>
                            <div><span>Управляющий</span><br /> +375(29) 177-35-62</div>
                            <div><span>Главный инженер</span><br /> +375(29) 308-50-70</div>
                        </li>
                        <li className="contacts_email">
                            <div>eltegplus@gmail.com</div>
                        </li>
                        <li className="contacts_time">
                            <div>Время работы:<br /><span>Пн-Пт</span> с 8:00 до 17:00<br /><span>Сб и Вс</span> выходные дни</div>
                        </li>
                    </ul>
                    <button className="button">Лицензия</button>
                </div>
                
            </div>
        </section>
    );
};

export default Contacts;