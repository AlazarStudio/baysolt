import React from "react";

import classes from './SectionMain.module.css';
import Button from "../Button/Button"

function SectionMain({ children, ...props }) {
    return (
        <>
            <section className={classes.SectionMain} style={{ backgroundImage: `url('/${props.img}')` }}>
                <div className={classes.mainBlock}>
                    <p className={classes.mainText}>TITANIT</p>
                    <Button img={props.img}>Подробнее</Button>
                </div>
            </section>
        </>
    );
}

export default SectionMain;