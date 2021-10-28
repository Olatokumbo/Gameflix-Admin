import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AppContext = createContext();

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(()=>{
    
  }, []);

  return (
    <AppContext.Provider value={{ auth: [isAuth, setIsAuth] }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
