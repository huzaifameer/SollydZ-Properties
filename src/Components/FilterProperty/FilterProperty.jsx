function FilterProperty(){
    return(
        <>
            <div className="container mt-4" style={{ height: "350px", width: "550px",border:'2px solid #fff',padding:'20px',marginBottom:'20px' }}>
                <h4 style={{textAlign:'center',color:'#fff'}}>Advance Search</h4>
                <form>
                    <div className="row mb-3">
                        {/* Type filter */}
                        <div className="col-md-6">
                            <label htmlFor="type" className="form-label">Type:</label>
                            <select name="type" id="type" className="form-select">
                                <option value="">All</option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                            </select>
                        </div>

                        {/* Location filter */}
                        <div className="col-md-6">
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input type="text" name="location" id="location" className="form-control" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        {/* Price Range input range */}
                        <div className="col-md-6">
                            <label htmlFor="minPrice" className="form-label">Min Price:</label>
                            <input type="number" name="minPrice" id="minPrice" className="form-control" placeholder="Min Price" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="maxPrice" className="form-label">Max Price:</label>
                            <input type="number" name="maxPrice" id="maxPrice" className="form-control" placeholder="Max Price" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        {/* Added Date filter */}
                        <div className="col-md-6">
                            <label htmlFor="addedDate" className="form-label">Added Date:</label>
                            <input type="date" name="addedDate" id="addedDate" className="form-control" />
                        </div>

                        {/* No of Bed Rooms filter */}
                        <div className="col-md-4">
                            <label htmlFor="minRooms" className="form-label">No of Bed Rooms:</label>
                            <input type="number" name="minRooms" id="minRooms" className="form-control" />
                        </div>

                        {/* Search button */}
                        <div className="col-md-2 d-flex align-items-end">
                            <button type="button" className="btn btn-outline-light">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FilterProperty;