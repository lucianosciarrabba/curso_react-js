// src/components/Cart.jsx

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { createOrder } from '../services/orderService';
import { calculateTotal } from '../utils/calculateTotal';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const { cartList, removeItem, clear, totalPrice } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null); // Estado para almacenar el ID de la orden

  const handleCheckout = async (buyer) => {
    const total = calculateTotal(cartList);

    try {
      const generatedOrderId = await createOrder(buyer, cartList, total);
      setOrderId(generatedOrderId); // Almacena el ID de la orden en el estado
      clear(); // Limpia el carrito después de crear la orden
    } catch (error) {
      console.error("Error al crear la orden: ", error);
    }
  };

  if (orderId) {
    return (
      <div className="container text-center" style={{ paddingTop: '100px' }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <b>{orderId}</b></p>
        <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
      </div>
    );
  }

  if (cartList.length === 0) {
    return (
      <div className="container text-center" style={{ paddingTop: '100px' }}>
        <h1>No hay ítems en el carrito</h1>
        <Link to="/" className="btn btn-primary mt-3">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container text-center" style={{ paddingTop: '100px' }}>
      <h1>Carrito de Compras</h1>
      <ul className="list-group mt-4">
        {cartList.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2 className="mt-4">Total a pagar: ${totalPrice}</h2>
      {!showForm && (
        <button className="btn btn-success m-1" onClick={() => setShowForm(true)}>
          Terminar mi compra
        </button>
      )}
      <button className="btn btn-warning m-1" onClick={clear}>Vaciar Carrito</button>
      {showForm && <CheckoutForm onSubmit={handleCheckout} />}
      <Link to="/" className="btn btn-primary m-1">Seguir comprando</Link>
    </div>
  );
};

export default Cart;
