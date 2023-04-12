import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../sheared/Nav/Nav";

const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Main;
