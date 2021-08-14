import React from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import './home.scss';

const Home = () => (
  <div className="home">
     <div className="home-mainWrapper">
          <Container text>
          <Header as='h1'>Camille Duong</Header>
          <Header as='h2'>Développeuse Web React</Header>
          <Button primary>
            <Icon name='pdf file outline' />
            <a href="./cv-camille-duong.pdf" download> </a> Télécharger mon CV
          </Button>
        </Container>
    </div>
  </div>
);

export default Home;
