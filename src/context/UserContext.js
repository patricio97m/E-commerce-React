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
  const [user, setUser] = useState( formBase );
    const [isLogged, setIsLogged] = useState(false);

    const setAccount = (user) =>{
      setUser({
        user: user.user,
        password: user.password,
        name: user.name,
        surname: user.surname,
        email: user.email,
        cellphone: user.cellphone
      })
    }

    const logUser = () =>{
        setIsLogged(true);
    }
    const sessionClose = () =>{
      setUser(formBase);
      setIsLogged(false);
    }
  
    return (
      <UserContext.Provider value={{ user, setAccount, isLogged, logUser, sessionClose }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export { UserContext, UserProvider };
  