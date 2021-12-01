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
                Je m'appelle Camille Duong, passionnée par l'informatique et les nouvelles technologies.
            </p>
            <p>
                Issue d'une reconversion professionnelle, j’ai souhaité m’orienter dans le monde de la tech et d'en faire mon métier.
                Dans un premier temps en autodidacte, j'ai étudié le HTML et le CSS, puis j'ai décidé de me professionnaliser en suivant la formation O'Clock et ensuite j'ai poursuivi mon apprentissage par une formation sur Python.
            </p>
            <p>
                Je continue à apprendre en travaillant sur des projets personnels pour améliorer mes compétences.
            </p>
    </Container>
    </Segment>
  </div>
);

export default Intro;

