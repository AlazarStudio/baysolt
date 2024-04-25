import React from "react";

import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionCategory from "../Sections/SectionCategory/SectionCategory";
import SectionProduction from "../Sections/SectionProduction/SectionProduction";
import Button from "../Standart/Button/Button"
import ColumnBlock from "../Standart/ColumnBlock/ColumnBlock"
import H2 from "../Standart/H2/H2"

// import img_bg from "/background_main.png";

function MainPage({ children, ...props }) {
    let img = 'background_main.png';
    let productData = [
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»',
            category: 'Шпаклевки'
        },
        {
            img: 'pr2.png',
            title: 'ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»',
            linkTitle: 'SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»',
            category: 'Штукатурки'
        },
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»',
            category: 'Наливные полы'
        },
    ]
    return (
        <>
            <ColumnBlock gap={'40px'} alignItems={'center'}>
                <SectionMain img={img} />
                <SectionCategory />
                <H2 font-size={'32px'} color={'#fff'} width={'1300px'}>Популярные товары</H2>
                <SectionProduction productData={productData}/>
                
            </ColumnBlock>
        </>
    );
}

export default MainPage;