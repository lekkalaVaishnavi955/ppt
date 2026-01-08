import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percent = ((current + 1) / total) * 100;
  return (
    <div className="w-full h-2 bg-gray-200">
      <div
        className="h-2 bg-blue-500 transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
