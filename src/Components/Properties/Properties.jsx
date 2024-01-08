import React, { Component } from "react";
import { PropertyContext } from "../../context.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import SingleProperty from "../SingleProperty/SingleProperty.jsx";
import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import { Link } from "react-router-dom";
import FilterProperty from "../FilterProperty/FilterProperty.jsx";

class Properties extends Component {
    static contextType = PropertyContext;

    state = {
        favorites: [],// The array to store favorites properties
        filteredProperties: [], // The array to store filtered properties
    };

    handleAddToFavorites = (propertyId) => {
        // Check whether the property is already in favorites property list
        const isThePropertyInFavorites = this.state.favorites.some((property) => property.id === propertyId);

        if (!isThePropertyInFavorites) {
            // Finds the selected property using the propertyId from the list
            const selectedProperty = this.context.properties.find((property) => property.id === propertyId);

            // Adding the property to favorites property list
            this.setState((prevState) => ({
                favorites: [...prevState.favorites, selectedProperty],
            }));
        }
    };

    handleRemoveFromFavorites = (propertyId) => {
        // Remove the property from favorites property list
        this.setState((prevState) => ({
            favorites: prevState.favorites.filter((property) => property.id !== propertyId),
        }));
    };

    handleSearch = (filterProp) => {
        // Implement the logic to filter properties based on the provided filters
        const { properties } = this.context;

        // Process to filter the properties : Filtering process is based on type, location,added date, no of bedrooms and price range
        const filteredProperties = properties.filter((property) => {
            return (
                (filterProp.type === "" || property.type === filterProp.type)  &&
                (filterProp.location === "" || property.location.includes(filterProp.location))  &&
                (filterProp.minPrice === "" || property.price >= parseInt(filterProp.minPrice, 10))  &&
                (filterProp.maxPrice === "" || property.price <= parseInt(filterProp.maxPrice, 10))  &&
                (filterProp.bedRooms === "" || property.bedrooms ===parseInt(filterProp.bedRooms)) &&
                (filterProp.addedDate ==="" || property.added.year.includes(filterProp.addedDate) && property.added.month.includes(filterProp.addedDate))
            );
        });

        // Updates the state using the filtered properties list
        this.setState({
            filteredProperties,
        });
    };

    render() {
        const { loading } = this.context;
        let properties;

        // This will display either filteredProperties or all properties based on whether a search is performed in the filtering option
        if (this.state.filteredProperties.length > 0) {
            //checking whether there's any properties which is in the array
            properties = this.state.filteredProperties.map((property) => ( //getting the properties from the array and passing it to display the property
                <SingleProperty
                    key={property.id}
                    property={property}
                    onAddToFavorites={this.handleAddToFavorites}
                    isInFavorites={this.state.favorites.some((favProperty) => favProperty.id === property.id)}
                    onRemoveFromFavorites={this.handleRemoveFromFavorites}
                />
            ));
        } else {
            properties = this.context.properties.map((property) => (
                <SingleProperty
                    key={property.id}
                    property={property}
                    onAddToFavorites={this.handleAddToFavorites}
                    isInFavorites={this.state.favorites.some((favProperty) => favProperty.id === property.id)}
                    onRemoveFromFavorites={this.handleRemoveFromFavorites}
                />
            ));
        }

        return (
            <>
                <HeroArea hero="propertiesHero">
                    <BannerArea mainTitle="Find Your Property" subTitle="Empowering Sellers, Delighting Buyers.">
                        <Link to="/" className="banner-btn">
                            Back to Home
                        </Link>
                    </BannerArea>
                </HeroArea>
                <br />
                {/* Property Filter area starting */}
                <FilterProperty onSearch={this.handleSearch} />
                {/* Property Filter area ending */}

                {/* Favorites property list Section starting */}
                <section className='favorit-outer'>
                    <TitleBar title="Create Your Favorite List"/>
                    {this.state.favorites.map((favorite) => (
                        <div key={favorite.id} className='favorit-section'>
                            <div className="favorite-property">
                                <img src={favorite.picture} alt={favorite.type} />
                                <div>
                                    <strong>{favorite.type}</strong> - ${favorite.price}
                                </div>
                                <button
                                    className="remove-favorite-btn"
                                    onClick={() => this.handleRemoveFromFavorites(favorite.id)}
                                >
                                    Remove from Favorites
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
                {/* Favorites property list Section ending */}

                {/* section to display all the properties start */}
                <section className="services-area">{/* using the service areas style */}
                    <section className="featured-properties">
                        <div className="featured-properties-center">
                            {/* using a condition to check the availability of the properties */}
                            {loading ? <h1>Loading</h1> : properties}
                        </div>
                    </section>
                </section>
                {/* section to display all the properties ending */}
            </>
        );
    }
}

export default Properties;
