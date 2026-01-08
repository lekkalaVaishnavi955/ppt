const typeformImages = import.meta.glob("../assets/typeform/*", {
  eager: true,
  as: "url",
});

const getTypeformImageSrc = (imgPath: string) => {
  if (imgPath.startsWith("/assets/typeform/")) {
    const fileName = imgPath.split("/assets/typeform/")[1];
    const match = Object.entries(typeformImages).find(([key]) =>
      key.endsWith(fileName)
    );
    if (match) return match[1] as string;
    return "/assets/react.svg";
  }
  return imgPath;
};
// Import dynamic image loader from ProjectCarousel
const sudarshiniImages = import.meta.glob("../assets/sudarshini/*", {
  eager: true,
  as: "url",
});

const getImageSrc = (imgPath: string) => {
  if (imgPath.startsWith("/assets/sudarshini/")) {
    const fileName = imgPath.split("/assets/sudarshini/")[1];
    const match = Object.entries(sudarshiniImages).find(([key]) =>
      key.endsWith(fileName)
    );
    if (match) return match[1] as string;
    return "/assets/react.svg";
  }
  // For public images or URLs
  return imgPath;
};
import React, { useState } from "react";
import type { SlideType } from "../slidesData";
import ProjectCarousel from "./ProjectCarousel";

interface SlideProps {
  slide: SlideType;
  revealedPoints: number;
  revealNextPoint: () => void;
}

const Slide: React.FC<SlideProps> = ({
  slide,
  revealedPoints,
  revealNextPoint,
}) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col md:flex-row h-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
      {/* Left: Image or Project Carousel */}
      <div className="md:w-1/2 w-full h-[250px] md:h-auto flex items-stretch justify-stretch bg-gray-100 p-0 overflow-hidden">
        {slide.isProjectSlide &&
        slide.id === "sudarshini-app" &&
        slide.projects ? (
          activeProject !== null ? (
            <ProjectCarousel
              images={slide.projects[activeProject].images}
              onClose={() => setActiveProject(null)}
            />
          ) : (
            <img
              src={getImageSrc(slide.image || "/assets/react.svg")}
              alt="Slide visual"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90"
              style={{ minHeight: "250px" }}
              onClick={() => setActiveProject(0)}
            />
          )
        ) : slide.isProjectSlide && activeProject !== null && slide.projects ? (
          <ProjectCarousel
            images={slide.projects[activeProject].images}
            onClose={() => setActiveProject(null)}
          />
        ) : slide.isCarousel && slide.projects ? (
          activeProject !== null ? (
            <ProjectCarousel
              images={slide.projects[0].images}
              onClose={() => setActiveProject(null)}
            />
          ) : (
            <img
              src={getTypeformImageSrc(
                slide.projects[0].images[0] || "/assets/react.svg"
              )}
              alt="Typeform visual"
              className="w-full h-full object-cover cursor-pointer hover:opacity-90"
              style={{ minHeight: "250px" }}
              onClick={() => setActiveProject(0)}
            />
          )
        ) : (
          <img
            src={slide.image || "/assets/react.svg"}
            alt="Slide visual"
            className="w-full h-full object-cover"
            style={{ minHeight: "250px" }}
          />
        )}
      </div>
      {/* Right: Heading + Points */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-8 font-sans">
        <h2
          className={`text-4xl font-extrabold mb-4 tracking-tight ${
            slide.colorfulHeading
              ? "animate-gradient bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text"
              : "text-gray-800"
          }`}
        >
          {slide.heading}
        </h2>
        <ul className="space-y-4">
          {slide.points &&
            slide.points.map((point, idx) => (
              <li
                key={idx}
                className={`text-xl md:text-2xl transition-all duration-500 leading-relaxed ${
                  revealedPoints > idx
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                onClick={revealedPoints === idx ? revealNextPoint : undefined}
                style={{
                  cursor: revealedPoints === idx ? "pointer" : "default",
                }}
              >
                {point}
                {/* Project names clickable for project slide */}
                {slide.isProjectSlide &&
                  slide.projects &&
                  idx < slide.projects.length && (
                    <span
                      className="ml-2 text-blue-600 underline cursor-pointer"
                      onClick={() => setActiveProject(idx)}
                    >
                      {slide.projects[idx].name}
                    </span>
                  )}
                {/* Carousel for Typeform project */}
                {slide.isCarousel && idx === 0 && slide.projects && (
                  <span
                    className="ml-2 text-blue-600 underline cursor-pointer"
                    onClick={() => setActiveProject(0)}
                  >
                    {slide.projects[0].name}
                  </span>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;
