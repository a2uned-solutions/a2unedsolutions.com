import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

class MobileMenu extends Component {

  state = {
    name : 'Your name'
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <aside className="mobile-menu">
        <Button onClick={this.toggleDrawer('right', true)}>
          <i className="fas fa-ellipsis-v"></i>
        </Button>
        <Drawer anchor="right" className="drawer" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
            className="nav-drawer drawer-container"
          >
            <h2>Navigation</h2>
            <nav>
              <ul className="no-list">
                <li>
                  <NavLink to="/services" activeClassName="active">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/clients" activeClassName="active">Clients</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
                </li>
              </ul>
            </nav>
            <h2>Contact Us</h2>
            {/*<li>*/}
            {/*<ContactForm/>*/}
            {/*</li>*/}
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default MobileMenu;
