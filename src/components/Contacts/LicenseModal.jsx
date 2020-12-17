import React from 'react';
import '../../css/contacts.css';

const LicenseModal = ({active, setActive}) => {
    
    const sliderNextPrev = (event) => {
        const dir = event.target.dataset.dir;

        const slider = document.querySelector('.modal_images');

        const img_list  = slider.querySelectorAll('.license_slider_image');

        const img_first = slider.querySelectorAll('.license_slider_image')[0];
        const img_first_styles = window.getComputedStyle(img_first);
        
        let img_first_width = img_first.offsetWidth;
        let img_first_ml = img_first_styles.getPropertyValue('margin-left');

        if (img_first_ml) {
            img_first_ml = Math.abs(parseInt(img_first_ml));
        }

        let ml = 0;
        const stopPoint = (img_list.length * img_first_width + 5) - img_first_ml;

        if (img_first_ml < stopPoint) ml = img_first_ml + img_first_width * (dir == 'prev' ? -1 : 1);

        img_first.style.marginLeft = `-${ml}px`;
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={event => event.stopPropagation()}>
                <div className="modal_images">
                    <img className="license_slider_image" src="../../images/licenses/license_1.png" alt="свидетельство" />
                    <img className="license_slider_image" src="../../images/licenses/license_2.png" alt="свидетельство" />
                    <img className="license_slider_image" src="../../images/licenses/license_3.png" alt="свидетельство" />
                    <img className="license_slider_image" src="../../images/licenses/license_4.png" alt="свидетельство" />
                </div>
                <button data-dir="prev" onClick={sliderNextPrev} className="license_slider_btn prev">&lt;</button>
                <button data-dir="next" onClick={sliderNextPrev} className="license_slider_btn next">&gt;</button>
            </div>
        </div>
    )
}

export default LicenseModal;