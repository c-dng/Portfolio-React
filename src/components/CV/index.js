import React from 'react';
import { Header, Icon, Step } from 'semantic-ui-react';
import './cv.scss';

const CV = () => (
  <div className="cv">
    <Header size="{large}" as='h2' icon textAlign='center'>
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



  </div>
);

export default CV;