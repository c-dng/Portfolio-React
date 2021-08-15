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
import Error from '../Error';
import './app.scss';
import './styles/_reset.css';
import './styles/index.scss';

// == Composant
const App = () => { 
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
          <Projets />
          <Competences />
          <Cv />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>  
      <Footer />
    </div>
  );
}

// == Export
export default App;
