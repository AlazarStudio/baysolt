import React from "react";
import classes from './SectionProduction.module.css';

import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import ProductBlock from "../../Blocks/ProductBlock/ProductBlock";

function SectionProduction({ children, ...props }) {
    return (
        <>
            <CenterBlock>
                <WidthBlock>
                    <div className="filter"></div>

                    <div className={classes.productions}>
                        {
                            props.productData.map((item, index) => (
                                <ProductBlock 
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    linkTitle={item.linkTitle}
                                />
                            ))
                        }
                    </div>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default SectionProduction;