import React from "react";
import Button from "../Standart/Button/Button"

// import img_bg from "/background_main.png";

function MainPage({ children, ...props }) {
    let img = 'background_main.png';
    return (
        <>
            <section className="SectionMain" style={{backgroundImage: `url('/${img}')`}}>
                <div className="mainBlock">
                    <p>TITANIT</p>
                    <Button>Подробнее</Button>
                </div>
            </section>
        </>
    );
}

export default MainPage;