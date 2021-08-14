import React from 'react';

import './home.scss';

const Home = () => (
  <div className="home">
    <header>
        Bonjour,
        <a href="public/cv-camille-duong.pdf" class="custom-btn-lg">
        <i class="fa fa-file-download" aria-hidden="true"></i> Télécharger mon CV</a>
    </header>
  </div>
);

export default Home;
