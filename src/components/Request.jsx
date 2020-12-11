import React from 'react';

const Request = () => {
    return (
        <section className="section request">
            <div className="container">
                
                <div className="request_wrapper">
                    <h2 className="title">Оставить заявку</h2>
                    <p>Для получения полной информации оставьте заявку и мы свяжемся с вами.</p>
                    <form method="POST">
                        <input placeholder="Ваше имя *" required type="text" name="name" />
                        <input placeholder="Номер телефона *" required type="tel" name="phone" />
                        <input placeholder="E-mail *" required type="email" name="email" />
                        <textarea placeholder="Ваше сообщение..." required name="message"></textarea>
                        <button className="button">Отправить</button>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default Request;