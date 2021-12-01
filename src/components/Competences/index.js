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
        <img className="competencesimg" src={html} alt="html-logo" />
        <li className="competencesGenerales_margeArtificielle"></li>
        <img className="competencesimg" src={css} alt="css-logo" />
        <li className="competencesGenerales_margeArtificielle"></li>
        <img className="competencesimg"  src={js} alt="js-logo" />
        <li className="competencesGenerales_margeArtificielle"></li>
        <img className="competencesimg"  src={react} alt="react-logo" />
        <li className="competencesGenerales_margeArtificielle"></li>
        <img className="competencesimg"  src={python} alt="python-logo" />
        <li className="competencesGenerales_margeArtificielle"></li>  
        <img className="competencesimg"  src={php} alt="php-logo" />
        <li className="competencesGenerales_margeArtificielle"></li>
        <img className="competencesimg"  src={sql} alt="sql-logo" />
        <li className="competencesGenerales_margeArtificielle"></li>
        <img className="competencesimg"  src={linux} alt="linux-logo" />
      </div>
    </Segment>
  </div>
);

export default Competences;