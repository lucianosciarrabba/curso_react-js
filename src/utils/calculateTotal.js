// src/utils/calculateTotal.js
export const calculateTotal = (cartList) => {
  return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
