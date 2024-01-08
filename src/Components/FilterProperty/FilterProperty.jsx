import React, { useState } from "react";

function FilterProperty({ onSearch }) {
    const [filteredValues, setFilteredValues] = useState({
        type: "",
        location: "",
        minPrice: "",
        maxPrice: "",
        addedDate: "",
        bedRooms: "",
    });

    const handleTheChange = (event) => {
        setFilteredValues({
            ...filteredValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleTheSearch = () => {
        onSearch(filteredValues);
    };

    return (
        <div className="container mt-4 border rounded p-4">
            <h4 className="text-center text-light mb-4">Advance Your Searching</h4>
            <form>
                <div className="row mb-3">
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <label htmlFor="type" className="form-label">Property Type</label>
                        <select name="type" id="type" className="form-select" onChange={handleTheChange}>
                            <option value="">All</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                        </select>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <label htmlFor="location" className="form-label">Location:</label>
                        <input type="text" name="location" id="location" className="form-control" onChange={handleTheChange} />
                    </div>

                    <div className="col-12 col-md-4 mb-3">
                        <label htmlFor="minPrice" className="form-label">Min Price:</label>
                        <input type="number" name="minPrice" id="minPrice" className="form-control" placeholder="Min Price" onChange={handleTheChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-12 col-md-3 mb-3">
                        <label htmlFor="maxPrice" className="form-label">Max Price:</label>
                        <input type="number" name="maxPrice" id="maxPrice" className="form-control" placeholder="Max Price" onChange={handleTheChange} />
                    </div>

                    <div className="col-12 col-md-3 mb-3">
                        <label htmlFor="addedDate" className="form-label">Added Date:</label>
                        <input type="date" name="addedDate" id="addedDate" className="form-control" onChange={handleTheChange} />
                    </div>

                    <div className="col-12 col-md-3 mb-3">
                        <label htmlFor="bedRooms" className="form-label">No of Bed Rooms:</label>
                        <input type="number" name="bedRooms" id="bedRooms" className="form-control" onChange={handleTheChange} />
                    </div>

                    <div className="col-12 col-md-3 d-flex ">
                        <button type="button" className="btn btn-outline-light w-100" onClick={handleTheSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FilterProperty;
