import React, { SetStateAction, useState } from "react";
import { emojiList } from "../../data/emoji";

interface EmojiPickerProps {
  value: string;
  onChange: (value: string) => void;
  emojiPickerOpen: boolean;
  setEmojiPickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({
  value,
  onChange,
  emojiPickerOpen,
  setEmojiPickerOpen,
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const handleEmojiClick = (emoji: string): void => {
    onChange(emoji);
    setEmojiPickerOpen(false);
  };

  const toggleEmojiPicker = (): void => {
    setEmojiPickerOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block w-fit">
      <button
        onClick={toggleEmojiPicker}
        className="w-15 h-15 border-dotted border-4 text-gray-500 text-3xl rounded-full px-3 py-2"
      >
        {value ? value : "✚"}
      </button>

      {emojiPickerOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-lg p-2">
          <div className="grid grid-cols-5 gap-2 w-[170px]">
            {emojiList.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="text-xl"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
