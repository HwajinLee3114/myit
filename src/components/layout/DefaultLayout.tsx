import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-full flex flex-col p-3 pt-14 items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};
