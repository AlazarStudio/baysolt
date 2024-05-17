import React, { useState } from "react";
import classes from './ContactForm.module.css';
import Text from "../Text/Text";

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        comment: "",
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('../mail/mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                return response.text(); // если сервер вернул успешный статус
            }
            throw new Error('Ошибка при отправке данных на сервер.');
        })
        .then(data => {
            // Здесь вы можете обработать ответ от сервера, если это необходимо
            console.log(data);
            // Например, если сервер возвращает сообщение об успешной отправке, вы можете перенаправить пользователя
            // window.location.href = '/success.html';
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
    };
    

    return (
        <form className={classes.FeedbackForm} onSubmit={handleSubmit}>
            <Text fontSize="24px" fontWeight="600" color="#fff" margin="0 0 30px">
                Обратная связь
            </Text>
            <div>
                <label >
                    <input className={classes.FeedbackLabel}
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="ФИО:"
                        required
                    />
                </label>
            </div>
            <div>
                <label >
                    <input className={classes.FeedbackLabel}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Телефон:"
                        required
                    />
                </label>
            </div>
            <div>
                <label >
                    <input className={classes.FeedbackLabel}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail:"
                        required
                    />
                </label>
            </div>
            <div>
                <label >
                    <textarea className={classes.FeedbackLabelComment}
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Комментарий:"
                        required
                    />
                </label>
            </div>
            <div style={{width:'580px'}}>
                <label className={classes.FeedbackCheckLabel}>
                    <input className={classes.FeedbackCheckbox}
                        type="radio"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        required
                    />
                    Отправляя форму, я даю согласие на обработку персональных данных, подтверждаю согласие с политикой конфиденциальности и условиями догов-оферты на оказание комлексных услуг, а также на получение информационных рассылок от проекта и партнеров проекта.
                </label>
            </div>
            <button className={classes.FeedbackButton} type="submit">Отправить</button>
        </form>
    );
}

export default ContactForm;
