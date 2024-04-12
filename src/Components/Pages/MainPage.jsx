import React from "react";

import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionCategory from "../Sections/SectionCategory/SectionCategory";
import Button from "../Standart/Button/Button"

// import img_bg from "/background_main.png";

function MainPage({ children, ...props }) {
    let img = 'background_main.png';
    return (
        <>
            <SectionMain img={img}  />
            <SectionCategory />
        </>
    );
}

export default MainPage;