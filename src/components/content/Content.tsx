import { useEffect, useState } from "react";
import H1 from "../H1";
import H2 from "../H2";

export default function Content() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const catImage = new Image();
      const dogImage = new Image();
      catImage.src = "images/meow.png";
      dogImage.src = "images/woof.png";
      catImage.onload = dogImage.onload = () => setLoading(false);
    };

    loadImage();
  }, []);

  return (
    <section className="flex flex-col gap-8 bg-gray-100 p-4">
      <H1>Daily pet facts - Love!</H1>

      <article className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 md:flex-row">
        <div
          className={`w-full flex-shrink-0 self-center rounded-xl md:w-2/5 ${loading && "aspect-square animate-pulse bg-gray-400"}`}
        >
          <img
            src="images/meow.png"
            alt="closeup picture of a cat"
            className={`w-full rounded-xl transition-opacity ${loading ? "opacity-0" : "opacity-100"}`}
          />
        </div>

        <div className="flex flex-col justify-between gap-8 lg:text-lg xl:text-xl">
          <H2>The cat</H2>
          <p>
            Cats have been domesticated for around 4,000 years. While they were once valued for
            their hunting abilities, they are now valued for their companionship and loving
            behaviour.
          </p>
          <p>
            While not well known, the collective nouns used for cats and kittens are a clowder of
            cats and a kindle of kittens.
          </p>
          <p>
            Our domestic cats are known as little cats. They differ from large cats such as lions
            and tigers because they are naturally active at night and can purr.
          </p>
          <p>Cats are now the most popular pet in the UK and in the US.</p>
        </div>
      </article>

      <article className="mx-auto flex max-w-screen-xl flex-col gap-6 my-8 md:flex-row-reverse">
        <div
          className={`w-full flex-shrink-0 self-center rounded-xl md:w-2/5 ${loading && "aspect-square animate-pulse bg-gray-400"}`}
        >
          <img src="images/woof.png" alt="closeup picture of a dog" className={`w-full rounded-xl transition-opacity ${loading ? "opacity-0" : "opacity-100"}`} />
        </div>

        <div className="flex flex-col justify-between gap-8 lg:text-lg xl:text-xl">
          <H2>The dog</H2>
          <p>
            Domestic dogs have been companions to people for more than 15,000 years. There are more
            than 400 different breeds of dogs. PAWS or your local animal shelter has a wide variety
            of breeds available for adoption. The most popular types are the non-pedigree. They are
            extra special because they are one-of-a-kind!
          </p>
          <p>
            In general, small dogs live longer than large dogs. Small dogs such as terriers may live
            20 years. Giant dogs like Great Danes may live eight years. The average lifespan for a
            mixed breed dog is 13 to 14 years. By making sure dogs have good food, regular
            veterinary care, shelter and a loving family, they will live longer, healthier lives.
          </p>
        </div>
      </article>
    </section>
  );
}
