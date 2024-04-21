import React from "react";
import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionProduction from "../Sections/SectionProduction/SectionProduction";

function ProductionPage({ children, ...props }) {
    let img = 'background_main.png';

    let productData = [
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»'
        },
        {
            img: 'pr2.png',
            title: 'ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»',
            linkTitle: 'SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»'
        },
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»'
        },
        {
            img: 'pr2.png',
            title: 'ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»',
            linkTitle: 'SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»'
        },
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»'
        },
        {
            img: 'pr2.png',
            title: 'ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»',
            linkTitle: 'SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»'
        },
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»'
        },
        {
            img: 'pr2.png',
            title: 'ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»',
            linkTitle: 'SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»'
        },
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»'
        },
        {
            img: 'pr2.png',
            title: 'ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»',
            linkTitle: 'SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»'
        },
        {
            img: 'pr1.png',
            title: 'ШТУКАТУРКА ГИПСОВАЯ ДЛЯ РУЧНОГО НАНЕСЕНИЯ «СТАРТ»',
            linkTitle: 'SHTUKATURKA_GIPSOVAYA_DLYA_RUCHNOGO_NANESENIYA_«START»'
        },
        {
            img: 'pr2.png',
            title: 'ШТУКАТУРКА ЦЕМЕНТНАЯ ВЫСОКОПРОЧНАЯ Р-42 «MONOLIT»',
            linkTitle: 'SHTUKATURKA_CEMENTNAYA_VYSOKOPROCHNAYA_R-42_«MONOLIT»'
        },
    ]
    return (
        <>
            <SectionMain img={img} />
            <SectionProduction productData={productData}/>
        </>
    );
}

export default ProductionPage;