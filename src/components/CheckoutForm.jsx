import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(buyer);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2>Completa tus datos</h2>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" name="name" value={buyer.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" value={buyer.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input type="tel" className="form-control" name="phone" value={buyer.phone} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Finalizar compra</button>
    </form>
  );
};

export default CheckoutForm;
