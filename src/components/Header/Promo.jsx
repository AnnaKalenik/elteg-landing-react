import React from 'react';
import Alarm from '../../images/alarma-sirena_1.png';

const Promo = () => {
    return (
        <div className="header_promo">
            <div className="header_promo_info">
                <h2 className="header_promo_info_title">Установка и обслуживание систем пожарной безопасности</h2>
                <button className="button">Рассчитать стоимость</button>
                <button className="button">Оставить заявку</button>
            </div>
            <div className="header_promo_image">
                <img src={Alarm}/>
            </div>
            
        </div>
    );
};

export default Promo;