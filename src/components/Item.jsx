// src/components/Item.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, description, price, image }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
