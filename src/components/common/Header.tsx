import React from "react";
import { useNavigate } from "react-router-dom";
import MyPlanIt from "../../assets/MyPlanIt.png";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-gray-300 p-3 fixed flex items-center justify-between shadow-md">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src={MyPlanIt} alt="logo" className="w-32" />
      </div>
      <div></div>
    </header>
  );
};
