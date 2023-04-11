import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../sheared/Nav/Nav";

const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Main;
