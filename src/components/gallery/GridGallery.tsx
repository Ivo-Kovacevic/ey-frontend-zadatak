import { useState } from "react";
import { GalleryType } from "../../@types/types";

export default function GridGallery({ images, loading }: GalleryType) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <article className="relative mx-auto grid w-full max-w-screen-xl grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {images.map((image, index) => (
        <div key={`gallery-${index}`} className="">
          <div
            className={`flex items-center justify-center overflow-hidden ${selectedId === index ? "fixed inset-0 bg-neutral-900/75 p-4" : "aspect-square rounded-xl"} ${loading && "animate-pulse bg-gray-400"}`}
            onClick={() => setSelectedId(null)}
          >
            <img
              src={image}
              alt=""
              className={`w-full max-w-[500px] rounded-xl ${selectedId !== index && "transition-all duration-300 hover:brightness-75 hover:scale-125 hover:cursor-pointer"} ${loading ? "opacity-0" : "opacity-100"}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(index);
              }}
            />
          </div>
        </div>
      ))}
    </article>
  );
}
