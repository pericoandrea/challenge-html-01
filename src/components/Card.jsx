import React from 'react';
import './styles/card.scss';

const Card = () => (
  <div className="card">
    <div className="card__image">
      <img src="assets/imgs/annie-spratt-213059.png" alt="Logo" />
      <div className="card__label">Technology</div>
    </div>
    <h3 className="card__title">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </h3>
    <p className="card__description">
      Molestiae tenetur dolor architecto mollitia culpa maxime hic similique
      dolore nihil nostrum doloribus corporis ex, maiores repudiandae ad!
      Aliquid provident qui distinctio.
    </p>
  </div>
);

export default Card;
