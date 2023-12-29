import React, {Component} from "react";
import propertiesList from './properties.json';

const PropertyContext = React.createContext();

class PropertyProvider extends Component {
    state = {
        properties: [],
        sortedProperties: [],
        featuredProperties: [],
        loading: true
    };

    componentDidMount() {
        if (!Array.isArray(propertiesList)) {
            console.error("propertiesList is not an array:", propertiesList);
            return;
        }

        if (propertiesList.length === 0) {
            console.warn("propertiesList is an empty array.");
            return;
        }

        let properties = this.formatData(propertiesList);
        let featuredProperties = properties.filter(property => property.featured === true);

        this.setState({
            properties,
            featuredProperties,
            sortedProperties: properties,
            loading: false
        });
    }

    formatData(items) {
        return items.map(item => {
            let id = item.id;
            let images = item.images.map(image => image);

            return {...item, id, images};
        });
    }
    getProperty = (url) =>{
        let tempProperty = [...this.state.properties];
        const property= tempProperty.find(property => property.url===url);
        return property;
    }

    render() {
        return (
            <PropertyContext.Provider value={{ ...this.state, getProperty: this.getProperty() }}>
                {this.props.children}
            </PropertyContext.Provider>
        );
    }
}

const PropertyConsumer = PropertyContext.Consumer;

export { PropertyProvider, PropertyConsumer, PropertyContext };
