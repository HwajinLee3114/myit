import React, { useState } from "react";

const emojiList: string[] = [
  "😊",
  "😂",
  "😍",
  "😎",
  "🥺",
  "🙃",
  "😜",
  "💀",
  "👍",
  "👑",
  "🌈",
  "🔥",
  "🍕",
  "🍔",
  "🍩",
  "🍎",
  "🥑",
  "🌻",
  "⚽",
  "🎉",
];

interface EmojiPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ value, onChange }) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const handleEmojiClick = (emoji: string): void => {
    onChange(value + emoji);
    setIsPickerOpen(false);
  };

  const toggleEmojiPicker = (): void => {
    setIsPickerOpen((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter text or select emoji"
        className="border p-2 w-full"
      />

      <button onClick={toggleEmojiPicker} className="absolute right-2 top-2">
        😊
      </button>

      {isPickerOpen && (
        <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg p-2">
          <div className="grid grid-cols-5 gap-2">
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
