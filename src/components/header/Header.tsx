import { useState } from "react";
import headlineImage from "/images/headline_image.png";

export default function Header() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`flex min-h-56 w-full ${loading && "aspect-[3.5] animate-pulse bg-gray-400"}`}>
      <img
        src={headlineImage}
        alt="orange cat laying next to fence"
        className={`w-full object-cover transition-opacity ${loading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
