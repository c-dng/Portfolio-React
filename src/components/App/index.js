// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// == Import
import Nav from '../Nav';
import Home from '../Home';
import Projets from '../Projets';
import Competences from '../Competences';
import Cv from '../CV';
import Contact from '../Contact';
import Footer from '../Footer';
import './app.scss';
import './styles/_reset.css';
import './styles/index.scss';

// == Composant
const App = () => { 
  return (
    <div className="app">

      <Switch>
        <Route path="/" exact>
          <Nav />
          <Home />
          <Projets />
          <Competences />
          <Cv />
          <Footer />
        </Route>

        <Route path="/contact" exact>
          <Nav />
          <Contact />
          <Footer />
        </Route>
      </Switch>  

    </div>
  );
}

// == Export
export default App;
