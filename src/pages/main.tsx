import React from "react";
import { PostItButton } from "../components/common/PostItButton";

export const MainPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">✏️ 오늘도 뚝딱!</h1>

      <div className="flex gap-4 mx-auto my-0">
        <PostItButton
          text="투두 리스트"
          className="bg-green-200 hover:bg-green-300 transition duration-300"
          to="/todo"
        />
        <PostItButton
          text="썸네일"
          className="bg-red-200 hover:bg-red-300 transition duration-300"
        />
      </div>
    </div>
  );
};
