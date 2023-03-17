import React, { useState } from "react";
import { getFirestore, collection, addDoc} from "firebase/firestore";
const UserContext = React.createContext();

const formBase = {
  user: "",
  password: "",
  name: "",
  surname: "",
  email: "",
  cellphone: "",
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(formBase);
  const [isLogged, setIsLogged] = useState(false);
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
        quantity: product.quantity
      }))
    };
    const date = new Date();
  
    const newOrder = {
      buyer: {
        user: user.user,
        email: user.email,
        name: user.name,
        cellphone: user.cellphone,
      },
      ...products,
      date: date,
      total: getTotalPrice
    };
  
    addDoc(orderCollection, newOrder);
  };

  const logUser = () => { //función que se encarga de setear que el usuario está logueado
    setIsLogged(true);
  };
  const sessionClose = () => { //función que setea la condición de deslogueado y vacía el usuario
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
