import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const [count, setCount] = useState(0);

  // Funciones para sumar y restar
  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  return (
    <div className="d-flex align-items-center me-4">
      <div className="position-relative">
        <FaShoppingCart size={22} className="text-white" />
        {count > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.7rem", padding: "0.25em 0.4em" }}
          >
            {count}
          </span>
        )}
      </div>

      {/* Botones para probar el contador */}
      <div className="ms-2 d-flex flex-column">
        <button
          onClick={increment}
          className="btn btn-sm btn-light py-0 px-1 mb-1"
          style={{ fontSize: "0.6rem", lineHeight: "1" }}
        >
          +
        </button>
        <button
          onClick={decrement}
          className="btn btn-sm btn-light py-0 px-1"
          style={{ fontSize: "0.6rem", lineHeight: "1" }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartWidget;



