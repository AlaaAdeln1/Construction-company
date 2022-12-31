import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../sass/header.css'
import '../../a new-font-awesome/css/all.min.css'
class Header extends Component {
  constructor(){
    super();
this.state = {
    number : 0
}
}
eventHandler(){
  window.location.href = '/Contact'
}
render() {
    return (
      <header>
        <span className='par'><i class="fa-solid fa-bars"></i></span>
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Articels">Articels</NavLink></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink to="/Clients">Clients</NavLink></li>
            <li><NavLink to="/Element">Elements</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
          </ul>
          <button onClick={this.eventHandler}>Get a Quote</button>
      </header>
    )
  }
}

export default Header;
