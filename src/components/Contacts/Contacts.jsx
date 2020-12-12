import React from 'react';

const Contacts = () => {
    return (
        <section className="section contacts">
            <div className="container">

                <div className="contacts_wrapper">
                    <h2 className="title">Контактная информация<span></span></h2>
                    <div className="contacts_address">
                        <p>Беларусь, г.Минск, Бетонный проезд 13, офис 29</p>
                    </div>
                    <div className="contacts_phone">
                        <p><span>Офис/Факс</span> +375(17) 373-10-50</p>
                        <p><span>Управляющий</span> +375(29) 177-35-62</p>
                        <p><span>Главный инженер</span> +375(29) 308-50-70</p>
                    </div>
                    <div className="contacts_email">
                        <p>eltegplus@gmail.com</p>
                    </div>
                    <div className="contacts_time">
                        <p>Время работы:<br /><span>Пн-Пт</span> с 8:00 до 17:00<br /><span>Сб и Вс</span> выходные дни</p>
                    </div>
                    <button className="contacts_license">Лицензия</button>
                </div>
                
            </div>
        </section>
    );
};

export default Contacts;