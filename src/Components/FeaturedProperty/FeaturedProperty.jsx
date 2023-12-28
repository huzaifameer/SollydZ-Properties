import React, { Component } from "react";
import { PropertyContext } from "../../context.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";

class FeaturedProperty extends Component {
    static contextType = PropertyContext;

    render() {
        const { featuredProperties: properties } = this.context;
        console.log(properties);

        return (
            <div>
                <TitleBar title="Featured Properties"/>
                {/* Render your featured properties */}
            </div>
        );
    }
}

export default FeaturedProperty;
