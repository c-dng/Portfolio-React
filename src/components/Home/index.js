import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import './home.scss';
import photo from './photo.png';

const Home = () => (
  <div className="home">
     <div className="home-mainWrapper">
          <Image className="home_photo" src={photo} size='small' circular />
          <Header className="home_titleHeader"> Développeuse Web React </Header>
            <div className="home_description"> Camille Duong </div>
    </div>
  </div>
);

export default Home;