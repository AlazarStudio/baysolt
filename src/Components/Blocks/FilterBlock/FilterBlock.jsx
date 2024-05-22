import React, { useState } from "react";
import classes from './FilterBlock.module.css';
import GetData from "../../GetData/GetData";

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
                className={classes.select}
            >
                <option value="Все категории">Все категории</option>
                <GetData tableName="category">
                    {(data) => (
                        data.map((item) => (
                            <option key={item.id} value={item.title}>
                                {item.title}
                            </option>
                        ))
                    )}
                </GetData>
            </select>
        </div>
    );
};

export default FilterBlock;
