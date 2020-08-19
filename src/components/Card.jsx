import React from 'react';
import './styles/card.scss';

const Card = props => {
  const { image, label, title, description } = props;
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="Card" />
        <div className="card__label">{label}</div>
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
