import React from 'react';
import Worker from '../images/worker.png';

import "../css/about.css";

const About = () => {
    return (
        <section className="section about">
            <div className="container">

                <div className="about_wrapper">
                    <h2 className="title black">О компании<span></span></h2>
                    <div className="about_info">
                        <img src={Worker} alt="worker"/>
                        <div className="about_info_description">
                            <p>
                                ООО «ЭлтэгПлюс» занимается реализацией широкого комплекса противопожарных проектов в сфере промышленного и гражданского строительства, 
                                а также проектов заказчиков любой сложности и масштаба. Уже сегодня  наша компания оказывает максимально широкий спектр услуг на всех 
                                стадиях реализации противопожарных проектов.
                            </p>
                            <p>
                                Мы работаем со многими известными компаниям в Минске и Республике Беларусь. Оказываем помощь от простой консультации до сдачи объекта в
                                эксплуатацию. Услуги нашей компании всегда отличаются высоким качеством, ценой, сроком исполнения.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default About;