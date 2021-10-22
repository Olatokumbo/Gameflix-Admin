import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    auth: [isAuth],
  } = useContext(AppContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? (
          <div>
            <Navbar />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
