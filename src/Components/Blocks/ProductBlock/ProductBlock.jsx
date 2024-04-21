import React from "react";
import { Link } from "react-router-dom";
import classes from './ProductBlock.module.css';

function ProductBlock({ children, ...props }) {
    return (
        <>
            <div className={classes.productions_item}>
                <div className={classes.productions_item__img}>
                    <img src={`/${props.img}`} alt="" />
                </div>
                <div className={classes.productions_item__title}>{props.title}</div>
                <Link to={`/production/${props.linkTitle}`} className={classes.productions_item__btn}>
                    Подробнее
                </Link>
            </div>
        </>
    );
}

export default ProductBlock;