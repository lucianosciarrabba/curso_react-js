import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => cartList.some(item => item.id === id);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartList(cartList.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCartList(cartList.filter(item => item.id !== id));
  };

  const clear = () => setCartList([]);

  const totalQuantity = cartList.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const calcItemsQty = () => totalQuantity;

  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      removeItem,
      clear,
      isInCart,
      totalQuantity,
      totalPrice,
      calcItemsQty
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
