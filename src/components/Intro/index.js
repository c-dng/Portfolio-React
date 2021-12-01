import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import './intro.scss';

const Intro = () => (
  <div className="intro">
    <Segment>
    <Header size="{large}" as='h2' icon textAlign='center'>
      <Header.Content>PRÉSENTATION</Header.Content>
    </Header>
    <Container text>
            <p>
                Bonjour ! Je m'appelle Camille Duong, je suis développeuse web front-end spécialisée React.
            </p>
            <p>
                Passionnée par le développement web depuis de nombreuses années, j'ai décidé de me lancer dans le grand bain et de faire une reconversion professionnelle.
                J'ai donc entammé une formation de développeur web full stack de 5 mois avec l'école O'Clock, ensuite j'ai poursuivi mon apprentissage par une formation sur Python.
            </p>
            <p>
                Je continue à apprendre en travaillant sur des projets personnels pour améliorer mes compétences.
            </p>
    </Container>
    </Segment>
  </div>
);

export default Intro;

