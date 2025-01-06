import { useEffect, useState } from "react";
import H1 from "../H1";

export default function Gallery() {
  const [images, setImages] = useState<string[]>(Array(8).fill(""));
  const [loading, setLoading] = useState(true);
  const [middleImageIndex, setMiddleImageIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const loadedImages = await Promise.all(
          Array.from({ length: 8 }, async (_, i) => {
            const res = await fetch(
              `https://res.cloudinary.com/dqbe0apqn/image/upload/image${i + 1}`,
            );
            if (!res.ok) throw new Error(`Failed to load images`);
            return `https://res.cloudinary.com/dqbe0apqn/image/upload/image${i + 1}`;
          }),
        );
        setImages(loadedImages);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const prevImage = () => {
    setMiddleImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  };

  const nextImage = () => {
    setMiddleImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  return (
    <section className={`flex flex-col gap-4 p-4 transition-opacity duration-300`}>
      <H1>Gallery</H1>

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
          <button className="hover:font-bold" onClick={prevImage}>
            &lt;
          </button>
          <button className="hover:font-bold" onClick={nextImage}>
            &gt;
          </button>
        </div>
      </article>

      <article className="relative mx-auto grid w-full max-w-screen-xl grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <div key={`gallery-${index}`} className="">
            <div
              className={`flex w-full items-center justify-center ${selectedId === index ? "fixed inset-0 bg-neutral-900/75 p-4" : "aspect-square rounded-xl"} ${loading && "animate-pulse bg-gray-400"}`}
              onClick={() => setSelectedId(null)}
            >
              <img
                src={image}
                alt=""
                className={`w-full max-w-[500px] rounded-xl transition-opacity duration-500 ${selectedId !== index && "hover:cursor-pointer hover:brightness-50"} ${loading ? "opacity-0" : "opacity-100"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(index);
                }}
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
