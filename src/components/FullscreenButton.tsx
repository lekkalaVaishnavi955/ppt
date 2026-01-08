import React from "react";

const FullscreenButton: React.FC = () => {
  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };
  return (
    <button
      className="px-3 py-1 bg-gray-700 text-white rounded mx-2"
      onClick={handleFullscreen}
      title="Fullscreen"
    >
      ⛶ Fullscreen
    </button>
  );
};

export default FullscreenButton;
