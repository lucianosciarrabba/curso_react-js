import React, { useState } from "react";
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-2">
        <button className="btn btn-secondary btn-sm" onClick={decrement}>-</button>
        <span className="mx-2">{count}</span>
        <button className="btn btn-secondary btn-sm" onClick={increment}>+</button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;