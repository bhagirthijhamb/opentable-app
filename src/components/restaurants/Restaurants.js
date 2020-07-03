import React, { Component } from 'react';


class Restaurants extends Component {
    render() {
        return (
          <div>
            <button className="findButton">Find Restaurants</button>
            <br />
            <input
              className="searchInput"
              type="text"
              placeholder="Search by name"
              //   value={this.state.search}
              //   onChange={this.updateSearch.bind(this)}
            />
            <input
              className="searchInput"
              type="text"
              placeholder="Search by address"
              //   value={this.state.search}
              //   onChange={this.updateSearch.bind(this)}
            />
          </div>
        );
    }
}

export default Restaurants;