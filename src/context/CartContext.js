import React, { useState } from "react";
const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ cartItems: [] });

  const addItem = (item, quantity) => {
    const index = cart.cartItems.findIndex((i) => i.id === item.id); // Se busca si el ítem ya esta en el carrito
    if (index !== -1) {
      // Si el ítem existe, se agrega la cantidad
      const newCartItems = [...cart.cartItems];
      newCartItems[index].quantity += quantity;
      setCart({ ...cart, cartItems: newCartItems });
    } else {
      const newCartItems = [
        //Si no está, se agrega al carrito
        ...cart.cartItems,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          quantity: quantity,
        },
      ];
      setCart({ ...cart, cartItems: newCartItems });
    }
  };

  const removeItem = (itemID) => { //Función que borra un producto en específico asociado a su ID
    const newCartItems = cart.cartItems.filter((item) => item.id !== itemID);
    setCart({ ...cart, cartItems: newCartItems });
  };

  const clear = () => { // Función que borra todos los productos
    setCart({ cartItems: [] });
  };

  const getTotalQuantity = () => { //Función que se encarga de calcular la cantidad total de productos
    let total = 0;
    cart.cartItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.cartItems.reduce((total, item) => { //Función que suma el precio total de todos los productos
      return total + (item.price * item.quantity);
    }, 0);
    return totalPrice;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, getTotalQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
