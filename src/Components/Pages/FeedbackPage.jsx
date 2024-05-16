import React from "react";
import ContactForm from "../Standart/ContactForm/ContactForm";
import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";

function FeedbackPage({ children, ...props }) {
    return (
        <>
            <CenterBlock margin="40px 0">
                <WidthBlock alignItems={"center"}>
                    <ContactForm />
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default FeedbackPage;