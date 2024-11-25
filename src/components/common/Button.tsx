import React from "react";
import { ButtonProps } from "../../types/common";

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`min-w-fit p-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};