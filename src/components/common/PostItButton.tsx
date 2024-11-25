import React from "react";
import { ButtonProps } from "../../types/common";
import { useNavigate } from "react-router-dom";

export const PostItButton: React.FC<ButtonProps> = ({
  text,
  className,
  onclick,
  to,
}) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    if (to) {
      navigate(to);
    }
  };
  return (
    <button
      className={`cursor-pointer px-4 py-7 rounded-md shadow-md text-gray-800 ${className} 
      hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
      onClick={clickHandler}
    >
      <span className="absolute top-0 right-0">📌</span>
      {text}
    </button>
  );
};
