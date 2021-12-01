import React from 'react';
import Kasu from './front-kasu-desktop.png';
import Snk from './snk.png';

import { Segment, Header } from 'semantic-ui-react'

import './projets.scss';

const Projets = () => (
  <div className="projets">

    <Header as='h2' icon textAlign='center'>

    </Header>


    <Segment className="contentWorks">

      <h1>PROJETS </h1>
        <ul className="projects_itemsWebsite">

          <li className="projects_itemWebsite">
            <p className="projet_name">Kasu</p>
            <a href="https://kasu.surge.sh" target="_bank">
            <img className="projet_screenshot" src={Kasu} alt="projet1" />
            </a>
            <p className="projet_linkGithub"><a href="https://github.com/c-dng/kasu-front" target="_bank">Lien GitHub</a></p>
            <p className="projet_description">Pendant 1 mois, j'ai travaillé en équipe (3 front-end + 2 back-end)</p>
          </li>


          <li className="projets_margeArtificielle"></li>

          <li className="projects_itemWebsite">
            <p className="projet_name">O'Snk</p>
            <img className="projet_screenshot" src={Snk} alt="projet2" />
            <p className="projet_linkGithub"><a href="https://github.com/c-dng/t-snk" target="_bank">Lien GitHub</a></p>
            <p className="projet_description"> Réalisé avec PHP / Bootstrap</p>
          </li>

      </ul>
  </Segment>

  </div>
);

export default Projets;