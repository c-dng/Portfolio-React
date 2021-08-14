import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <Menu compact secondary>
      <Menu.Item href="https://github.com/c-dng" tabIndex="0" className="footer-items"><Icon name='github' />  GitHub</Menu.Item>
      <Menu.Item href="https://www.linkedin.com/in/camilleduong/" tabIndex="0" className="footer-items"><Icon name='linkedin' /> LinkedIn</Menu.Item>
      <Menu.Item as={Link} tabIndex="0" to="/contact" className="footer-items" exact={+true}><Icon name='mail' />Contact</Menu.Item>
    </Menu>
  </div>
);

export default Footer;


