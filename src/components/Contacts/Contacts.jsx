import React, { useState } from 'react';
import CertificateModal from './CertificateModal.jsx';
import LicenseModal from './LicenseModal.jsx';

import '../../css/contacts.css';

const Contacts = () => {
    const [licenseActive, setLicenseActive] = useState(false);
    const [sertificateActive, setSertificateActive] = useState(false);

    return (
        <section className="section contacts" id="contacts">
            <div className="container">

                <div className="contacts_wrapper">
                    <h2 className="title white">Контактная информация</h2>
                    <ul className="contacts_info">
                        <li className="contacts_location">
                            <div className="top location">
                                <div className="icon location"></div>
                                <h3>Адрес</h3>
                            </div>
                            <div className="bottom location">Беларусь, г.Минск, Бетонный проезд 13, офис 29</div>
                        </li>
                        <li  className="contacts_phone">
                            <div className="top phone">
                                <div className="icon phone"></div>
                                <h3>Телефоны</h3>
                            </div>
                            <div className="bottom phone">
                                <div className="item_1">
                                    <div><span>Офис/Факс:</span></div>
                                    <div>+375(17) 373-10-50</div>                               
                                </div>
                                <div className="item_2">
                                    <div><span>Управляющий:</span></div>
                                    <div>+375(29) 177-35-62</div>
                                </div>
                                <div className="item_3">
                                    <div><span>Главный инженер:</span></div>
                                    <div>+375(29) 308-50-70</div>
                                </div>
                            </div>
                        </li>
                        <li className="contacts_email">
                            <div className="top email">
                                <div className="icon email"></div>
                                <h3>Email</h3>
                            </div>
                            <div className="bottom email">eltegplus@mail.ru</div>
                        </li>
                        <li className="contacts_time">
                            <div className="top time">
                                <div className="icon time"></div>
                                <h3>Время работы</h3>
                            </div>
                            <div className="bottom time">
                                <div><span>Пн-Пт</span> с 8:00 до 17:00</div>
                                <div><span>Сб и Вс</span> выходные дни</div>
                            </div>
                        </li>
                    </ul>
                    <button className="button" onClick={() => setLicenseActive(true)}>Лицензия</button>
                    <LicenseModal active={licenseActive} setActive={setLicenseActive} />

                    <button className="button" onClick={() => setSertificateActive(true)}>Свидетельство</button>
                    <CertificateModal active={sertificateActive} setActive={setSertificateActive} />
                </div>
                
            </div>
        </section>

    )
}

export default Contacts;