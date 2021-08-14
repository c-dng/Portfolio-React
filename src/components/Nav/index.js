import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return(
    <nav className="nav">

      <NavLink className="nav__link"
        to="/"
        activeClassName="nav__link--active"
        exact
        >
        Accueil
      </NavLink>

      <NavLink className="nav__link"
        to="/realisations"
        activeClassName="nav__link--active"
        exact
        >
        Réalisations
      </NavLink>

      <NavLink className="nav__link"
        to="/about"
        activeClassName="nav__link--active"
        >
        A propos
      </NavLink>
    </nav>
  );
  }
export default Nav;