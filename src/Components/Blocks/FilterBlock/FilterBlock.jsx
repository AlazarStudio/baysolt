import React, { useState } from "react";
import classes from './FilterBlock.module.css';

function FilterBlock({ updateFilteredObjects }) {
    const [filters, setFilters] = useState({
        search: "",
        category: "",
    });

    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        setFilters(prevFilters => ({ ...prevFilters, category: newCategory }));
        updateFilteredObjects(newCategory, filters.search);
    };

    const handleSearchChange = (event) => {
        const newSearch = event.target.value;
        setFilters(prevFilters => ({ ...prevFilters, search: newSearch }));
        updateFilteredObjects(filters.category, newSearch);
    };

    return (
        <div className={classes.filter}>
            <input
                type="text"
                value={filters.search}
                placeholder="Поиск"
                onChange={handleSearchChange}
            />
            <select
                name="category"
                value={filters.category}
                onChange={handleCategoryChange}
                style={{color: '#000000'}}
            >
                <option value="Все категории">Все категории</option>
                <option value="Шпаклевки">Шпаклевки</option>
                <option value="Штукатурки">Штукатурки</option>
                <option value="Наливные полы">Наливные полы</option>
                <option value="Ремонтные смеси">Ремонтные смеси</option>
                <option value="Пазогребные плиты">Пазогребные плиты</option>
                <option value="Гибсовые блоки">Гибсовые блоки</option>
            </select>
        </div>
    );
}

export default FilterBlock;