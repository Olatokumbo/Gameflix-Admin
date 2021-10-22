import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <AppContext.Provider value={{ auth: [isAuth, setIsAuth] }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
