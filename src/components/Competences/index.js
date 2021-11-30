import React from 'react';
import { Header, Icon, Button, Segment } from 'semantic-ui-react'
import './competences.scss';

const Competences = () => (
  <div className="competences">
    <Header size="{large}" as='h2' icon textAlign='center'>
      <Header.Content>COMPÉTENCES</Header.Content>
    </Header>
    <Segment className="competences_generales">

    <Header size="{large}" as='h3' icon textAlign='center' >Front-End</Header>
    <div className="competences_front">
      <Button basic>React</Button>
      <Button basic>React-Redux</Button>
      <Button basic>JavaScript</Button>
      <Button basic>HTML</Button>
      <Button basic>CSS - SASS</Button>
    </div>

    <Header size="{large}" as='h3' icon textAlign='center' >Back-End</Header>
    <div className="competences_back">
      <Button basic>PHP</Button>
      <Button basic>SQL</Button>
    </div>
  </Segment>
  </div>
);

export default Competences;