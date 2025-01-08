import { useEffect, useState } from "react";
import H1 from "../H1";
import ScrollGallery from "./ScrollGallery";
import GridGallery from "./GridGallery";

export default function Gallery() {
  const [images, setImages] = useState<string[]>(Array(8).fill(""));
  const [loading, setLoading] = useState(true);

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

  return (
    <section className={`flex flex-col gap-4 p-4 transition-opacity duration-300`}>
      <H1>Gallery</H1>

      <ScrollGallery images={images} loading={loading} />

      <GridGallery images={images} loading={loading} />
    </section>
  );
}
