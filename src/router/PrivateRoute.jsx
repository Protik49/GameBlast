import React, { useContext } from "react";
import { MyContext } from "../contexts/ContextProvider";
import Loading from "../components/Loading/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MyContext);
  const loaction = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} state={loaction.pathname}></Navigate>;
  }
};

export default PrivateRoute;
