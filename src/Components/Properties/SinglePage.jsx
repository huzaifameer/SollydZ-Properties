import React, { Component } from "react";
import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import { Link } from 'react-router-dom';
import { PropertyContext } from "../../context.jsx";

export default class SinglePage extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            url: this.props.match.params.url
        };
    }

    /*componentDidMount() {
        // Fetch and display details of the single property using this.props.match.params.url
    }*/
    static contextType=PropertyContext;

    render() {
        const {getProperty} = this.context;
        const property = getProperty(this.state.url);
        return (
            <div>
                <HeroArea />
                <BannerArea />
                <div>Hello from single page</div>
            </div>
        );
    }
}
