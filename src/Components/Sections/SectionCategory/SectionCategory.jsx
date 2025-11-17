import React from "react";
import classes from './SectionCategory.module.css';

import CategoryItem from "../../Items/CategoryItem/CategoryItem";

function SectionCategory({ children, ...props }) {
    return (
        <>
            <section className={classes.categorySection}>
                <div className={classes.categoryBlock}>
                    <CategoryItem img='CategoryItem6.png' title="Вся продукция"></CategoryItem>
                    <CategoryItem img='CategoryItem1.png' title="Штукатурки"></CategoryItem>
                    <CategoryItem img='CategoryItem2.png' title="Шпаклевки"></CategoryItem>
                    <CategoryItem img='CategoryItem3.png' title="Плиточный клей"></CategoryItem>
                    <CategoryItem img='CategoryItem4.png' title="Монтажные смеси"></CategoryItem>
                    <CategoryItem img='CategoryItem5.png' title="Наливные полы"></CategoryItem>
                    {/* <CategoryItem img='CategoryItem7.png' title="Пазогребные плиты"></CategoryItem> */}
                    {/* <CategoryItem img='CategoryItem8.png' title="Гибсовые блоки"></CategoryItem> */}
                </div>
            </section>
        </>
    );
}

export default SectionCategory;