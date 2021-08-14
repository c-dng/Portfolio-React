import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react'
import './competences.scss';


const Competences = () => (
  <div className="competences">
    <Header size="{large}" as='h2' icon textAlign='center'>
      <Icon name='code' circular />
      <Header.Content>Compétences</Header.Content>
    </Header>

    <ul>
      <li>React</li>
      <li>React-Redux</li>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>MySQL</li>
      <li>HTML 5</li>
      <li>CSS 3</li>
      <li>SASS</li>
      <li>WordPress</li>
      <li>Bootstrap</li>
    </ul>
  </div>
);

export default Competences;
