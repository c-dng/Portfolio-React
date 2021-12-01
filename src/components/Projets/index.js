import React from 'react';
import Kasu from './front-kasu-desktop.png';
import Snk from './snk.png';

import { Segment, Card,  Icon, Image } from 'semantic-ui-react'

import './projets.scss';

const Projets = () => (
  
  <div className="projets">
    <Segment >
      <Card>
        <Image src={Kasu} a hwrapped ui={false} />
        <Card.Content>
          <Card.Header>Kasu </Card.Header>
          <Card.Meta>
            <span className='date'>Juillet - Août 2021</span>
          </Card.Meta>
          <Card.Description>
            Site de prêt de mangas entre particuliers,
            Projet de fin d'études dans le cadre de la formation intensive de Développeur Web Fullstack.
            L'équipe était composée de 3 développeurs Front-End React.JS et 2 développeuses Back-End Symfony).
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='star' />
            Stack : Front-end (React/Redux) / Back-end (Symfony5, MySQL)
        </Card.Content>
      </Card>

      <Card>
        <Image src={Snk} alt="project2" a hwrapped ui={false} />
        <Card.Content>
          <Card.Header>O'Snk</Card.Header>
          <Card.Meta>
            <span className='date'>Juin 2021</span>
          </Card.Meta>
          <Card.Description>
            Site de basé sur l'univers du manga "Attaque des Titans".
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='star' />
            Stack : PHP / Bootstrap
        </Card.Content>
    </Card>
{/* <li className="projets_margeArtificielle"></li> */}
    </Segment>
  </div>
);

export default Projets;
