import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <header>
            <h1 data-testid="mainHeading">Restaurants in your City</h1>
          </header>
        );
    }
}

export default Header;