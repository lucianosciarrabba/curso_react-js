import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container text-center mt-5">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
