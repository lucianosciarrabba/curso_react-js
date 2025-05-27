import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const Item = ({ id, name, description, price, image }) => {
  const { addItem } = useContext(CartContext);
  const [showCount, setShowCount] = useState(false);
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (qty) => {
    addItem({ id, name, description, price, image }, qty);
    setAdded(true);
    setQuantity(qty);
  };

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <Link to={`/item/${id}`} className="btn d-flex align-items-center justify-content-center btn-primary m-3">
          Ver detalle
        </Link>
        {!showCount && !added && (
          <button className="btn btn-outline-success" onClick={() => setShowCount(true)}>
            Comprar
          </button>
        )}
        {showCount && !added && (
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        )}
        {added && (
          <div className="mt-2">
            <span className="text-success">Agregado {quantity} al carrito!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
