import React from 'react';

// import images
import Kasu from './front-kasu-desktop.png';
import Orecipe from './orecipe.png';
import Got from './got.png';
import RandomColor from './randomcolor.png';
import Chat from './chat.png';
import Converter from './converter.png';
import Pokedex from './pokedex.png';
import Snk from './snk.png';

import { Card,  Icon, Image } from 'semantic-ui-react'
import './projets.scss';

const Projets = () => (
  
  <div className="projects">
      <Card>
        <Image src={Kasu} alt="project1" a hwrapped ui={false} />
        <Card.Content>
          <Card.Header>Kasu</Card.Header>
          <Card.Meta>
            <span className='date'>Juillet - Août 2021</span>
          </Card.Meta>
          <Card.Description>
            Site de prêt de mangas entre particuliers,
            Projet de fin d'études dans le cadre de la formation intensive de Développeur Web Fullstack.
            L'équipe était composée de 3 développeurs Front-End React.JS et 2 développeuses Back-End Symfony).
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='star' />
          Front-end (React/Redux) / Back-end (Symfony5, MySQL)
        </Card.Content>
    </Card>

  <li className="projects_margeArtificielle"></li>
  
    <Card>
      <Image src={Orecipe} alt="project2" a hwrapped ui={false} />
      <Card.Content>
        <Card.Header>O'Recipe </Card.Header>
        <Card.Meta>
          <span className='date'>Juillet 2021</span>
        </Card.Meta>
        <Card.Description>
          Ce projet est un livre de recettes réalisé avec React et Redux. Un utilisateur peut se connecter et marquer certaines recettes comme favorites.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          #React #Redux #Authentication #Jest #Enzyme
      </Card.Content>
    </Card>

  <li className="projects_margeArtificielle"></li>
  
    <Card>
      <Image src={Chat} alt="project3" a hwrapped ui={false} />
      <Card.Content>
        <Card.Header>Tchat</Card.Header>
        <Card.Meta>
          <span className='date'>Juillet 2021</span>
        </Card.Meta>
        <Card.Description>
          Petit projet fabriqué en React.JS pour découvrir les webSockets et le système d'authentification.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        #React #Redux #Authentication #WebSocket 
      </Card.Content>
    </Card>

    <li className="projects_margeArtificielle"></li>

    <Card>
      <Image src={Converter} alt="project4" a hwrapped ui={false} />
      <Card.Content>
        <Card.Header>Convertisseur</Card.Header>
        <Card.Meta>
          <span className='date'>Juillet 2021</span>
        </Card.Meta>
        <Card.Description>
          Premier projet réalisé avec React pour découvrir des composants avec état. L'utilisateur peut modifier le montant de base et sélectionner ou rechercher la devise qu'il souhaite.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          #React #State #ControlledComponents 
      </Card.Content>
    </Card>

    <li className="projects_margeArtificielle"></li>
    
    <Card>
      <Image src={Got} alt="project5" a hwrapped ui={false} />
      <Card.Content>
        <Card.Header>GOT Encyclopédie</Card.Header>
        <Card.Meta>
          <span className='date'>Juin 2021</span>
        </Card.Meta>
        <Card.Description>
          Projet MVC simple réalisé pour s'entraîner sur le framework Lumens. Le CSS est personnalisé.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          #PHP #Lumens #Eloquent #MVC 
      </Card.Content>
  </Card>

  <li className="projects_margeArtificielle"></li>

    <Card>
      <Image src={Snk} alt="project6" a hwrapped ui={false} />
      <Card.Content>
        <Card.Header>Attaque des Titans</Card.Header>
        <Card.Meta>
          <span className='date'>Juin 2021</span>
        </Card.Meta>
        <Card.Description>
          Site basé sur l'univers du célèbre manga : "L'attaque des Titans". Garanti sans spoils.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        #PHP #MVC #BDD #BOOTSTRAP
      </Card.Content>
    </Card>

  <li className="projects_margeArtificielle"></li>
  
  <Card>
      <Image src={RandomColor} alt="project7" a hwrapped ui={false} />
      <Card.Content>
        <Card.Header>Couleurs Aléatoires</Card.Header>
        <Card.Meta>
          <span className='date'>Mai 2021</span>
        </Card.Meta>
        <Card.Description>
          Petit projet réalisé pour s'entrainer avec React et Redux. Chaque fois que l'utilisateur utilise un bouton de couleur, 1 ou 2 couleurs aléatoires sont générées et le dégradé linéaire est mis à jour. La direction du gradient linéaire peut également être modifiée.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        #React #Redux #LinearGradient 
      </Card.Content>
  </Card>

  <li className="projects_margeArtificielle"></li>
  
  <Card>
      <Image src={Pokedex} alt="project8" a hwrapped ui={false} />
      <Card.Content>
        <Card.Header>Pokedex</Card.Header>
        <Card.Meta>
          <span className='date'>Mai 2021</span>
        </Card.Meta>
        <Card.Description>
          Un projet made in PHP pour assimiler le design pattern MVC. 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        #PHP #MVC #BDD
      </Card.Content>
  </Card>

  </div>
);

export default Projets;
