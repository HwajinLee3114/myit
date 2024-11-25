import React, { useState } from "react";
import { colorList } from "../../data/color";
import clsx from "clsx";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const handleColorClick = (color: string): void => {
    onChange(color);
    setIsPickerOpen(false);
  };

  const toggleColorPicker = (): void => {
    setIsPickerOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block w-fit">
      <button
        onClick={toggleColorPicker}
        style={{ backgroundColor: value, borderColor: value }}
        className={clsx(
          "w-15 h-15 h-full rounded-full px-3 py-2 border-dotted border-4"
          // {
          //   [`bg-${value}`]: value,
          //   [`border-red`]: value,
          // }
        )}
      ></button>

      {isPickerOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-lg p-2">
          <div className="grid grid-cols-4 gap-2 w-[170px]">
            {colorList.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorClick(color)}
                className={`w-full h-6`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
