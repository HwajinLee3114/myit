import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full p-3 fixed flex justify-between shadow-md">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        로고
      </div>
      <div>2</div>
    </header>
  );
};
