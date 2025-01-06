import { useEffect, useState } from "react";
import image1 from "/src/images/gallery/image1.png";
import image2 from "/src/images/gallery/image2.png";
import image3 from "/src/images/gallery/image3.png";
import image4 from "/src/images/gallery/image4.png";
import image5 from "/src/images/gallery/image5.png";
import image6 from "/src/images/gallery/image6.png";
import image7 from "/src/images/gallery/image7.png";
import image8 from "/src/images/gallery/image8.png";
import H1 from "../H1";

export default function Gallery() {
  // Works in dev but not in prod
  // const imagesImport = import.meta.glob("/src/images/gallery/*");
  // const images = Object.values(imagesImport).map((image) => image.name);

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const [imageIndex, setImageIndex] = useState(Math.floor(images.length / 2));
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Disable scrolling when image is selected
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedId]);

  const prevImage = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  };

  const nextImage = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  return (
    <section className="flex flex-col gap-4 p-4 transition-opacity duration-300">
      <H1>Gallery</H1>

      <article className="mx-auto w-full max-w-screen-xl">
        <div className="flex gap-16">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Scrollable image ${index + 1}`}
              className={`relative left-1/2 rounded-xl transition-all duration-300 ease-in-out sm:min-w-[500px]`}
              style={{
                transform: `translateX(calc(-50% + ${-100 * imageIndex}% - ${4 * imageIndex}rem))`,
              }}
            />
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
          <div key={image}>
            <div
              className={`flex items-center justify-center ${selectedId === index ? "fixed inset-0 bg-neutral-900/75 p-4" : ""}`}
              onClick={() => setSelectedId(null)}
            >
              <img
                src={image}
                alt=""
                className="w-full max-w-[500px] rounded-xl hover:cursor-pointer hover:brightness-50"
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
