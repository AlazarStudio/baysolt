import React, { useState } from "react";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import ProductBlock from "../../Blocks/ProductBlock/ProductBlock";
import FilterBlock from "../../Blocks/FilterBlock/FilterBlock";
import classes from './SectionProduction.module.css';

function SectionProduction({ productData }) {
    const [filteredObjects, setFilteredObjects] = useState(productData);

    const updateFilteredObjects = (category, search) => {
        let filtered = productData;
        if (category && category !== "Все категории") {
            filtered = filtered.filter(item => item.category === category);
        }
        if (search) {
            filtered = filtered.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        }
        setFilteredObjects(filtered);
    };

    return (
        <>
            <CenterBlock>
                <WidthBlock>
                    <FilterBlock updateFilteredObjects={updateFilteredObjects}/>
                    <div className={classes.productions}>
                        {filteredObjects.map((item, index) => (
                            <ProductBlock 
                                key={index}
                                img={item.img}
                                title={item.title}
                                linkTitle={item.linkTitle}
                            />
                        ))}
                    </div>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default SectionProduction;