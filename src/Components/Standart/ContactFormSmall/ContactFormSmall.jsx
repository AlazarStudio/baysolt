import React, { useState } from "react";
import classes from './ContactFormSmall.module.css';
import Button from "../Button/Button";
import Text from "../Text/Text";

function ContactFormSmall() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        comment: "",
        agreement: false,
    });
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('mail/mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setSuccessMessage("Сообщение успешно отправлено!");
                    setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        comment: "",
                        agreement: false,
                    });
                } else {
                    console.error("Произошла ошибка:", data.message);
                }
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    };

    return (
        <form className={classes.FeedbackForm} onSubmit={handleSubmit}>
            <Text fontSize="16px" fontWeight="600" color="#fff" margin="0">
                Оставить заявку
            </Text>
            {successMessage && <div className={classes.SuccessMessage}>{successMessage}</div>}
            <div style={{ width: "100%" }}>
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
            <div style={{ width: "100%" }}>
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
            <div style={{ width: "100%" }}>
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
            <div style={{ width: "100%" }}>
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
            <div style={{ width: '100%' }}>
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
            </div>
            <button className={classes.FeedbackButton} type="submit">Отправить</button>
        </form>
    );
}

export default ContactFormSmall;
