import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { GalleryType } from "../../@types/types";

export default function ScrollGallery({ images, loading }: GalleryType) {
  const [middleImageIndex, setMiddleImageIndex] = useState(0);
  const [clicked, setClicked] = useState<string | null>(null);

  const prevImage = () => {
    setClicked("prev");
    setTimeout(() => setClicked(null), 300);
    setMiddleImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setClicked("next");
    setTimeout(() => setClicked(null), 300);
    setMiddleImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <article className="mx-auto w-full max-w-screen-xl">
      <div className="flex w-full gap-16">
        {images.map((image, index) => (
          <div
            key={`scroll-${index}`}
            className={`relative left-1/2 aspect-square min-w-full rounded-xl transition-transform duration-300 ease-in-out sm:min-w-[500px] ${loading && "animate-pulse bg-gray-400"}`}
            style={{
              transform: `translateX(calc(-50% + ${-100 * middleImageIndex}% - ${4 * middleImageIndex}rem))`,
            }}
          >
            <img
              src={image}
              alt={`Scrollable image ${index + 1}`}
              className={`w-full rounded-xl transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-20 text-8xl">
        <button onClick={prevImage} className={`group ${clicked === "prev" && "animate-squish"}`}>
          <ArrowLeft className="h-16 w-16 group-hover:animate-squish md:h-24 md:w-24" />
        </button>
        <button onClick={nextImage} className={`group ${clicked === "next" && "animate-squish"}`}>
          <ArrowRight className="h-16 w-16 group-hover:animate-squish md:h-24 md:w-24" />
        </button>
      </div>
    </article>
  );
}
