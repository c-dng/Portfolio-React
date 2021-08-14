import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.scss'

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
        to="/competences"
        activeClassName="nav__link--active"
        exact
        >
        Compétences
      </NavLink>

      <NavLink className="nav__link"
        to="/portfolio"
        activeClassName="nav__link--active"
        >
        Portfolio
      </NavLink>

      <NavLink className="nav__link"
        to="/contact"
        activeClassName="nav__link--active"
        >
        Contact
      </NavLink>
    </nav>
  );
  }
export default Nav;