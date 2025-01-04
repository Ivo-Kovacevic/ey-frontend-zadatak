import headlineImage from "/src/images/headline_image.png";

export default function Header() {
  return (
    <header>
      <img
        src={headlineImage}
        alt="cat laying next to fence"
        className="min-h-48 w-screen object-cover"
      />
    </header>
  );
}
