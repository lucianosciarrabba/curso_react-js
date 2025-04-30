// src/components/ItemListContainer.jsx

import React, { useEffect, useState } from "react";
import { getProducts } from "../mocks/products";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((products) => {
        if (categoryId) {
          const filteredProducts = products.filter(prod => prod.category === categoryId);
          setItems(filteredProducts);
        } else {
          setItems(products);
        }
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div className="container mt-5 pt-5 text-center">
      <h1>{greeting}</h1>
      <div className="row justify-content-center mt-4">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 d-flex justify-content-center mb-4">
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ItemListContainer;