import React from "react";
import { PostItButton } from "../components/common/PostItButton";

export const MainPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold mb-4">✏️ 오늘의 생성</h1>

      <div className="flex gap-3 mx-auto my-0">
        <PostItButton text="투두 리스트" className="bg-green-200" to="/todo" />
        <PostItButton text="썸네일" className="bg-red-200" />
      </div>
    </div>
  );
};
