import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PublicRoute = ({ component: Component, ...rest }) => {
  const {
    auth: [isAuth],
  } = useContext(AppContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? (
          <Redirect to="/" />
        ) : (
          <div>
            <Component {...props} />
          </div>
        )
      }
    />
  );
};

export default PublicRoute;
