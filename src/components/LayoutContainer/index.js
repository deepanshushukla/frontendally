import React from "react";
import { Route } from "react-router-dom";
//component
import MainLayout from "components/Layout/index";
//context
import UserContext from "context/userContext";
const LayoutContainer = ({ ...props }) => {
  return (
    <UserContext.Provider value={{}}>
      <MainLayout>
        <Route {...props} />
      </MainLayout>
    </UserContext.Provider>
  );
};
export default LayoutContainer;
