import { createContext, useEffect, useState } from "react";
// import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState(() => {
    try {
      const servicesLocalStorage = localStorage.getItem("servicesCart");
      return servicesLocalStorage ? JSON.parse(servicesLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("servicesCart", JSON.stringify(cartItems));
    console.log("Esto es cartItems",cartItems)
  }, [cartItems]);

  const addServiceToCart = (service) => {
    const inCart = cartItems.find(
      (serviceInCart) => serviceInCart.id === service.id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((serviceInCart) => {
          if (serviceInCart.id === service.id) {
            return { ...inCart, amount: serviceInCart.amount + 1 };
          } else return serviceInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...service, amount: 1 }]);
    }
  };
  const deleteServiceFromCart = (service) => {
    const inCart = cartItems.find(
      (serviceInCart) => serviceInCart.id === service.id
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((serviceInCart) => serviceInCart.id !== service.id)
      );
    } else {
      setCartItems((serviceInCart) => {
        if (serviceInCart.id === service.id) {
          return { ...inCart, amount: inCart.amount - 1 };
        } else return serviceInCart;
      });
    }
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addServiceToCart, deleteServiceFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
