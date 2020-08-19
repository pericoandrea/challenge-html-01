import React from 'react';
import Card from './Card';
import './styles/collage.scss';

import db from '../../server/db.json';

const Collage = () => (
  <div className="collage">
    {db.map(dato => (
      <Card
        className={`span-${dato.span}`}
        image={dato.image}
        label={dato.label}
        title={dato.title}
        description={dato.description}
      />
    ))}
  </div>
);

export default Collage;
