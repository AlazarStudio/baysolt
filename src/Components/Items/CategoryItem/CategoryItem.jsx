import React from "react";
import classes from './CategoryItem.module.css';

function CategoryItem({ children, ...props }) {
    return (
        <>
            <div className={classes.categoryItem}>
                <div className={classes.categoryItemImg}>
                    <img src={props.img} alt="" />
                </div>
                <p className={classes.categoryItemText}>
                    {props.title}
                </p>
            </div>
        </>
    );
}

export default CategoryItem;