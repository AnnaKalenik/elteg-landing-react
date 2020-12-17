import React, { useState, useEffect } from 'react';
import First_slide from '../../images/alarma-sirena_1.png';
import Second_slide from '../../images/fire_detector.png';
import Third_slide from '../../images/sprinkler.png';


const images_arr = [
    <img key={First_slide} src={First_slide} alt="alarm_signal" />,
    <img key={Second_slide} src={Second_slide} alt="fire_detector" />,
    <img key={Third_slide} src={Third_slide} alt="sprinkler" />,
]


const Promo = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect( () => {
        setInterval( () => {
            setActiveIndex( (current) =>
                current === images_arr.length - 1 ? 0 : current + 1
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
                <button className="button">Оставить заявку</button>
            </div>
            <div className="header_promo_slider">
                <div className="header_promo_slider_images">
                    <div className="first_slider" key={prev_image_index}>
                        {images_arr[prev_image_index]}
                    </div>
                    <div className="second_slider" key={activeIndex}>
                        {images_arr[activeIndex]}
                    </div>
                    <div className="third_slider" key={next_image_index}>
                        {images_arr[next_image_index]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo;