import React, { Component } from "react";
import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import { Link } from 'react-router-dom';
import { PropertyContext } from "../../context.jsx";

export default class SinglePage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        // Fetch and display details of the single property using this.props.match.params.url
        const propertyURL = this.props.match.params.url;
        // Now you can use propertyURL to fetch the details of the corresponding property
    }

    static contextType = PropertyContext;

    render() {
        const { getProperty } = this.context;
        // Assuming you have a method like getProperty in your context
        const property = getProperty(this.props.match.params.url);
        console.log(property);
        return (
            <div>
                <HeroArea />
                <BannerArea />
                <div>Hello from single page</div>
            </div>
        );
    }
}
