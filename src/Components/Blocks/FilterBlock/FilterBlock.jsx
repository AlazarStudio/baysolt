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
                style={{color: '#fff'}}
            >
                <option style={{color: '#000'}} value="Все категории">Все категории</option>
                <option style={{color: '#000'}} value="Шпаклевки">Шпаклевки</option>
                <option style={{color: '#000'}} value="Штукатурки">Штукатурки</option>
                <option style={{color: '#000'}} value="Наливные полы">Наливные полы</option>
                <option style={{color: '#000'}} value="Ремонтные смеси">Ремонтные смеси</option>
                <option style={{color: '#000'}} value="Пазогребные плиты">Пазогребные плиты</option>
                <option style={{color: '#000'}} value="Гибсовые блоки">Гибсовые блоки</option>
            </select>
        </div>
    );
}

export default FilterBlock;