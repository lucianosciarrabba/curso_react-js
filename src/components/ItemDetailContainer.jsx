import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../services/productService';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getProducts()
      .then((products) => {
        const foundProduct = products.find((product) => product.id === itemId);
        setProduct(foundProduct);
      })
      .catch((err) => console.error(err));
  }, [itemId]);

  const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
  };

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
            {quantityAdded === 0 ? (
              <ItemCount stock={10} initial={1} onAdd={handleAdd} />
            ) : (
              <Link to="/cart" className="btn btn-success"> Terminar mi compra</Link>
            )}
              <Link to="/" className="btn btn-primary mt-3">Seguir comprando</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
