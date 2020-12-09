import React from 'react';
import './css/style.css';
class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="elteg-landing">

                <header className="header">
                    <div className="container">

                        <div className="header_wrapper">
                            <div className="header_logo"><a href="#">ЭлтэгПлюс</a></div>
                            <nav className="header_nav">
                                <ul>
                                    <li><a href="#">Главная</a></li>
                                    <li><a href="#">О нас</a></li>
                                    <li><a href="#">Услуги</a></li>
                                    <li><a href="#">Расчеты</a></li>
                                    <li><a href="#">Контакты</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </header>

                <section className="promo">
                    <div className="container">

                        <div className="promo_wrapper">
                            <h2>Установка и обслуживание систем пожарной безопасности</h2>
                            <button class="button">Рассчитать стоимость</button>
                            <button class="button">Оставить заявку</button>
                        </div>

                    </div>
                </section>

                <section className="about">
                    <div className="container">

                        <div className="about_wrapper">
                            <h2 className="title">О нас</h2>
                            <p>ООО «ЭлтэгПлюс» занимается реализацией широкого комплекса противопожарных проектов в сфере промышленного и гражданского строительства, 
                                а также проектов заказчиков любой сложности и масштаба. Уже сегодня  наша компания оказывает максимально широкий спектр услуг на всех 
                                стадиях реализации противопожарных проектов.</p>
                            <p>Мы работаем со многими известными компаниям в Минске и Республике Беларусь. Оказываем помощь от простой консультации до сдачи объекта в
                                эксплуатацию. Услуги нашей компании всегда отличаться высоким качеством, ценой, сроком исполнения.</p> 
                        </div>

                    </div>
                </section>

                <section className="services">
                    <div className="container">

                        <div className="services_wrapper">
                            <h2 className="title">Услуги</h2>
                            <div className="services_service_1">
                                <h3 className="services_service_title">Установка противопожарных систем</h3>
                                <ul>
                                    <li className="services_service_1_item">
                                        <div className="services_service1_item_title">Пожарная сигнализация</div>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                    <li className="services_service_1_item">
                                        <div className="services_service1_item_title">Система оповещения</div>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                    <li className="services_service_1_item">
                                        <div className="services_service1_item_title">Система пожаротушения</div>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                    <li className="services_service_1_item">
                                        <div className="services_service1_item_title">Противодымная защита</div>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                </ul>
                            </div>
                            <div className="services_service_2">
                                <h3 className="services_service_title">Электромонтажные работы</h3>
                                <p>Качественное проведение электромонтажных работ играет важную роль в любом здании. ООО «ЭлтэгПлюс» выполняет все виды электромонтажных работ на различных объектах.</p>
                            </div>
                            <div className="services_service_3">
                                <h3 className="services_service_title">Техническое обслуживание</h3>
                                <p>Предоставляем услуги по гарантийному и послегарантийному техническому обслуживанию охранных и пожарных систем, смонтированных нашей, или другими организациями.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="clients">
                    <div className="container">

                        <div className="clients_wrapper">
                            <h2 className="title">Наши клиенты</h2>
                            <div className="clients_client_image">
                                <img src="https://via.placeholder.com/160x90" alt="logo_green" />
                            </div>
                            <div className="clients_client_image">
                                <img src="https://via.placeholder.com/160x90" alt="logo_oma" />
                            </div>
                            <div className="clients_client_image">
                                <img src="https://via.placeholder.com/160x90" alt="logo_viber" />
                            </div>
                            <div className="clients_client_image">
                                <img src="https://via.placeholder.com/160x90" alt="logo_sanatorium" />
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section className="calculations">
                    <div className="container">

                        <div className="calculations_wrapper">
                            <h2 className="title">Расчеты</h2>
                            <p>Здесь вы можете рассчитать примерную стоимость необходимых услуг.</p>

                        </div>
                        
                    </div>
                </section>

                <section className="request">
                    <div className="container">

                        <div className="request_wrapper">
                            <h2 className="title">Оставить заявку</h2>
                            <p>Для получения полной информации оставьте заявку и мы свяжемся с вами.</p>
                            <form method="POST">
                                <input placeholder="Ваше имя *" required type="text" name="name" />
                                <input placeholder="Номер телефона *" required type="tel" name="phone" />
                                <input placeholder="E-mail *" required type="email" name="email" />
                                <textarea placeholder="Ваше сообщение..." required name="message"></textarea>
                                <button class="button">Отправить</button>
                            </form>
                        </div>
                        
                    </div>
                </section>

                <section className="contacts">
                    <div className="container">

                        <div className="contacts_wrapper">
                            <h2 className="title">Контактная информация</h2>
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
                    <div><a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"></a><a href="https://yandex.by/maps/157/minsk/house/Zk4YcwdjQUIFQFtpfXR4dX9gYg==/?ll=27.503491%2C53.894675&utm_medium=mapframe&utm_source=maps&z=16"></a><iframe src="https://yandex.by/map-widget/v1/-/CCUEF0S~~C" width="100%" height="400" frameborder="0" allowfullscreen="true"></iframe></div>
                </section>

                <footer className="footer">
                    <div class="footer_logo">Элтэг+</div>
                    <div class="footer_copyright">ООО «ЭлтэгПлюс» &copy;2020</div>
                    <div class="footer_copyright">Дизайн и разработка <span>annakalenikalex@gmail.com</span></div>
                </footer>

            </div>
        );
    }
}

export default App;