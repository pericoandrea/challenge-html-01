import React from 'react';
import './styles/footer.scss';

const Footer = () => (
  <footer>
    <div className="bran">
      <h3>
        Deck
        <span />
      </h3>
      <p>c 2018 Deck</p>
      <p>Component base UI Kit</p>
    </div>
    <div className="labels">
      <p>Technology</p>
      <p>Ideas</p>
      <p>Entertainment</p>
      <p>Leadership</p>
      <p>Video</p>
      <p>News</p>
      <p>Finance</p>
    </div>
    <div className="following">
      <div className="subscribe">
        <input type="text" />
        <button type="submit" />
      </div>
      <div className="social-media">
        <p>Follow us:</p>
      </div>
    </div>
  </footer>
);

export default Footer;
