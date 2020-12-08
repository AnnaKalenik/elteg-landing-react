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
                            <div className="header_logo"><a href="#"></a>ЭлтэгПлюс</div>
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
                            <h2>Установка и обслуживание систем безопасности</h2>
                            <button class="button">Рассчитать стоимость</button>
                            <button class="button">Оставить заявку</button>
                        </div>

                    </div>
                </section>

                <section className="about">
                    <div className="container">

                        <div className="about_wrapper">
                            <h3 className="title">О нас</h3>
                            <p>ООО «ЭлтэгПлюс» занимается реализацией широкого комплекса противопожарных проектов в сфере промышленного и гражданского строительства, 
                                а также проектов заказчиков любой сложности и масштаба. Уже сегодня  наша компания оказывает максимально широкий спектр услуг на всех 
                                стадиях реализации противопожарных проектов.</p>
                            <p>Мы работаем с многими известными компаниям в Минске и Республике Беларусь. Оказываем помощь от простой консультации до сдачи объекта в
                                эксплуатацию. Услуги нашей компании всегда отличаться высоким качеством, ценой, сроком исполнения.</p> 
                        </div>

                    </div>
                </section>

                <section className="services">
                    <div className="container">

                        <div className="services_wrapper">
                            <h3 className="title">Услуги</h3>
                            <div className="service_block1">
                                <h3>Установка противопожарных систем</h3>
                                <ul>
                                    <li className="service">
                                        <h3>Пожарная сигнализация</h3>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                    <li className="service">
                                        <h3>Система оповещения</h3>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                    <li className="service">
                                        <h3>Система пожаротушения</h3>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                    <li className="service">
                                        <h3>Противодымная защита</h3>
                                        <img src="https://via.placeholder.com/200x200" />
                                    </li>
                                </ul>
                            </div>
                            <div className="service_block2">
                                <h3>Электромонтажные работы</h3>
                                <p>Качественное проведение электромонтажных работ играет важную роль в любом здании. ООО «ЭлтэгПлюс» выполняет все виды электромонтажных работ на различных объектах.</p>
                            </div>
                            <div className="service_block3">
                                <h3>Техническое обслуживание</h3>
                                <p>Предоставляем услуги по гарантийному и послегарантийному техническому обслуживанию охранных и пожарных систем, смонтированных нашей, или другими организациями.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="clients">
                    <div className="container">

                        <div className="clients_wrapper">
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        
                    </div>
                </section>

            </div>
        );
    }
}

export default App;