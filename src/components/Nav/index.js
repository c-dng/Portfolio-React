import React from 'react'
import { NavLink } from 'react-router-dom';
import { Icon, Radio } from 'semantic-ui-react'
import './nav.scss';

const Nav = () => {
  return(
    <nav className="nav">
      <div className="nav-toggle">
      <Radio toggle />
      </div>
      <NavLink className="nav__link"
        to="/"
        activeClassName="nav__link--active"
        exact
        >
        <Icon name='home' size='large' />
      </NavLink>

      <NavLink className="nav__link"
        to="/contact"
        activeClassName="nav__link--active"
        >
        <Icon name='mail' size='large' />
      </NavLink>
    </nav>
  );
  }
export default Nav;


