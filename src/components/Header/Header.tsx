import headlineImage from "../../assets/images/headline_image.png";

export default function Header() {
  return (
    <header>
      <img src={headlineImage} alt="cat laying next to fence" className="min-h-12 md:w-screen" />
    </header>
  );
}
