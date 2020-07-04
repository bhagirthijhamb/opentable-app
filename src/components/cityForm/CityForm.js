import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCity } from './../../actions/restaurantActions';

class CityForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = async function(e){
        await this.setState({
            city: e.target.value
        })
        this.props.getCity(this.state.city)

        // setTimeout(() => this.setState({
        //     city: ''
        // }), 5000)
    }

    render() {
        return (
          <div>
            <label htmlFor="city">City: </label>
            <input
              type="text"
              id="city"
              value={this.state.city}
              placeholder="Enter City name"
              onChange={this.handleChange}
              data-testid="yourCity"
            />
          </div>
        );
    }
}

CityForm.propTypes = {
    getCity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {if(state.restaurants){
    return({
        city: state.restaurants.city
    })
} else {
    return {
        city: ''
    }
}}

export default connect(mapStateToProps, { getCity })(CityForm);