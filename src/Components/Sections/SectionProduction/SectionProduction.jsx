import React from "react";
import classes from './SectionProduction.module.css';

import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import { Link } from "react-router-dom";

function SectionProduction({ children, ...props }) {
    return (
        <>
            <CenterBlock>
                <WidthBlock>
                    <div className="filter"></div>

                    <div className={classes.productions}>
                        {
                            props.productData.map((item, index) => (
                                <div className={classes.productions_item} key={index}>
                                    <div className={classes.productions_item__img}>
                                        <img src={`/${item.img}`} alt="" />
                                    </div>
                                    <div className={classes.productions_item__title}>{item.title}</div>
                                    <Link to={`/production/${item.linkTitle}`} className={classes.productions_item__btn}>
                                        Подробнее
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default SectionProduction;