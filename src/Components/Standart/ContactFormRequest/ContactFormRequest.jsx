import React, { useState } from "react";
import classes from './ContactFormRequest.module.css';
import Text from "../Text/Text";
import Button from "../Button/Button";

function ContactFormRequest({ itemName }) {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        comment: "",
        item: itemName,
        agreement: false,
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/mail/request.php', {  // Убедитесь, что путь корректен
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {  // Проверка на успешный ответ
                return response.text().then(text => { throw new Error(text) });
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                setSuccessMessage("Сообщение успешно отправлено!");
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    comment: "",
                    item: itemName,
                    agreement: false,
                });
            } else {
                console.error("Произошла ошибка:", data.message);
                setErrorMessage(data.message);
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            setErrorMessage('Произошла ошибка при отправке формы.');
        });
    };

    return (
        <form className={classes.FeedbackForm} onSubmit={handleSubmit}>
            {successMessage && <div className={classes.SuccessMessage}>{successMessage}</div>}
            {errorMessage && <div className={classes.ErrorMessage}>{errorMessage}</div>}
            <div>
                <label>
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
                <label>
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
                <label>
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
                <label>
                    <textarea className={classes.FeedbackLabelComment}
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Комментарий:"
                        required
                    />
                </label>
            </div>
            <div style={{ width: '620px' }}>
                <label className={classes.FeedbackCheckLabel}>
                    <input className={classes.FeedbackCheckbox}
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        required
                    />
                    Отправляя форму, я даю согласие на обработку персональных данных, подтверждаю согласие с политикой конфиденциальности.
                </label>
                <button className={classes.FeedbackButton} type="submit">Отправить</button>
            </div>
        </form>
    );
}

export default ContactFormRequest;
