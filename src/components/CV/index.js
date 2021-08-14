import React from 'react';
import cv from './cv.jpg';
import { Header, Icon, Image, Step } from 'semantic-ui-react';
import './cv.scss';

const CV = () => (
  <div className="cv">
    <Header size="{large}" as='h2' icon textAlign='center'>
      <Icon name='file alternate outline' circular />
      <Header.Content>CV</Header.Content>
    </Header>
    
    <Step.Group className="cv_monStatut">
      <Step>
        <Icon name='file code outline' />
        <Step.Content>
          <Step.Title>Formation</Step.Title>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name='search' />
        <Step.Content>
          <Step.Title>En recherche d'emploi</Step.Title>
          <Step.Description>A l'écoute des opportunités</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled>
        <Icon name='thumbs up outline' />
        <Step.Content>
          <Step.Title>Emploi trouvé</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>

    <Image className="cv_image" src={cv} size='huge' />

  </div>
);

export default CV;