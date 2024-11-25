import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
