import React, { useState } from "react";
import {getFirestore, collection, addDoc, doc, updateDoc} from "firebase/firestore";
const UserContext = React.createContext();

const formBase = {
  user: "",
  password: "",
  name: "",
  surname: "",
  email: "",
  cellphone: "",
};
const orderBase = {
  buyer: {
    email: "",
    name: "",
    cellphone: "",
  },
  products: [
    {
      id: "",
      price: "",
      title: "",
    },
  ],
  date: "",
  total: "",
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(formBase);
  const [isLogged, setIsLogged] = useState(false);
  const [order, setOrder] = useState(orderBase);
  const [userID, setUserID] = useState();

  const setAccount = (user) => { //se setean los datos desde la base de datos al navegador
    setUser({
      user: user.user,
      password: user.password,
      name: user.name,
      surname: user.surname,
      email: user.email,
      cellphone: user.cellphone,
    });
  };

  const newOrder = (cart, getTotalPrice) => { //Función que se encarga de subir las órdenes a la base de datos
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const products = {
      products: cart.cartItems.map((product) => ({
        id: product.id,
        price: product.price,
        title: product.title,
      }))
    };
    const date = new Date();
  
    const newOrder = {
      buyer: {
        email: user.email,
        name: user.name,
        cellphone: user.cellphone,
      },
      ...products,
      date: date,
      total: getTotalPrice
    };
  
    addDoc(orderCollection, newOrder).then((snapshot) => {
      setOrder(orderBase); 
      const updatedUser = Object.assign({}, user, { //Se asigna los IDs de las órdenes al usuario
        orders: [...(user.orders || []), snapshot.id],
      });
      setUser(updatedUser);
      const userRef = doc(db, "users", userID);
      updateDoc(userRef, updatedUser);
    });
  };

  const logUser = () => {
    setIsLogged(true);
  };
  const sessionClose = () => {
    setUser(formBase);
    setIsLogged(false);
  };

  return (
    <UserContext.Provider
      value={{ user, setAccount, isLogged, logUser, sessionClose, newOrder, setUserID, userID }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
