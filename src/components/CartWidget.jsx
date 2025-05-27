import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { calcItemsQty } = useContext(CartContext);
  const totalQuantity = calcItemsQty ? calcItemsQty() : 0;

  return (
    <Link to="/cart" className="d-flex align-items-center me-4" style={{ textDecoration: "none" }}>
      <div className="position-relative">
        <FaShoppingCart size={22} className="text-white" />
        {totalQuantity > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.7rem", padding: "0.25em 0.4em" }}
          >
            {totalQuantity}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
