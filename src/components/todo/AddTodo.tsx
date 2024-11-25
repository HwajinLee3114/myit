import React, { useState } from "react";
import { Todo } from "../../types/todo";
import { TextField } from "../common/TextField";
import EmojiPicker from "../common/EmojiPicker";
import ColorPicker from "../common/ColorPicker";
import { Button } from "../common/Button";

interface AddTodoProps {
  onAdd: (todo: Todo) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [emoji, setEmoji] = useState("");
  const [time, setTime] = useState("");
  const [bgColor, setBgColor] = useState("bg-white");
  // const [withWho, setWithWho] = useState("");
  // const [loc, setLoc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: Math.random(),
      task,
      emoji,
      time,
      // withWho,
      // loc,
      bgColor,
    };

    if (!newTodo.task) {
      // alert("일정을 입력해 주세요.");
      return false;
    }

    console.info(newTodo);

    onAdd(newTodo);
    setTask("");
    setEmoji("");
    setTime("");
    // setWithWho("");
    // setLoc("");
    setBgColor("bg-white");
  };

  const emojiChangeHandler = (changeEmoji: string): void => {
    setEmoji(changeEmoji);
  };

  const colorChangeHandler = (changeColor: string): void => {
    setBgColor(changeColor);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg shadow-md w-full md:w-96">
      <div className="flex gap-2">
        <EmojiPicker value={emoji} onChange={emojiChangeHandler} />
        <ColorPicker value={bgColor} onChange={colorChangeHandler} />

        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="일정을 입력해 주세요."
          onKeyDown={keyDownHandler}
        />
      </div>

      <div className="flex gap-2">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <Button
          text="추가"
          className="bg-[#94bc77] text-white"
          onClick={(e) => handleSubmit(e as unknown as React.FormEvent)}
        />
      </div>
      {/* <TextField
        value={withWho}
        onChange={(e) => setWithWho(e.target.value)}
        placeholder="누구랑"
      />
      <TextField
        value={loc}
        onChange={(e) => setLoc(e.target.value)}
        placeholder="장소를 입력해 주세요."
      /> */}

      {/* <PostItButton
        btnType="submit"
        text="Add Todo"
        className="bg-blue-500 text-white"
      /> */}
    </div>
  );
};

export default AddTodo;
