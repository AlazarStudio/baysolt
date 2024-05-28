import React from "react";
import classes from './CategoryItem.module.css';
import { Link } from "react-router-dom";

function CategoryItem({ children, ...props }) {
    let categoryPath = `/production?category=${encodeURIComponent(props.title)}`;

    if (props.title == "Вся продукция") {
        categoryPath = `/production`;
    }
    return (
        <>
            <Link to={categoryPath} className={classes.categoryItem}>
                <div className={classes.categoryItemBack}>
                    <div className={classes.categoryItemImg}>
                        <img src={props.img} alt="" />
                    </div>
                    <p className={classes.categoryItemText}>
                        {props.title}
                    </p>
                </div>
            </Link>
        </>
    );
}

export default CategoryItem;