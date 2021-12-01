import React from 'react';
import { Header, Segment } from 'semantic-ui-react'
import './competences.scss';
import html from './html.svg'
import css from './css.svg'
import js from './js.svg'
import react from './react.svg'
import php from './php.png'
import sql from './sql.png'
import python from './python.svg'
import linux from './linux.png'

const Competences = () => (
  <div className="competences">
    <Header size="{large}" as='h2' icon textAlign='center'>
      <Header.Content>COMPÉTENCES</Header.Content>
    </Header>
    <Segment className="competencesGenerales">
      <div className="competencesGenerales__logo">
        <img src={html} alt="html-logo" />
        <img src={css} alt="css-logo" />
        <img src={js} alt="js-logo" />
        <img src={react} alt="react-logo" />
        <img src={python} alt="python-logo" />     
        <img src={php} alt="php-logo" />
        <img src={sql} alt="sql-logo" />
        <img src={linux} alt="linux-logo" />
      </div>
    </Segment>
  </div>
);

export default Competences;