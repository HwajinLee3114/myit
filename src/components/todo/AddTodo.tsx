import React, { useState } from "react";
import { Todo } from "../../types/todo";
import { TextField } from "../common/TextField";
import EmojiPicker from "../common/EmojiPicker";

interface AddTodoProps {
  onAdd: (todo: Todo) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [emoji, setEmoji] = useState("");
  const [time, setTime] = useState("");
  const [withWho, setWithWho] = useState("");
  const [loc, setLoc] = useState("");
  const [bgColor, setBgColor] = useState("bg-white");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: Math.random(),
      task,
      emoji,
      time,
      withWho,
      loc,
      bgColor,
    };
    onAdd(newTodo);
    setTask("");
    setEmoji("");
    setTime("");
    setWithWho("");
    setLoc("");
    setBgColor("bg-white");
  };

  const emojiChangeHandler = (changeEmoji: string): void => {
    setEmoji(changeEmoji);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-lg shadow-md"
    >
      <TextField
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="일정을 입력해 주세요."
      />

      <EmojiPicker value={emoji} onChange={emojiChangeHandler} />
      
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <TextField
        value={withWho}
        onChange={(e) => setWithWho(e.target.value)}
        placeholder="누구랑"
      />
      <TextField
        value={loc}
        onChange={(e) => setLoc(e.target.value)}
        placeholder="장소를 입력해 주세요."
      />
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
