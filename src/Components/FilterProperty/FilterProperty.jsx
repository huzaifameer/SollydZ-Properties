import React, { useState } from "react";

function FilterProperty({ onSearch }) {
    /*state to store the filtered values*/
    const [filteredValues, setFilteredValues] = useState({
        type: "",
        location: "",
        minPrice: "",
        maxPrice: "",
        addedDate: "",
        bedRooms: "",
    });
    /*function to handle the changes of the input and the state*/
    const handleTheChange = (event) => {
        setFilteredValues({
            ...filteredValues,
            [event.target.name]: event.target.value,
        });
    };
    /*function to handle the search buttons' click event*/
    const handleTheSearch = () => {
        onSearch(filteredValues);
    };

    return (
        <div className="container mt-4 border rounded p-4">{/* creating a container with a fixed width*/}
            <h4 className="text-center text-light mb-4">Advance Your Searching</h4>{/* Heading for the filter section */}
            {/* Form for the property filtering process*/}
            <form>
                <div className="row mb-3">{/* First row of the filter option form */}
                    <div className="col-12 col-sm-6 col-md-4 mb-3">{/* Dropdown for the property dropdown */}
                        <label htmlFor="type" className="form-label">Property Type</label>
                        <select name="type" id="type" className="form-select" onChange={handleTheChange}>
                            <option value="">All</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                        </select>
                    </div>

                    {/* Input option for the Location */}
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <label htmlFor="location" className="form-label">Location:</label>
                        <input type="text" name="location" id="location" className="form-control" placeholder='Enter Location' onChange={handleTheChange} />
                    </div>

                    {/* Input option for the Added date */}
                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                        <label htmlFor="addedDate" className="form-label">Added Date:</label>
                        <input type="date" name="addedDate" id="addedDate" className="form-control" onChange={handleTheChange} />
                    </div>

                </div>

                <div className="row mb-3">{/* Second row of the filter option form */}

                    {/* Input option for the Minimum Price */}
                    <div className="col-12 col-md-3 mb-3">
                        <label htmlFor="minPrice" className="form-label">Min Price:</label>
                        <input type="number" name="minPrice" id="minPrice" className="form-control" placeholder="Min Price" onChange={handleTheChange} />
                    </div>

                    {/* Input option for the Maximum Price */}
                    <div className="col-12 col-md-3 mb-3">
                        <label htmlFor="maxPrice" className="form-label">Max Price:</label>
                        <input type="number" name="maxPrice" id="maxPrice" className="form-control" placeholder="Max Price" onChange={handleTheChange} />
                    </div>

                    {/* Input option for the Number of bedrooms */}
                    <div className="col-12 col-md-3 mb-3">
                        <label htmlFor="bedRooms" className="form-label">No of Bed Rooms:</label>
                        <input type="number" name="bedRooms" id="bedRooms" className="form-control" placeholder='No of Bedrooms' onChange={handleTheChange} />
                    </div>

                    {/* Search button for the filtering form */}
                    <div className="col-12 col-md-3 {/*d-flex*/} ">
                        <label htmlFor="nothing" className="form-label" style={{color:'white'}}><b>Find The Property</b> </label>
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
