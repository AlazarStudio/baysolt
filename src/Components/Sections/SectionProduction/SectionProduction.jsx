import React, { useEffect, useState } from "react";
import CenterBlock from "../../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../../Standart/WidthBlock/WidthBlock";
import ProductBlock from "../../Blocks/ProductBlock/ProductBlock";
import FilterBlock from "../../Blocks/FilterBlock/FilterBlock";
import classes from './SectionProduction.module.css';
import { useLocation } from "react-router-dom";

function SectionProduction({ productData }) {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const categoryParam = params.get('category');
    
    const [filteredObjects, setFilteredObjects] = useState([]);

    useEffect(() => {
        filterProducts();
    }, [productData, categoryParam]);

    const filterProducts = (category = categoryParam, searchText = '') => {
        let filtered = [...productData];

        if (category && category !== "Все категории") {
            filtered = filtered.filter(item => item.category === category);
        }

        if (searchText) {
            filtered = filtered.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
        }

        setFilteredObjects(filtered);
    };

    const updateFilteredObjects = (category, search) => {
        filterProducts(category, search);
    };

    return (
        <>
            <CenterBlock>
                <WidthBlock>
                    <FilterBlock updateFilteredObjects={updateFilteredObjects} />
                    <div className={classes.productions}>
                        {filteredObjects.map((item, index) => (
                            <ProductBlock
                                key={index}
                                img={item.img}
                                title={item.title}
                                linkTitle={item.id}
                            />
                        ))}
                    </div>
                </WidthBlock>
            </CenterBlock>
        </>
    );
}

export default SectionProduction;
