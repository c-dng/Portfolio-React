import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './realisations.scss';

const Realisations = () => (
  <div className="realisations">
  <Card>
    <Image src='/projet1.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nom du projet 1</Card.Header>
      <Card.Meta>
        <span className='date'>Date du projet</span>
      </Card.Meta>
      <Card.Description>
        Description du projet
      </Card.Description>
    </Card.Content>
  </Card>
  </div>
);

export default Realisations;
