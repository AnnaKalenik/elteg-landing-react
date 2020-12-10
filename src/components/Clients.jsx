import React from 'react';

const Clients = () => {
    return (
        <section className="section clients">
            <div className="container">
                
                <div className="clients_wrapper">
                    <h2 className="title">Наши клиенты</h2>
                    <div className="clients_client_image">
                        <img src="https://via.placeholder.com/160x90" alt="logo_green" />
                    </div>
                    <div className="clients_client_image">
                        <img src="https://via.placeholder.com/160x90" alt="logo_oma" />
                    </div>
                    <div className="clients_client_image">
                        <img src="https://via.placeholder.com/160x90" alt="logo_viber" />
                    </div>
                    <div className="clients_client_image">
                        <img src="https://via.placeholder.com/160x90" alt="logo_sanatorium" />
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Clients;