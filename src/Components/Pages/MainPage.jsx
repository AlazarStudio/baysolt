import React from "react";

import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionCategory from "../Sections/SectionCategory/SectionCategory";
import Button from "../Standart/Button/Button"
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock"

// import img_bg from "/background_main.png";

function MainPage({ children, ...props }) {
    let img = 'background_main.png';
    return (
        <>
            <ColumnBlock gap={'40px'}>
                <SectionMain img={img} />
                <SectionCategory />
            </ColumnBlock>
        </>
    );
}

export default MainPage;