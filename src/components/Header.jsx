import React, { Component } from 'react';
import StarWars from '../images/StarWars.png';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header center">
        <div className="center">
          <img src={ StarWars } alt="Logo Star wars" />
        </div>
      </header>
    );
  }
}
