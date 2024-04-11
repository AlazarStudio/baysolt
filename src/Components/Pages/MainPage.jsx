import React from "react";
import Button from "../Standart/Button/Button"

function MainPage({ children, ...props }) {
    return ( 
        <>
            Main page 
            <Button>Подробнее</Button>
        </>
     );
}

export default MainPage;