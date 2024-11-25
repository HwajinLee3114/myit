import React from "react";

interface TextFieldProps {
  value: string;
  placeholder?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const TextField = ({
  value,
  placeholder,
  className,
  onChange,
  onKeyDown,
}: TextFieldProps) => {
  return (
    <input
      type="text"
      className={`w-full p-2 border rounded ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
