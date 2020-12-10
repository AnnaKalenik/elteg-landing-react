import React from 'react';

const Services = () => {
    return (
        <section className="section services">
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
    );
};

export default Services;