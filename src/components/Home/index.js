import React from 'react';
import { Header, Button, Icon, Image } from 'semantic-ui-react';
import './home.scss';
import photo from './photo.png';

const Home = () => (
  <div className="home">
     <div className="home-mainWrapper">
          <Image className="home_photo" src={photo} size='small' circular />
          <Header className="home_titleHeader">Camille Duong</Header>
            <div className="home_description">Développeuse Web React</div>
          <Button primary>
            <Icon name='pdf file outline' />
            <a href="./cv-camille-duong.pdf" download> </a> Télécharger mon CV
          </Button>

    </div>
  </div>
);

export default Home;