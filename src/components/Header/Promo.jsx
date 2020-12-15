import React, { useState, useEffect } from 'react';
import Alarm from '../../images/alarma-sirena_1.png';
import Detector from '../../images/fire_detector.png';

class Promo extends React.Component {
    constructor() {
        super();

        this.sliderNextPrev = this.sliderNextPrev.bind(this);
    }

    sliderNextPrev(event) {
        const dir = event.target.dataset.dir;

        const slider = document.querySelector('.header_promo_slider_images');
        const slider_width = slider.offsetWidth;

        const img_list  = slider.querySelectorAll('.slider_image');

        const img_first = slider.querySelectorAll('.slider_image')[0];
        const img_first_styles = window.getComputedStyle(img_first);
        
        let img_first_width = img_first.offsetWidth;
        let img_first_ml = img_first_styles.getPropertyValue('margin-left');

        if (img_first_ml) {
            img_first_ml = Math.abs(parseInt(img_first_ml));
        }

        let ml = 0;
        const stopPoint = (img_list.length * img_first_width) - img_first_ml;

        if (img_first_ml < stopPoint) ml = img_first_ml + img_first_width * (dir == 'prev' ? -1 : 1);

        img_first.style.marginLeft = `-${ml}px`;
    }

    // componentDidMount() {
    //     this.interval = setInterval( () => this.sliderNextPrev(), 2500);
    // }

    render() {
        return (
            <div className="header_promo">
                <div className="header_promo_info">
                    <h2 className="header_promo_info_title">Установка и обслуживание систем пожарной безопасности</h2>
                    <button className="button">Оставить заявку</button>
                </div>
                <div className="header_promo_slider">
                    <div className="header_promo_slider_images">
                        <img className="slider_image" src={Alarm} alt="alarm_signal" />
                        <img className="slider_image" src={Detector} alt="fire_detector" />
                    </div>
                    <div className="header_promo_slider_btns">
                        <button data-dir="prev" onClick={this.sliderNextPrev} className="header_promo_slider_btns_btn"></button>
                        <button data-dir="next" onClick={this.sliderNextPrev} className="header_promo_slider_btns_btn"></button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Promo;