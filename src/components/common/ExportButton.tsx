import React from "react";
import html2canvas from "html2canvas";
import { Button } from "./Button";

interface ExportButtonProps {
  targetId: string;
}

const ExportButton: React.FC<ExportButtonProps> = ({ targetId }) => {
  const handleExport = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const fixedWidth = 385;

      html2canvas(element, {
        width: fixedWidth,
        scale: fixedWidth / element.offsetWidth,
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = img;
        link.download = "todo-list.png";
        link.click();
      });
    }
  };

  return (
    <Button
      text="이미지 내보내기"
      onClick={handleExport}
      className="bg-[#77b3bc] text-white max-w-56 w-full"
    />
  );
};

export default ExportButton;
