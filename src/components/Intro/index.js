import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import './intro.scss';

const Intro = () => (
  <div className="intro">
    <Header size="{large}" as='h2' icon textAlign='center'>
      <Header.Content>PRÉSENTATION</Header.Content>
    </Header>
    <Container text>
            <p>
                Bonjour, je suis une développeuse web front-end spécialisée React.
            </p>
            <p>
                Issue d'une reconversion professionnelle, j'ai entammé une formation de développeur web full stack de 5 mois avec l'école O'Clock, ensuite j'ai poursuivi mon apprentissage par une formation sur Python.
            </p>
            <p>
                Je continue à apprendre en travaillant sur des projets personnels pour améliorer mes compétences.
            </p>
    </Container>
  </div>
);

export default Intro;

