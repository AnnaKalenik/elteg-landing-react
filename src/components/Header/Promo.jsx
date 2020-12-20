import React, { useState, useEffect } from 'react';

import prev_image_index from '../../images/header_images/alarma-sirena.png';
import activeIndex from '../../images/header_images/fire_detector.png';
import next_image_index from '../../images/header_images/sprinkler.png';

const images_arr = [
    <img key={prev_image_index} src={prev_image_index} alt="alarm_signal" />,
    <img key={activeIndex} src={activeIndex} alt="fire_detector" />,
    <img key={next_image_index} src={next_image_index} alt="sprinkler" />,
]

const Promo = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect( () => {
        setInterval( () => {
            setActiveIndex( (activeIndex) =>
            activeIndex === images_arr.length - 1 ? 0 : activeIndex + 1
            )
        }, 4000)
        return () => clearInterval()
    }, [])

    const prev_image_index = activeIndex ? activeIndex - 1 : images_arr.length - 1;
    const next_image_index = activeIndex === images_arr.length - 1  ? 0 : images_arr.length + 1;

    return (
        <div className="header_promo">
            <div className="header_promo_info">
                <h2 className="header_promo_info_title">Установка и обслуживание систем пожарной безопасности</h2>
                <a className="button" href="#form">Оставить заявку</a>
            </div>
            <div className="header_promo_slider">
                <div className="first_slider slider" key={prev_image_index}>
                    {images_arr[prev_image_index]}
                </div>
                <div className="second_slider slider" key={activeIndex}>
                    {images_arr[activeIndex]}
                </div>
                <div className="third_slider slider" key={next_image_index}>
                    {images_arr[next_image_index]}
                </div>
            </div>
        </div>
    )
}

export default Promo;