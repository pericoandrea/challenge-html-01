import React from 'react';
import './styles/header.scss';

const Header = () => (
  <header>
    <h3>
      Deck
      <span />
    </h3>
    <div className="categories">
      <p>Technology</p>
      <p>Ideas</p>
      <p>Entertainment</p>
      <p>Leadership</p>
      <p>Video</p>
      <p>News</p>
      <p>Finance</p>
    </div>
    <navbar>nav</navbar>
  </header>
);

export default Header;
