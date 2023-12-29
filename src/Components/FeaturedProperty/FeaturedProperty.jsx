import React, { Component } from "react";
import { PropertyContext } from "../../context.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import SingleProperty from "../SingleProperty/SingleProperty.jsx";

class FeaturedProperty extends Component {
    static contextType = PropertyContext;

    render() {
        let { loading, featuredProperties: properties } = this.context;
        properties=properties.map(property =>{
            return <SingleProperty key={property.id} property={property}/>
        })

        return (
            <section className='featured-properties'>
                <TitleBar title="Featured Properties"/>
                <div className="featured-properties-center">
                    {loading ? <h1>Loading</h1>: properties}
                </div>
            </section>
        );
    }
}

export default FeaturedProperty;
