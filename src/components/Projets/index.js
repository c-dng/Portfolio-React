import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import images
import Kasu from './kasu.png';
import Orecipe from './orecipes.png';
import Blog_router from './blog_router.png';
// import Got from './got.png';
// import RandomColor from './randomcolor.png';
// import Chat from './chat.png';
// import Converter from './converter.png';
// import Pokedex from './pokedex.png';
// import Snk from './snk.png';
import { Divider, Header, Image } from 'semantic-ui-react';
import './projets.scss';

export default function Projects() {
  return (
    <div class="projects_container">
      <h2>PROJETS</h2>

      <div class="project_1">
        <Image src={Kasu} size='big' verticalAlign='top' rounded />
        <Header as='h2'>Kasu, site de prêt de mangas entre particuliers.</Header>
        <p class="project__description1">Projet de fin d'études dans le cadre de la formation intensive de Développeur Web Fullstack.</p>
        <p class="project__description2">L'équipe était composée de 3 développeurs Front-End React.JS et 2 développeuses Back-End Symfony).</p>
        <p class="project__description__hashtag">#React #Redux #Symfony5 #MySQL</p>
        <p class="project__github"><a rel="noopener noreferrer" href="https://github.com/c-dng/kasu-front" target="_blank">Voir le projet sur Github</a></p>
      </div>

    <Divider />

      <div class="project_2">
        <Image src={Orecipe} size='big' verticalAlign='top' rounded />
        <Header as='h3'>O'Recipe, livre de recettes.</Header>
        <p class="project__description1">Un utilisateur peut se connecter et marquer certaines recettes comme favorites.</p>
        <p class="project__description2">Réalisé avec React et Redux.</p>
        <p class="project__description__hashtag">#React #Redux #Authentication #Jest #Enzyme</p>
        <p class="project__github"><a rel="noopener noreferrer" href="#" target="_blank">Voir le projet sur Github</a></p>
      </div>

    <Divider />

      <div class="project_3">
        <Image src={Blog_router} size='big' verticalAlign='top' rounded />
        <Header as='h3'>Blog</Header>
        <p class="project__description1">Les données de l'application sont diffusées via les props.</p>
        <p class="project__description2">Projet réalisé en React.</p>
        <p class="project__github"><a rel="noopener noreferrer" href="#" target="_blank">Voir le projet sur Github</a></p>
      </div>

    <Divider />

    </div>
  );
}
