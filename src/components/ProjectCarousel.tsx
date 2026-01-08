const typeformImages = import.meta.glob("../assets/typeform/*", {
  eager: true,
  as: "url",
});
import React, { useState } from "react";

interface ProjectCarouselProps {
  images: string[];
  onClose: () => void;
}

// Dynamically import all images from src/assets/MAM

// Dynamically import all images from src/assets/MAM and src/assets/sudarshini
const mamImages = import.meta.glob("../assets/MAM/*", {
  eager: true,
  as: "url",
});
const sudarshiniImages = import.meta.glob("../assets/sudarshini/*", {
  eager: true,
  as: "url",
});

const getImageSrc = (imgPath: string) => {
  if (imgPath.startsWith("/assets/typeform/")) {
    const fileName = imgPath.split("/assets/typeform/")[1];
    const match = Object.entries(typeformImages).find(([key]) =>
      key.endsWith(fileName)
    );
    if (match) return match[1] as string;
    return "/assets/react.svg";
  }
  if (imgPath.startsWith("/assets/MAM/")) {
    const fileName = imgPath.split("/assets/MAM/")[1];
    const match = Object.entries(mamImages).find(([key]) =>
      key.endsWith(fileName)
    );
    if (match) return match[1] as string;
    return "/assets/react.svg";
  }
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

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  onClose,
}) => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  const imgSrc = getImageSrc(images[current]);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center touch-pan-x bg-black">
      <img
        src={imgSrc || "/assets/react.svg"}
        alt="Project UI"
        className={`w-full h-full rounded shadow-lg bg-black object-contain`}
        style={{ maxHeight: "70vh", maxWidth: "100%" }}
      />
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded shadow"
        onClick={prev}
      >
        ◀
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded shadow"
        onClick={next}
      >
        ▶
      </button>
      <button
        className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default ProjectCarousel;
