import React, { Component } from 'react';
import VenueList from './VenueList';


export default class SideBar extends Component {

    constructor() {
        super();
        this.state = {
            query:"",
            venues:[]
        };
    }
    
    handleSearch = () => {
        if(this.state.query.trim() !== "") {
           const venues = this.props.venues.filter(venue => venue.name
            .toLowerCase().includes(this.state.query.toLowerCase())
            );
            console.log(venues)
            return venues;
        }
        return this.props.venues;
    };
    handleChange = e => {
        this.setState({query:e.target.value});
        
        const markers = this.props.venues.map(venue => {
            const isWatched = venue.name.toLowerCase().includes(e.target.value.toLowerCase());
            const marker = this.props.markers.find(marker => marker.id === venue.id);
            if(isWatched) {
                marker.isVisible = true;
            
            } else {
                marker.isVisible = false;
            } 
            return marker;
            
        });
        this.props.updateSuperState({markers});
    
    };

    render() {

        return (
        <div className="sideBar">
                <input type={"search"} id={"search"} placeholder={"Search"} onChange={this.handleChange} />
                <VenueList {...this.props} venues={this.handleSearch()} handleListItemClick={this.props.handleListItemClick}/>

        </div>
        );
    }
}
