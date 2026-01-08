import React, { useState } from "react";
import { slides } from "./slidesData";
import Slide from "./components/Slide";
import ProgressBar from "./components/ProgressBar";
import FullscreenButton from "./components/FullscreenButton";
import { useEffect, useState as useReactState } from "react";
import "./index.css";

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [revealedPoints, setRevealedPoints] = useState(0);
  const slide = slides[current];
  const [isFullscreen, setIsFullscreen] = useReactState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Handle navigation
  const nextSlide = () => {
    if (revealedPoints < (slide.points?.length || 0)) {
      setRevealedPoints(revealedPoints + 1);
    } else if (
      revealedPoints === (slide.points?.length || 0) &&
      current < slides.length - 1
    ) {
      setCurrent(current + 1);
      setRevealedPoints(0);
    }
  };
  const prevSlide = () => {
    if (revealedPoints > 0) {
      setRevealedPoints(revealedPoints - 1);
    } else if (current > 0) {
      setCurrent(current - 1);
      setRevealedPoints(0);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  // Touch navigation
  let touchStartX = 0;
  React.useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchEndX - touchStartX > 50) prevSlide();
      if (touchStartX - touchEndX > 50) nextSlide();
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ProgressBar current={current} total={slides.length} />
      <div className="flex-1 flex items-center justify-center">
        <Slide
          slide={slide}
          revealedPoints={revealedPoints}
          revealNextPoint={() => nextSlide()}
        />
      </div>
      <div className="flex justify-between items-center p-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={prevSlide}
          disabled={current === 0 && revealedPoints === 0}
        >
          Previous
        </button>
        {!isFullscreen && <FullscreenButton />}
        {revealedPoints < (slide.points?.length || 0) ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={nextSlide}
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={nextSlide}
            disabled={current === slides.length - 1}
          >
            Next Slide
          </button>
        )}
      </div>
      <div className="w-full flex flex-wrap justify-center gap-2 py-4 bg-white border-t">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            className={`px-3 py-1 rounded font-semibold transition-all duration-200 border border-gray-300 shadow-sm text-sm md:text-base ${
              idx === current
                ? "bg-blue-600 text-white border-blue-600 scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => {
              setCurrent(idx);
              setRevealedPoints(0);
            }}
            title={s.heading}
          >
            {s.heading.split(":")[0].split(" ")[0] || `Slide ${idx + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
