import { useEffect, useState } from "react";
import catImage from "/src/images/meow.png";
import dogImage from "/src/images/woof.png";
import H1 from "../H1";
import H2 from "../H2";
import ContentSkeleton from "./ContentSkeleton";

export default function Content() {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    if (loadedImages === 2) {
      setLoading(false);
    }
  }, [loadedImages]);

  return (
    <>
      {loading && <ContentSkeleton />}
      <section
        className={`bg-gray-100 p-4 flex flex-col gap-4 transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <H1>Daily pet facts - Love!</H1>

        <article className="mx-auto flex max-w-screen-xl flex-col gap-6 md:flex-row">
          <img
            src={catImage}
            alt="closeup picture of a cat"
            className="rounded-xl"
            onLoad={() => setLoadedImages((prev) => prev + 1)}
          />

          <div className="flex flex-col justify-between gap-8 md:gap-0">
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

        <article className="mx-auto flex max-w-screen-xl flex-col gap-6 md:flex-row-reverse">
          <img
            src={dogImage}
            alt="closeup picture of a dog"
            className="rounded-xl"
            onLoad={() => setLoadedImages((prev) => prev + 1)}
          />

          <div className="flex flex-col justify-between gap-8 md:gap-0">
            <H2>The dog</H2>
            <p>
              Domestic dogs have been companions to people for more than 15,000 years. There are
              more than 400 different breeds of dogs. PAWS or your local animal shelter has a wide
              variety of breeds available for adoption. The most popular types are the non-pedigree.
              They are extra special because they are one-of-a-kind!
            </p>
            <p>
              In general, small dogs live longer than large dogs. Small dogs such as terriers may
              live 20 years. Giant dogs like Great Danes may live eight years. The average lifespan
              for a mixed breed dog is 13 to 14 years. By making sure dogs have good food, regular
              veterinary care, shelter and a loving family, they will live longer, healthier lives.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
