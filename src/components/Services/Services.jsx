import React from 'react';
import Accordion from './Accordion.jsx';
import "../../css/services.css";

const Services = () => {
    const products = [
        {
            image: '../../images/exit.svg',
            title: 'Установка противопожарных систем',
            body: 
                <ul className="service_accordion_list">
                    <li className="list_item">
                        <img src="../../images/smoke-detector.svg" alt="smoke_detector" />
                        <div className="item_title">Пожарная сигнализация</div>
                    </li>
                    <li className="list_item">
                        <img src="../../images/fire-button.svg" alt="fire-button" />
                        <div className="item_title">Система оповещения</div>
                    </li>
                    <li className="list_item">
                        <img src="../../images/water_installation.svg" alt="water_installation" />
                        <div className="item_title">Система пожаротушения</div>
                    </li>
                    <li className="list_item">
                        <img src="../../images/fan.svg" alt="fan" />
                        <div className="item_title">Противодымная защита</div>
                    </li>
                </ul>
        },
        {
            image: '../../images/worker.svg',
            title: 'Электромонтажные работы',
            body: <p>Качественное проведение электромонтажных работ играет важную роль в любом здании. ООО «ЭлтэгПлюс» выполняет все виды электромонтажных работ на различных объектах.</p>
        },
        {
            image: '../../images/settings.svg',
            title: 'Техническое обслуживание',
            body: <p>Предоставляем услуги по гарантийному и послегарантийному техническому обслуживанию охранных и пожарных систем, смонтированных нашей, или другими организациями.</p>
        },
    ];

    return (
        <section className="section services">
            <div className="container">

                <div className="services_wrapper">
                    <h2 className="title white">Услуги<span></span></h2>
                    {products.map((product, index) => (
                        <Accordion key={index} image={product.image} title={product.title} body={product.body}/>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default Services;