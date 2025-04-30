// src/components/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mocks/products';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts()
      .then((products) => {
        const foundProduct = products.find((product) => product.id === itemId);
        setProduct(foundProduct);
      })
      .catch((err) => console.error(err));
  }, [itemId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container text-center" style={{ paddingTop: '100px' }}>
      <h1>Detalle del Producto</h1>
  
      <div className="d-flex justify-content-center mt-4">
        <div className="card m-2" style={{ width: '18rem' }}>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ItemDetailContainer;
