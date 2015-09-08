import React from 'react';
import { Link, Navigation } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { navigationConfig } from './Router';


export default React.createClass({
  mixins: [ Navigation ],
  propTypes: {
    
  },
  link(name) {
    return this.transitionTo.bind(this, name);
  },
  render() {
    const NavItems = navigationConfig.map((item, index) => {
      return <NavItem key={index} eventKey={index} onClick={this.link(item.routeName)}>{item.title}</NavItem>;
    });
    const navbarInstance = (
        <Navbar className="navbar-inverse" brand={<a href="#">Hooligans TV</a>}>
            <Nav>
              {NavItems}
            </Nav>
        </Navbar>
    );
    return navbarInstance;
  }
});