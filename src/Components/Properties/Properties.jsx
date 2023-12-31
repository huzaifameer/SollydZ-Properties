import React, { Component } from "react";
import { PropertyContext } from "../../context.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import SingleProperty from "../SingleProperty/SingleProperty.jsx";
import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import { Link } from "react-router-dom";


class Properties extends Component {
    static contextType = PropertyContext;

    state = {
        favorites: [],
        filter: {
            type: "all",
            price: "",
            location: "",
            addedDate: "",
            bedrooms: "",
        },
    };

    handleAddToFavorites = (propertyId) => {
        // Check if the property is already in favorites
        const isThePropertyInFavorites = this.state.favorites.some((property) => property.id === propertyId);

        if (!isThePropertyInFavorites) {
            // Find the selected property using the propertyId
            const selectedProperty = this.context.properties.find((property) => property.id === propertyId);

            // Add the property to favorites
            this.setState((prevState) => ({
                favorites: [...prevState.favorites, selectedProperty],
            }));
        }
    };

    handleRemoveFromFavorites = (propertyId) => {
        // Remove the property from favorites
        this.setState((prevState) => ({
            favorites: prevState.favorites.filter((property) => property.id !== propertyId),
        }));
    };
    handleFilterChange = (name, value) => {
        // Update the filter state when the filter changes
        this.setState((prevState) => ({
            filter: {
                ...prevState.filter,
                [name]: value,
            },
        }));
    };

    render() {
        let { loading, properties: properties } = this.context;
        properties = properties.map((property) => {
            const isInFavorites = this.state.favorites.some((favProperty) => favProperty.id === property.id);
            return (
                <SingleProperty
                    key={property.id}
                    property={property}
                    onAddToFavorites={this.handleAddToFavorites}
                    isInFavorites={isInFavorites}
                    onRemoveFromFavorites={this.handleRemoveFromFavorites}
                />
            );
        });

        return (
            <>
                <HeroArea hero="propertiesHero">
                    <BannerArea mainTitle="Find Your Property" subTitle="Empowering Sellers, Delighting Buyers.">
                        <Link to="/" className="banner-btn">
                            Back to Home
                        </Link>
                    </BannerArea>
                </HeroArea>
                <br/>

                {/* Favorites property list Section starting */}
                <section>
                    <TitleBar title="Create Your Favorite List"/>
                    {this.state.favorites.map((favorite) => (
                        <div key={favorite.id} className ='favorit-section'>
                            <div  className="favorite-property">
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

                {/*section to display all the properties start*/}
                <section className="services-area">{/*using the service areas style*/}
                    <section className="featured-properties">
                        <div className="featured-properties-center">
                            {/*using a condition to check the availability of the properties*/}
                            {loading ? <h1>Loading</h1> : properties}
                        </div>
                    </section>
                </section>
                {/*section to display all the properties ending*/}

            </>
        );
    }
}

export default Properties;
