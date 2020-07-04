import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRestaurants } from './../../actions/restaurantActions';


class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressFilter: "",
      priceFilter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.props.fetchRestaurants(this.props.city);
  };

  // Handle adress filter
  handleAddressFilter(e) {
    this.setState({
      addressFilter: e.target.value.substr(0, 15),
    });
  }

  // Handle price filter
  handlePriceFilter(e) {
    this.setState({
      priceFilter: e.target.value
    });
  }

  render() {
    let filteredRestaurants, moreFilteredRestaurants, cityRestaurants;

    if (this.props.restaurants) {
      filteredRestaurants = this.props.restaurants.filter((restaurant) => {
        return (
          restaurant.address
            .toLowerCase()
            .indexOf(this.state.addressFilter.toLowerCase()) !== -1
        );
      });

      if(0 < this.state.priceFilter && this.state.priceFilter < 5){
        moreFilteredRestaurants = filteredRestaurants.filter(restaurant => {
          return (
            restaurant.price == this.state.priceFilter
          )
        }
        )}
        else {
          moreFilteredRestaurants = [...filteredRestaurants];
        }
    }

    if (moreFilteredRestaurants) {
      cityRestaurants = moreFilteredRestaurants.map((restaurant) => (
        <div className="restaurantDetails" key={restaurant.id}>
          <h3 className="restaurantName" data-testid="name">
            Name: {restaurant.name}
          </h3>
          <p className="restaurantAddress" data-testid="address">
            Address: {restaurant.address}
          </p>
          <p className="restaurantPrice" data-testid="price">
            Price: {restaurant.price}
          </p>
        </div>
      ));
    }

    return (
      <div>
        <button
          className="findButton"
          data-testid="findButton"
          onClick={(e) => this.handleClick(e)}
        >
          Find Restaurants
        </button>
        <br />
        <hr />
        <label htmlFor="filterRestaurants">Filter by Address: </label>
        <input
          id="filterRestaurants"
          className="searchInput"
          type="text"
          placeholder="street address"
          value={this.state.search}
          onChange={this.handleAddressFilter.bind(this)}
          data-testid="filterInput"
        />

        <label htmlFor="filterRestaurants">Filter by Price: </label>
        <input
          id="filterRestaurants"
          className="searchInput"
          type="text"
          placeholder="(1 - 4)"
          value={this.state.search}
          onChange={this.handlePriceFilter.bind(this)}
          data-testid=""
        />

        <div className="restaurantList" data-testid="restaurantList">
          {cityRestaurants}
        </div>
      </div>
    );
  }
}

Restaurants.propTypes = {
    fetchRestaurants: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  if (state.items) {
    return {
      city: state.city,
      restaurants: state.items,
    };
  } else {
    return {
      city: state.city,
      restaurants: [],
    };
  }
};

export default connect(mapStateToProps, { fetchRestaurants })(Restaurants);