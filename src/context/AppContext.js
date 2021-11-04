import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AppContext = createContext();

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    // console.log(process.env);

    axios
      .get(`${process.env.REACT_APP_API_URL}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsAuth(true);
        // if (response.data === token) setIsAuth(true);
        // else {
        //   localStorage.removeItem("token");
        //   setIsAuth(false);
        // }
      });
  }, []);

  return (
    <AppContext.Provider value={{ auth: [isAuth, setIsAuth] }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
