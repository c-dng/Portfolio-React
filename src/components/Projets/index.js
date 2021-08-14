import React from 'react';
import Kasu from './front-kasu-desktop.png';
import Snk from './snk.png';

import { Divider, Grid, Segment, Header, Icon, Image } from 'semantic-ui-react'

import './projets.scss';

const Projets = () => (
  <div className="projets">

    <Header as='h2' icon textAlign='center'>
      <Icon name='book' circular />
      <Header.Content>Projets</Header.Content>
    </Header>

    <Segment className="contentWorks">
        <ul className="projects_itemsWebsite">

          <li className="projects_itemWebsite">
            <p>Kasu</p>
            <a href="https://kasu.surge.sh" target="_bank">
            <img src={Kasu} alt="projet1" />
            </a>
            <p><a href="https://github.com/c-dng/kasu-front" target="_bank">Lien GitHub</a></p>
            <p>Pendant 1 mois, j'ai travaillé en équipe (3 front-end + 2 back-end)</p>
          </li>

          <li className="projects_itemWebsite">
            <p>Snk</p>
            <img src={Snk} alt="projet1" />
            <p><a href="https://github.com/c-dng/t-snk" target="_bank">Lien GitHub</a></p>
            <p> PHP / Bootstrap</p>
          </li>

          <li className="projects_itemWebsite">
            <p>Snk</p>
            <img src={Snk} alt="projet1" />
            <p><a href="https://github.com/c-dng/kasu-front" target="_bank">Lien GitHub</a></p>
            <p> PHP / Bootstrap</p>
          </li>

      </ul>
  </Segment>

  </div>
);

export default Projets;