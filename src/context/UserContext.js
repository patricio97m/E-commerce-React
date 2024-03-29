import React, { useState } from "react";
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

  const logUser = () => { //función que se encarga de setear que el usuario está logueado
    setIsLogged(true);
  };
  const sessionClose = () => { //función que setea la condición de deslogueado y vacía el usuario
    setUser(formBase);
    setIsLogged(false);
  };

  return (
    <UserContext.Provider
      value={{ user, setAccount, isLogged, logUser, sessionClose, setUserID, userID }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
