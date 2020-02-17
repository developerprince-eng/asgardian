import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SideNavMenu.css';

export class SideNavMenu extends Component {
  static displayName = SideNavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <div className="sidenav">
        <br/>
        <br/>
        <hr/>
        <a href="#todo">TODO</a>
        <a href="#logout">LOGOUT</a>
      </div>
    );
  }
}
