import React from "react";

import SectionMain from "../Standart/SectionMain/SectionMain";
import Button from "../Standart/Button/Button"

// import img_bg from "/background_main.png";

function MainPage({ children, ...props }) {
    let img = 'background_main.png';
    return (
        <>
            <SectionMain img={img}  />
            
        </>
    );
}

export default MainPage;