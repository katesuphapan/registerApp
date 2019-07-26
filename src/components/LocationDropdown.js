import React, { Component } from 'react'

export default class LocationDropDown extends Component {

    state = {
        label: this.props.defaultLabel
    }

    locationSelected(e) { 
        console.log(e.target);
        let locationName = e.target.getAttribute('data-name');
        console.log(locationName);
        
    }

    render() {

        let locations = this.props.locations;

        return (
            <div className="dropdown">
                <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {this.state.label}
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        locations.map((location, i) => {
                            return <a className="dropdown-item" onClick={e => this.locationSelected(e)} href="#" data-id={location.id} data-name={location.name} key={location.id}>{location.name}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}