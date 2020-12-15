import React from 'react';
import '../../css/form.css';
import './mail.php';

const Form = () => {
    return (
        <section className="section form">
            <div className="container">
                
                <h2 className="title black">Оставить заявку<span></span></h2>
                <p>Для получения полной информации оставьте заявку и мы свяжемся с вами.</p>
                <form action="mail.php" method="POST">
                    <div className="form_wrapper">
                        <div className="form_item">
                            <input placeholder="Ваше имя *" required type="text" name="user_name" />
                            <input placeholder="Номер телефона *" required type="tel" name="user_phone" />
                            <input placeholder="E-mail *" required type="email" name="user_email" />
                        </div>
                        <div className="form_item">
                            <textarea placeholder="Ваше сообщение..." required name="user_message"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="button">Отправить</button>
                </form>

            </div>
        </section>
    )
}

export default Form;