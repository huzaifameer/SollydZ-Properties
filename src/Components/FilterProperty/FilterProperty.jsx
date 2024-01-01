import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function FilterProperty({ onSearch }) {
    const [filteredValues, setFilteredValues] = useState({
        // creating the state to store the filtered data
        type: "",
        location: "",
        minPrice: "",
        maxPrice: "",
        addedDate: "",
        bedRooms: "",
    });

    const handleTheChange = (data) => { // Handles the change in the input fields and updates the state
        setFilteredValues({
            ...filteredValues,
            [data.target.name]: data.target.value,
        });
    };

    // Handles the searching button click and passes the filtered values to the parent component (Properties)
    const handleTheSearch = () => {
        onSearch(filteredValues);
    };

    return (
        <>
            {/*using bootstrap classes for styling and some inline styles as well*/}
            <div className="container mt-4" style={{ height: "250px", width: "750px", border: '2px solid #fff', padding: '20px', marginBottom: '20px' }}>
                <h4 style={{ textAlign: 'center', color: '#fff' }}>Advance Your Searching</h4>
                <form>
                    <div className="row mb-3">
                        {/* Property Type selection */}
                        <div className="col-md-4">
                            <label htmlFor="type" className="form-label">Property Type</label>
                            <select name="type" id="type" className="form-select" onChange={handleTheChange}>
                                {/*3 values for the types*/}
                                <option value="">All</option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                            </select>
                        </div>

                        {/* Location filtering section */}
                        <div className="col-md-4">
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input type="text" name="location" id="location" className="form-control" onChange={handleTheChange} />
                        </div>

                        {/* Price Range input range - gets the minimum price */}
                        <div className="col-md-4">
                            <label htmlFor="minPrice" className="form-label">Min Price:</label>
                            <input type="number" name="minPrice" id="minPrice" className="form-control" placeholder="Min Price" onChange={handleTheChange} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        {/* Price Range input range - gets the maximum price */}
                        <div className="col-md-3">
                            <label htmlFor="maxPrice" className="form-label">Max Price:</label>
                            <input type="number" name="maxPrice" id="maxPrice" className="form-control" placeholder="Max Price" onChange={handleTheChange} />
                        </div>

                        {/* Added Date filtering area */}
                        <div className="col-md-3">
                            <label htmlFor="addedDate" className="form-label">Added Date:</label>
                            <input type="date" name="addedDate" id="addedDate" className="form-control" onChange={handleTheChange} />
                        </div>

                        {/* No of Bedrooms filtering area */}
                        <div className="col-md-3">
                            <label htmlFor="bedRooms" className="form-label">No of Bed Rooms:</label>
                            <input type="number" name="bedRooms" id="bedRooms" className="form-control" onChange={handleTheChange} />
                        </div>

                        {/* Search button to filter the properties */}
                        <div className="col-lg-2 d-flex align-items-end">
                            <button type="button" className="btn btn-outline-light" onClick={handleTheSearch}>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FilterProperty;
