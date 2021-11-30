/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';

import './styles/style.scss'

import github from './assets/images/github.svg';
import instagram from './assets/images/instagram.svg';
import linkedin from './assets/images/linkedin.svg';
import twitch from './assets/images/twitch.svg';
import twitter from './assets/images/twitter.svg';

import profile from './assets/images/profile.jpg';

function App() {
  return (
    <>
      <div id="page">
        <div className="img-mesclada">
          <img className="imgs" src={profile} alt="profile image" />
        </div>
        <h4 className="title">@Profile</h4>
        <div className="buttons">
          <a target="_blank" href="https://twitter.com"><button className="button">link 1 </button></a>
          <a target="_blank" href="https://twitch.com"><button className="button">link 2 </button></a>
          <a target="_blank" href="https://instagram.com"><button className="button">link 3 </button></a>
          <a target="_blank" href="https://linkedin.com"><button className="button">link 4 </button></a>
          <a target="_blank" href="https://github.com"><button className="button">link 5 </button></a>
        </div>
        <div className="icons">
          <img className="icon" src={twitter} alt="icon" />
          <img className="icon" src={twitch} alt="icon" />
          <img className="icon" src={instagram} alt="icon" />
          <img className="icon" src={linkedin} alt="icon" />
          <img className="icon" src={github} alt="icon" />
        </div>
      </div>

    </>
  );
}

export default App;
