import React from "react";
import Button from "../Standart/Button/Button"

function MainPage({ children, ...props }) {
    return (
        <>

            <section className="SectionMain">
                <div className="mainBlock">
                    <p>TITANIT</p>
                    <Button>Подробнее</Button>
                </div>
            </section>

        </>
    );
}

export default MainPage;