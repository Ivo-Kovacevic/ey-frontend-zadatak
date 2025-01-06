import { useState } from "react";
import headlineImage from "/images/headline_image.png";
import Skeleton from "./HeaderSkeleton";

export default function Header() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Skeleton />}
      <img
        src={headlineImage}
        alt="orange cat laying next to fence"
        className={`min-h-48 w-screen object-cover transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
