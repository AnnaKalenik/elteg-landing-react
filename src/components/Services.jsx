import React from 'react';

import "../css/services.css";

const Services = () => {
    return (
        <section className="section services">
            <div className="container">

                <div className="services_wrapper">
                    <h2 className="title white">Услуги<span></span></h2>

                    <div className="services_first_block">
                        <h3 className="service_title">Установка противопожарных систем</h3>
                        <div className="service_slider">
                            <button className="service_slider_btn_prev"></button>
                            <ul className="service_slider_list">
                                <li className="list_item">
                                    <div className="item_title">Пожарная сигнализация</div>
                                    <img src="https://via.placeholder.com/200x200" />
                                </li>
                                <li className="list_item">
                                    <div className="item_title">Система оповещения</div>
                                    <img src="https://via.placeholder.com/200x200" />
                                </li>
                                <li className="list_item">
                                    <div className="item_title">Система пожаротушения</div>
                                    <img src="https://via.placeholder.com/200x200" />
                                </li>
                                <li className="list_item">
                                    <div className="item_title">Противодымная защита</div>
                                    <img src="https://via.placeholder.com/200x200" />
                                </li>
                            </ul>
                            <buttonc lassName="service_slider_btn_next"></buttonc>
                        </div>
                    </div>

                    <div className="services_second_block">
                        <div className="service_montage">
                            <h3 className="service_title">Электромонтажные работы</h3>
                            <p>Качественное проведение электромонтажных работ играет важную роль в любом здании. ООО «ЭлтэгПлюс» выполняет все виды электромонтажных работ на различных объектах.</p>
                        </div>
                        <div className="service_maintenance">
                            <h3 className="service_title">Техническое обслуживание</h3>
                            <p>Предоставляем услуги по гарантийному и послегарантийному техническому обслуживанию охранных и пожарных систем, смонтированных нашей, или другими организациями.</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
};

export default Services;