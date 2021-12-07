import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

// import images
import Kasu from './kasu.jpeg';
import Orecipe from './orecipe.png';
import Got from './got.png';
import RandomColor from './randomcolor.png';
import Chat from './chat.png';
import Converter from './converter.png';
import Pokedex from './pokedex.png';
import Snk from './snk.png';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import './projets.scss';

export default function Projects() {
  return (
    <div class="projects_container">
      <h2>PROJETS</h2>

      <div style={{ display: 'block', width: 1200, padding: 30 }}>

        <div class="project_1">

          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-150"
                src={Kasu}
                alt="Image One"
              />
            </Carousel.Item>
          </Carousel>

          <li className="_margeArtificielle"></li>

          <div class="details">
            <h3 class="project__details__title">Kasu, site de prêt de mangas entre particuliers.</h3>

            <p class="project__content__description">
              Projet de fin d'études dans le cadre de la formation intensive de Développeur Web Fullstack.
            </p>
            <div className="field"></div>
            <p class="project__content__link">Voir le projet sur Github</p>
            <Link to ="www.google.com">Voir le projet sur Github</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
