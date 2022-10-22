import React, { Component } from 'react';
import StarWars from '../images/StarWars.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={ StarWars } alt="Logo Star wars" />
      </header>
    );
  }
}
