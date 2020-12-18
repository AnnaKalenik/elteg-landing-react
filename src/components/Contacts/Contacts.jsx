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
                            <div className="icon location"></div>
                            <h3>Адрес</h3>
                            <div>
                                Беларусь, г.Минск,<br />
                                Бетонный проезд 13,<br />
                                офис 29
                            </div>
                        </li>
                        <li  className="contacts_phone">
                            <div className="icon phone"></div>
                            <h3>Телефоны</h3>
                            <div>
                                <span>Офис/Факс:</span><br />
                                +375(17) 373-10-50
                            </div>
                            <div>
                                <span>Управляющий:</span><br />
                                +375(29) 177-35-62
                            </div>
                            <div>
                                <span>Главный инженер:</span><br />
                                +375(29) 308-50-70
                            </div>
                        </li>
                        <li className="contacts_email">
                            <div className="icon email"></div>
                            <h3>Email</h3>
                            <div>eltegplus@mail.ru</div>
                        </li>
                        <li className="contacts_time">
                            <div className="icon time"></div>
                            <h3>Время работы</h3>
                            <div>
                                <span>Пн-Пт</span> с 8:00 до 17:00<br />
                                <span>Сб и Вс</span> выходные дни
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