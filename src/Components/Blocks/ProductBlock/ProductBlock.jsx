import React from "react";
import { Link } from "react-router-dom";
import classes from './ProductBlock.module.css';

function ProductBlock({ children, ...props }) {
    return (
        <>
            <div className={classes.productions_item} style={props.style}>
                <div className={classes.productions_item__img}>
                    <img src={`/admin/img/${props.img}`} alt="" />
                </div>
                <div className={classes.productions_item__title}>{props.title}</div>
                <a href={`/production/${props.linkTitle}`} className={classes.productions_item__btn}>
                    Подробнее
                </a>
            </div>
        </>
    );
}

export default ProductBlock;