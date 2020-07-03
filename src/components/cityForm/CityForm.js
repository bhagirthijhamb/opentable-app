import React, { Component } from 'react';

class CityForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: ''
        };
    }

    render() {
        return(
            <div>
                <label htmlFor="city">City: </label>
                <input 
                    type="text"
                    id="city"
                    value={this.state.city}
                    placeholder="Enter City name"
                />
            </div>
        )
    }
}

export default CityForm;