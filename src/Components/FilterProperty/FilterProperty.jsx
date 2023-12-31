// PropertyFilter.jsx

import React from 'react';

const FilterProperty = ({ filter, onFilterChange }) => {
    return (
        <section className="filter-container">
            <div className="form-group">
                <label htmlFor="type">Property type</label>
                {/* ... (existing type select code) */}
            </div>

            <div className="form-group">
                <label htmlFor="bedrooms">Bedroom number</label>
                {/* ... (existing bedrooms select code) */}
            </div>

            <div className="form-group">
                <label htmlFor="price">Property price ${filter.price}</label>
                {/* ... (existing price range input code) */}
            </div>

            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={filter.location}
                    onChange={(e) => onFilterChange('location', e.target.value)}
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="addedDate">Added Date</label>
                <input
                    type="date"
                    name="addedDate"
                    id="addedDate"
                    value={filter.addedDate}
                    onChange={(e) => onFilterChange('addedDate', e.target.value)}
                    className="form-control"
                />
            </div>
        </section>
    );
};

export default FilterProperty;
