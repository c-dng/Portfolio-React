import React from 'react';
import { Container, Header, Image, Button, Icon } from 'semantic-ui-react';
import './home.scss';

const Home = () => (
  <div className="home">
     <div className="home-mainWrapper">
          <Container text>
          {/* <Image src='photo.png' size='medium' circular /> */}
          <Header as='h1'>Camille Duong</Header>
          <Header as='h2'>Développeuse Web React</Header>
          <Button primary>
            <Icon name='pdf file outline' />
              Télécharger mon CV
          </Button>
        </Container>
    </div>
  </div>
);

export default Home;
