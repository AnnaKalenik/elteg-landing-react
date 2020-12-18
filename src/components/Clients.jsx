import React from 'react';

import Logo_airport from '../images/clients_images/logo_airport.png';
import Logo_green from '../images/clients_images/logo_green.png';
import Logo_svitanok from '../images/clients_images/logo_svitanok.png';
import Logo_oma from '../images/clients_images/logo_oma.png';

import "../css/clients.css";

const Clients = () => {
    return (
        <section className="section clients">
            <div className="container">
                
                <div className="clients_wrapper">
                    <h2 className="title black">Наши клиенты</h2>
                    <div className="images_wrapper">
                        <img src={Logo_airport} alt="logo_airport" />
                        <img src={Logo_green} alt="logo_green" />
                        <img src={Logo_svitanok} alt="logo_svitanok" />
                        <img src={Logo_oma} alt="logo_oma" />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Clients;