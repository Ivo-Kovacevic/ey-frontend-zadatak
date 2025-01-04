import { useState } from "react";
import H1 from "../H1";

export default function Gallery() {
  const imagesImport = import.meta.glob("/src/images/gallery/*");
  const images = Object.values(imagesImport).map((image) => image.name);
  console.log(images);

  const [imageIndex, setImageIndex] = useState(Math.floor(images.length / 2));

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
    <section className="mx-auto max-w-screen-xl px-4 flex flex-col items-center">
      <H1>Gallery</H1>

      <article>
        <div className="relative flex">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Scrollable image ${index + 1}`}
              className={`relative left-1/2 min-w-full rounded-xl object-cover p-2 transition-all duration-300 ease-in-out sm:min-w-[500px] md:p-16`}
              style={{ transform: `translateX(calc(-50% + ${-100 * imageIndex}%))` }}
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

      <article className="my-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image) => (
          <img key={image} src={image} alt="" className="rounded-xl" />
        ))}
      </article>
    </section>
  );
}
